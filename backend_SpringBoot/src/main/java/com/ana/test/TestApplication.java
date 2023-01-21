package com.ana.test;

import com.ana.test.security.bean.Role;
import com.ana.test.security.bean.User;
import com.ana.test.security.service.facade.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import com.ana.test.security.common.AuthoritiesConstants;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.ArrayList;

@EnableSwagger2
@SpringBootApplication
public class TestApplication {

    public static ConfigurableApplicationContext ctx;

    public static void main(String[] args) {
        ctx = SpringApplication.run(TestApplication.class, args);
    }

    public static ConfigurableApplicationContext getCtx() {
        return ctx;
    }


    @Bean
    public CommandLineRunner init(UserService userService) {

        return (args) -> {
            if (true) {

                User userForAdmin = new User("admin@ana.org", "admin@123");
                Role roleForAdmin = new Role();
                roleForAdmin.setAuthority(AuthoritiesConstants.admin);
                if (userForAdmin.getRoles() == null)
                    userForAdmin.setRoles(new ArrayList<>());
                userForAdmin.getRoles().add(roleForAdmin);
                userService.save(userForAdmin);


                User userForClient = new User("client@ana.org","client@123");
                Role roleForClient = new Role();
                roleForClient.setAuthority(AuthoritiesConstants.client);
                if (userForClient.getRoles() == null)
                    userForClient.setRoles(new ArrayList<>());
                userForClient.getRoles().add(roleForClient);
                userService.save(userForClient);


                User userForPilot = new User("pilot@ana.org","pilot@123");
                Role roleForPilot = new Role();
                roleForPilot.setAuthority(AuthoritiesConstants.pilot);
                if (userForPilot.getRoles() == null)
                    userForPilot.setRoles(new ArrayList<>());
                userForPilot.getRoles().add(roleForPilot);
                userService.save(userForPilot);

                User userForAnonymous = new User("anonymous@ana.org", "anonymous@123");
                Role roleForAnonymous = new Role();
                roleForAnonymous.setAuthority(AuthoritiesConstants.anonymous);
                if (userForAnonymous.getRoles() == null)
                    userForAnonymous.setRoles(new ArrayList<>());
                userForAnonymous.getRoles().add(roleForAnonymous);
                userService.save(userForAnonymous);

            }
        };
    }

}
