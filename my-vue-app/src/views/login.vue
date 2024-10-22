<template>
    <div class="login-page">
        <div class="form-container">
            <div class="flex-container">
                <div class="login-logo">
                    <img src="../assets/icon/logo-MoonBloom.png" alt="Logo MoonBloom" class="logo-image" />
                    <h1 class="title">MOONBLOOM</h1>
                </div>
                <div class="form-box">
                    <Form @submit="submitForm">
                        <div class="form-group">
                            <label for="email" class="label">Correo electrónico</label>
                            <input type="email" id="email" name="email" placeholder="Ingrese su correo electrónico..." class="input" />
                        </div>
                        <div class="form-group">
                            <label for="password" class="label">Contraseña</label>
                            <input type="password" id="password" name="password" placeholder="Ingrese su contraseña..." class="input" />
                        </div>

                        <!-- Mostrar mensaje de error si existe un error -->
                        <div v-if="error" class="error-message">
                            {{ errorMessage }}
                        </div>

                        <div class="form-group text-right">
                            <a @click="passRecovery" class="link">¿Olvidaste tu contraseña?</a>
                        </div>
                        <div class="form-group button-group">
                            <Button type="pink">Iniciar sesión</Button>
                            <div class="separator"></div>
                            <div class="register-text">¿No tienes una cuenta?</div>
                            <Button type="green" @click="goToRegister">Registrarse</Button>
                        </div>
                    </Form>
                </div>
                <div class="margin-container"></div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Button from '../components/Button.vue';
import Form from '../components/Form.vue'; 
import axios from 'axios';
import '../style.css';

const router = useRouter();

// Estado para el error y mensaje
const error = ref(false);
const errorMessage = ref('');

const submitForm = async () => {
    console.log('Formulario enviado');

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await axios.get('http://localhost:3000/users');
        console.log(response.data);
        const users = response.data;

        // Verificar si el usuario existe
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            console.log('Inicio de sesión exitoso', user);
            error.value = false; // Restablecer el estado del error si es correcto
            router.push('/userInfo');
        } else {
            console.error('Credenciales incorrectas');
            error.value = true; // Activar el estado de error
            errorMessage.value = 'Correo electrónico o contraseña incorrectos'; // Mensaje de error
        }
    } catch (error) {
        console.error('Error al cargar los datos de usuarios:', error);
        error.value = true;
        errorMessage.value = 'Hubo un error al intentar conectarse. Por favor, intente nuevamente.';
    }
};

const goToRegister = () => {
    router.push('/register'); 
};

const passRecovery = () => {
    router.push('/passRecovery');
};
</script>


<style scoped>
/* Estilos generales */
.login-page {
    background-image: url('./src/assets/icon/login-background.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.form-container {
    width: 100%;
    max-width: 1000px;
}

.flex-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-logo {
    font-family: var(--fuente-principal);
    flex: 0 0 30%; 
    display: flex;
    flex-direction: column;
    align-items: center;
}

.form-box {
    font-family: var(--fuente-principal);
    flex: 0 0 35%; 
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.7);
    padding: 3%;
    padding-top: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    margin: 0 1rem; 
}

.margin-container {
    font-family: var(--fuente-principal);
    flex: 0 0 30%; 
}

.logo-image {
    width: 150px;
    margin-bottom: 1rem;
    margin-right: 70%;
}

.title {
    font-family: var(--fuente-principal);
    color: var(--color-celeste-oscuro);
    font-size: var(--tamaño-fuente-grande);
    font-weight: bolder;
    letter-spacing: 0.20em;
    margin-right: 70%;
}

/* Estilos del formulario */
.form-group {
    margin-bottom: 1rem;
    width: 100%;
}

.label {
    display: block;
    font-size: 14px;
    margin-bottom: 0.5rem;
}

.input {
    width: 100%; 
    padding: 0.5rem;
    border: 1px solid #D1D5DB;
    border-radius: 0.375rem;
    outline: none;
    margin: 0.5rem 0; 
}

.input:focus {
    border-color: var(--color-teal);
}

.text-right {
    text-align: right;
}

.link {
    color: var(--color-celeste-oscuro); 
    text-decoration: none; 
    cursor: pointer;
    transition: color 0.3s ease-in-out; 
}

/* Cambios al hacer hover */
.link:hover {
    color: var(--color-teal); 
    text-decoration: underline; 
}

/* Estilos para el grupo de botones */
.button-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.button-group .Green-Button,
.button-group .Pink-Button {
    font-size: 14px;
    padding: 0.25rem;
    width: 100%;
    border-radius: 0.5rem;
}

.register-text {
    font-size: 14px;
    color: var(--color-negro);
}

/* Estilos para la línea separadora */
.separator {
    width: 100%;
    height: 1px;
    background-color: #D1D5DB;
    margin-top: 5%;
}

.margin-container {
    flex: 1;
}

/* Estilo para el mensaje de error */
.error-message {
    color: red;
    font-size: 14px;
    margin-bottom: 1rem;
    text-align: center;
}
</style>
