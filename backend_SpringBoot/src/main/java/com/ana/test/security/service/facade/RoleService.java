package com.ana.test.security.service.facade;

import java.util.List;
import com.ana.test.security.bean.Role;


public interface RoleService {
    List<Role> findAll();

    Role findByAuthority(String authority);

    Role findById(Long id);

    void deleteById(Long id);

    Role save(Role role);

    List<Role> create(List<Role> roles);

    public Role update(Role role);

    int delete(Role role);

    int deleteByAuthority(String authority);

}
