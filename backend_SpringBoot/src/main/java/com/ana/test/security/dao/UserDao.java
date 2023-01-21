package com.ana.test.security.dao;

import com.ana.test.security.bean.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserDao extends JpaRepository<User, Long> {
    User findByUsername(String username);

//    @Query("SELECT u FROM User u WHERE TYPE(u) <> Chercheur")
    @Query("SELECT u FROM User u")
    List<User> findAll();

    @Query("SELECT NEW com.ana.test.security.bean.User(u.id,u.credentialsNonExpired,u.enabled,u.createdAt,u.updatedAt,u.email,u.accountNonExpired,u.accountNonLocked," +
            "u.username,u.password,u.prenom,u.nom,u.passwordChanged) FROM User u")
    List<User> findAllWithoutList();

    int deleteByUsername(String username);

    User findByEmail(String email);
    
}

