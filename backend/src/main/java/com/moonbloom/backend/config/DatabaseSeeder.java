package com.moonbloom.backend.config;


import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.moonbloom.backend.entities.ContraceptiveMethod;
import com.moonbloom.backend.entities.User;
import com.moonbloom.backend.entities.UserData;
import com.moonbloom.backend.repositories.UserRepository;


@Configuration
public class DatabaseSeeder {

    @Bean
    public CommandLineRunner seedDatabase(UserRepository userRepository) {
        return (args) -> {
            // Crear un usuario
            User user = new User();
            user.setName("ana_garcia");
            user.setEmail("ana.garcia@example.com");
            user.setPassword("ana12345");
            user.setProfilePicture("profile.jpg");
            user.setSecurityQuestion("Nombre de tu primera mascota");
            user.setSecurityAnswer("Olivia");

            // Crear datos asociados de UserData
            UserData userData = new UserData();
            userData.setWeight(60);
            userData.setHeight(1.65f);
            userData.setContraceptiveMethod(ContraceptiveMethod.INYECCION); 


            // Asociar UserData al User
            user.setUserData(userData);

            // Guardar el usuario (esto también guarda UserData automáticamente)
            userRepository.save(user);

            System.out.println("Base de datos inicializada con un usuario y sus datos.");
        };
    }
}