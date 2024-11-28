package com.moonbloom.backend.entities;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class UserData implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userDataId;

    private int weight;

    private float height;

    @Enumerated(EnumType.STRING) // Persiste el nombre del enum como texto
    private ContraceptiveMethod contraceptiveMethod;

    // Getters y setters
    public int getUserDataId() {
        return userDataId;
    }

    public void setUserDataId(int userDataId) {
        this.userDataId = userDataId;
    }

    public int getWeight() {
        return weight;
    }

    public void setWeight(int weight) {
        this.weight = weight;
    }

    public float getHeight() {
        return height;
    }

    public void setHeight(float height) {
        this.height = height;
    }

    public ContraceptiveMethod getContraceptiveMethod() {
        return contraceptiveMethod;
    }

    public void setContraceptiveMethod(ContraceptiveMethod contraceptiveMethod) {
        this.contraceptiveMethod = contraceptiveMethod;
    }

    public float getIMC() {
        if (height > 0) {
            return weight / (height * height); // Fórmula del IMC: peso / (altura^2)
        } else {
            return 0;
        }
    }

}


