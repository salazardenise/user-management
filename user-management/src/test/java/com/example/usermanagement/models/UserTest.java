package com.example.usermanagement.models;

import org.junit.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringRunner;
import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class UserTest {

    @Test
    public void testUserName() {
        User user = new User();
        user.setUserName("username1");
        assertEquals("username1", user.getUserName());
    }

    @Test
    public void testFirstName() {
        User user = new User();
        user.setFirstName("firstname1");
        assertEquals("firstname1", user.getFirstName());
    }

    @Test
    public void testLastName() {
        User user = new User();
        user.setLastName("lastname1");
        assertEquals("lastname1", user.getLastName());
    }

    @Test
    public void testPassword() {
        User user = new User();
        user.setPassword("password1");
        assertEquals("password1", user.getPassword());
    }

    @Test
    public void testPhone() {
        User user = new User();
        user.setPhone("phone1");
        assertEquals("phone1", user.getPhone());
    }

    @Test
    public void testEmail() {
        User user = new User();
        user.setEmail("email1");
        assertEquals("email1", user.getEmail());
    }
}
