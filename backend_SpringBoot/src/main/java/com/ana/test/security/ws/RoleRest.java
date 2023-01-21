package com.ana.test.security.ws;

import java.util.List;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;

import com.ana.test.security.bean.Role;
import com.ana.test.security.service.facade.RoleService;

@RequestMapping("/api/roles")
@RestController
public class RoleRest {
    @Autowired
    private RoleService roleService;

    @GetMapping("/")
    public List<Role> findAll() {
        return this.roleService.findAll();
    }
    
}
