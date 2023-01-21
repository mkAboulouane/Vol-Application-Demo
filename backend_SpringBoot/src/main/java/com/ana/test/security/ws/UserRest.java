package com.ana.test.security.ws;

import com.ana.test.security.bean.User;
import com.ana.test.security.service.facade.UserService;
import com.ana.test.security.ws.converter.UserConverter;
import com.ana.test.security.ws.vo.UserVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/users")
@RestController
public class UserRest {
    @Autowired
    private UserService userService;

    @Autowired
    private UserConverter userConverter;

    @PreAuthorize("hasRole('ROLE_SUPER_ADMIN')")
    @GetMapping("/")
    public List<User> findAll() {
        return this.userService.findAll();
    }


    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        userService.deleteById(id);
    }

    @PostMapping("/save")
    public UserVo save(@RequestBody UserVo uservo) {
        User user = userConverter.toItem(uservo);
        return userConverter.toVo(userService.save(user));
    }

    @PutMapping("/")
    public User update(@RequestBody User user) {
        return userService.update(user);
    }

    @DeleteMapping("/id/{id}")
    public int delete(@PathVariable Long id) {
        return userService.delete(id);
    }

    @GetMapping("/username/{username}")
    public User findByUsernameWithRoles(@PathVariable String username) {
        return userService.findByUsernameWithRoles(username);
    }

    @DeleteMapping("/username/{username}")
    public int deleteByUsername(@PathVariable String username) {
        return userService.deleteByUsername(username);
    }

    @GetMapping("/{id}")
    public User findById(@PathVariable Long id) {
        return userService.findById(id);
    }


//    public User findByUsername(String username) {
//        return userService.findByUsername(username);
//    }

}
