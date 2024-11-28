package com.moonbloom.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.moonbloom.backend.entities.User;

public interface UserRepository extends JpaRepository<User, Integer> {
}

