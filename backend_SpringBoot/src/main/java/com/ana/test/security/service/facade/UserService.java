package com.ana.test.security.service.facade;

import com.ana.test.security.bean.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;


public interface UserService extends UserDetailsService {

    List<User> findAllWithoutList();
    

    User findByEmail(String email);

    List<User> findAll();


    User findByUsername(String username);

    User findById(Long id);

    void deleteById(Long id);

    User save(User user);

    User update(User user);

    int delete(Long id);

    User findByUsernameWithRoles(String username);

    int deleteByUsername(String username);

    public UserDetails loadUserByUsername(String username);

    public void prepareUser(User user);

}
