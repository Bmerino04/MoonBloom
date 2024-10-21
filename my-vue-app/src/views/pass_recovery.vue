<template>
    <div class="login-page">
        <div class="form-container">
            <div class="flex-container">
                <div class="login-logo">
                    <img src="my-vue-app/src/assets/icon/logo-MoonBloom.png" alt="Logo MoonBloom" class="logo-image" />
                    <h1 class="title">MOONBLOOM</h1>
                </div>
                <div class="form-box">
                    <!-- Primer formulario: Recuperación de contraseña con correo -->
                    <Form v-if="currentForm === 1" @submit.prevent="continueRecovery">
                        <div class="form-group">
                            <label for="email" class="label">Correo electrónico</label>
                            <input type="email" id="email" name="email" placeholder="Ingrese su correo electrónico..." class="input" />
                        </div>
                        <div class="form-group button-group">
                            <Button type="pink">Recuperar contraseña</Button>
                        </div>
                        <div class="or-text">
                            <span>o</span>
                        </div>
                        <div class="form-group button-group">
                            <Button type="green" @click="goToRegister">Registrarse</Button>
                        </div>
                    </Form>
                    
                    <!-- Segundo formulario: Pregunta de seguridad -->
                    <Form v-if="currentForm === 2" @submit.prevent="continueRecovery">
                        <div class="form-group">
                            <label for="security-question" class="label">¿Cuál es el nombre de tu mascota?</label>
                            <input type="text" id="security-question" name="security-question" placeholder="Respuesta..." class="input" />
                        </div>
                        <div class="form-group button-group">
                            <Button type="pink">Continuar</Button>
                        </div>
                        <div class="or-text">
                            <span>o</span>
                        </div>
                        <div class="form-group button-group">
                            <Button type="green" @click="goToRegister">Registrarse</Button>
                        </div>
                    </Form>

                    <!-- Tercer formulario: Confirmación final -->
                    <Form v-if="currentForm === 3" @submit.prevent="continueRecovery">
                        <div class="form-group">
                            <label for="new-password" class="label">Nueva contraseña</label>
                            <input type="password" id="new-password" name="new-password" placeholder="Ingrese su nueva contraseña..." class="input" />
                        </div>
                        <div class="form-group">
                            <label for="confirm-password" class="label">Confirmar contraseña</label>
                            <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirme su nueva contraseña..." class="input" />
                        </div>
                        <div class="form-group button-group">
                            <Button type="pink">Restablecer contraseña</Button>
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
import 'my-vue-app/src/style.css';

const router = useRouter();
const currentForm = ref(1);

const continueRecovery = () => {
    if (currentForm.value < 3) {
        currentForm.value++;
    } else {
        console.log('Recuperación completada');
        router.push('/login');  
    }
};

const goToRegister = () => {
    router.push('/register');  
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
    padding: 0.5rem;
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

.or-text {
    font-size: 14px;
    color: black;
    margin: 1rem 0;
    text-align: center;
}


.margin-container {
    flex: 1;
}
</style>
