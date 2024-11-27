package com.moonbloom.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.moonbloom.backend.entities.UserData;

public interface UserDataRepository extends JpaRepository<UserData, Integer> {
}