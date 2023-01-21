package com.ana.test.security.service.impl;

import java.util.*;


import com.ana.test.security.ws.vo.UserVo;
import com.ana.test.service.core.impl.AbstractServiceImpl;
import com.ana.test.service.util.SearchUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import com.ana.test.security.bean.Role;
import com.ana.test.security.bean.User;
import com.ana.test.security.dao.UserDao;

import com.ana.test.security.service.facade.RoleService;
import com.ana.test.security.service.facade.UserService;
import org.springframework.web.server.ResponseStatusException;

import javax.persistence.EntityManager;

@Service
public class UserServiceImpl extends AbstractServiceImpl<User> implements UserService {

    @Autowired
    private UserDao userDao;

    @Autowired
    private RoleService roleService;

    @Autowired
    @Lazy
    PasswordEncoder bCryptPasswordEncoder;

    @Autowired
    EntityManager entityManager;


    @Override
    public List<User> findAllWithoutList() {
        return userDao.findAllWithoutList();
    }


    @Override
    public User findByEmail(String email) {
        return userDao.findByEmail(email);
    }

    @Override
    public List<User> findAll() {
        return userDao.findAll();
    }


    @Override
    public User findByUsername(String username) {
        if (username == null)
            return null;
        return userDao.findByUsername(username);
    }

    @Override
    public User findByUsernameWithRoles(String username) {
        if (username == null)
            return null;
        return userDao.findByUsername(username);
    }

    @Override
    @Transactional
    public int deleteByUsername(String username) {
        return userDao.deleteByUsername(username);
    }

    @Override
    public User findById(Long id) {
        if (id == null)
            return null;
        return userDao.getOne(id);
    }

    @Transactional
    public void deleteById(Long id) {
        userDao.deleteById(id);
    }


    public void prepareUser(User user) {

        User foundedUserByUsername = findByUsername(user.getUsername());
        User foundedUserByEmail = userDao.findByEmail(user.getEmail());
        if (foundedUserByUsername != null || foundedUserByEmail != null) return;
        else {
            if (user.getPassword() == null || user.getPassword().isEmpty()) {
                user.setPassword((user.getUsername()));
            }
            user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));

            user.setAccountNonExpired(true);
            user.setAccountNonLocked(true);
            user.setCredentialsNonExpired(true);
            user.setEnabled(true);
            user.setPasswordChanged(false);
            user.setDateCreation(new Date());

            if (user.getRoles() != null) {
                Collection<Role> roles = new ArrayList<Role>();
                for (Role role : user.getRoles()) {
                    roles.add(roleService.save(role));
                }
                user.setRoles(roles);
            }
        }


    }


    @Override
    public User save(User user) {
        User foundedUserByUsername = findByUsername(user.getUsername());
        User foundedUserByEmail = findByEmail(user.getEmail());
        if (foundedUserByUsername != null) return null;
        else {
            if (user.getPassword() == null || user.getPassword().isEmpty()) {
                user.setPassword((user.getUsername()));
            }
            user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));

            user.setAccountNonExpired(true);
            user.setAccountNonLocked(true);
            user.setCredentialsNonExpired(true);
            user.setEnabled(true);
            if (user.getPasswordChanged() != true) {
                user.setPasswordChanged(false);
            }
            prepare(user);
            user.setDateCreation(new Date());

            if (user.getRoles() != null) {
                Collection<Role> roles = new ArrayList<Role>();
                for (Role role : user.getRoles()) {
                    roles.add(roleService.save(role));
                }
                user.setRoles(roles);
            }

            return userDao.save(user);
        }
    }

    @Override
    public User update(User user) {
        User foundedUser = findById(user.getId());
        User foundedUserByEmail = findByEmail(user.getEmail());
        if (foundedUser == null) return null;

        else {
            if (!foundedUser.getEmail().equals(user.getEmail()) && (foundedUserByEmail != null)) {
                throw new ResponseStatusException(HttpStatus.valueOf(512));
            }
            foundedUser.setEmail(user.getEmail());
            foundedUser.setUsername(user.getUsername());
            foundedUser.setPrenom(user.getPrenom());
            foundedUser.setArchive(user.getArchive());
            foundedUser.setDateArchivage(user.getDateArchivage());
            foundedUser.setNom(user.getNom());
            foundedUser.setEnabled(user.isEnabled());
            foundedUser.setCredentialsNonExpired(user.isCredentialsNonExpired());
            foundedUser.setAccountNonLocked(user.isAccountNonLocked());
            foundedUser.setAccountNonExpired(user.isAccountNonExpired());
            foundedUser.setAuthorities(new ArrayList<>());
            Collection<Role> roles = new ArrayList<Role>();
            for (Role role : user.getRoles()) {
                roles.add(roleService.save(role));
            }
            prepare(user);
            foundedUser.setRoles(roles);
            return userDao.save(foundedUser);
        }
    }

    @Override
    @Transactional
    public int delete(Long id) {
        User foundedUser = findById(id);
        if (foundedUser == null) return -1;
        userDao.delete(foundedUser);
        return 1;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return findByUsernameWithRoles(username);
    }

    public List<User> findByCriteria(UserVo userVo) {

        String query = "SELECT o FROM User o where 1=1 ";

        query += SearchUtil.addConstraint("o", "id", "=", userVo.getId());
        query += SearchUtil.addConstraint("o", "numeroMatricule", "LIKE", userVo.getNumeroMatricule());
        query += SearchUtil.addConstraint("o", "email", "LIKE", userVo.getEmail());
        query += SearchUtil.addConstraint("o", "archive", "=", userVo.getArchive());
        query += SearchUtil.addConstraintDate("o", "createdAt", "=", userVo.getCreatedAt());
        query += SearchUtil.addConstraintDate("o", "updatedAt", "=", userVo.getUpdatedAt());
        query += SearchUtil.addConstraint("o", "username", "LIKE", userVo.getUsername());
        query += SearchUtil.addConstraint("o", "password", "LIKE", userVo.getPassword());
        query += SearchUtil.addConstraint("o", "prenom", "LIKE", userVo.getPrenom());
        query += SearchUtil.addConstraint("o", "nom", "LIKE", userVo.getNom());
        query += SearchUtil.addConstraint("o", "role", "LIKE", userVo.getRole());
        query += SearchUtil.addConstraintMinMaxDate("o", "createdAt", userVo.getCreatedAtMin(),
                userVo.getCreatedAtMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "updatedAt", userVo.getUpdatedAtMin(),
                userVo.getUpdatedAtMax());
        query += SearchUtil.addConstraintMinMaxDate("o", "dateArchivage", userVo.getDateArchivageMin(),
                userVo.getDateArchivageMax());


        return entityManager.createQuery(query).getResultList();
    }


}
