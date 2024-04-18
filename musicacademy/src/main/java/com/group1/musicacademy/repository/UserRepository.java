package com.group1.musicacademy.repository;

import com.group1.musicacademy.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);

    default boolean existsByUsername(String username) {
        return findByUsername(username).isPresent();
    }
}