package com.moonbloom.backend.entities;

public enum ContraceptiveMethod {
    INYECCION("Inyecciones anticonceptivas", "Método hormonal aplicado mediante inyección."),
    DIU_COBRE("DIU de cobre", "Dispositivo intrauterino sin hormonas, hecho de cobre."),
    DIU_HORMONAL("DIU hormonal", "Dispositivo intrauterino que libera hormonas."),
    IMPLANTE("Implante anticonceptivo", "Pequeño implante que libera hormonas."),
    ANILLO("Anillo vaginal", "Método hormonal que se coloca dentro de la vagina."),
    NINGUNA("Ninguna", "No se utiliza ningún método anticonceptivo.");

    private final String name;
    private final String description;

    ContraceptiveMethod(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public static ContraceptiveMethod fromName(String name) {
        for (ContraceptiveMethod method : ContraceptiveMethod.values()) {
            if (method.getName().equalsIgnoreCase(name)) {
                return method;
            }
        }
        throw new IllegalArgumentException("No contraceptive method found with name: " + name);
    }
}

