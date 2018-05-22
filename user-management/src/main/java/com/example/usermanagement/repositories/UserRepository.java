package com.example.usermanagement.repositories;

import com.example.usermanagement.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
}
