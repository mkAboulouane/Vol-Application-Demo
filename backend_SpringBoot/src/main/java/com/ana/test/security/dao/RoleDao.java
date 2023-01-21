package com.ana.test.security.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ana.test.security.bean.Role;

@Repository
public interface RoleDao extends JpaRepository<Role, Long> {
    Role findByAuthority(String authority);

    int deleteByAuthority(String authority);

}

