package com.moonbloom.backend;

package com.moonbloom.backend;
import java.io.Serializable;

@Entity
public class UserData implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userDataId;

    private int weight;

    private float height;

    @Enumerated(EnumType.STRING) // Usamos ENUM para contraceptiveMethod
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
}
