<template>
    <div class="register-page">
        <div class="form-container">
            <div class="flex-container">
                <div class="login-logo">
                    <img src="../assets/icon/logo-MoonBloom.png" alt="Logo MoonBloom" class="logo-image" />
                    <h1 class="title">MOONBLOOM</h1>
                </div>
                <div class="form-box">
                    <!-- Formulario de registro -->
                    <Form v-if="currentForm === 1" @submit.prevent="continueRegister">
                        <div class="form-group">
                            <label for="user-name" class="label">Nombre de usuario</label>
                            <input type="user-name" id="user-name" name="user-name" placeholder="Ingrese su nombre de usuario..." class="input" />
                        </div>
                        <div class="form-group">
                            <label for="email" class="label">Correo electrónico</label>
                            <input type="email" id="email" name="email" placeholder="Ingrese su correo electrónico..." class="input" />
                        </div>
                        <div class="form-group">
                            <label for="password" class="label">Contraseña</label>
                            <input type="password" id="password" name="password" placeholder="Ingrese su contraseña..." class="input" />
                        </div>
                        <div class="form-group">
                            <label for="confirm-password" class="label">Confirmar contraseña</label>
                            <input type="confirm-password" id="confirm-password" name="confirm-password" placeholder="Confirme su contraseña..." class="input" />
                        </div>
                        <div class="form-group button-group">
                            <Button type="pink">Continuar</Button>
                        </div>
                        <p>¿Ya tienes una cuenta registrada?</p>
                        <div class="form-group button-group">
                            <Button type="green" @click="goToLogin">Iniciar sesión</Button>
                        </div>
                    </Form>

                    <!-- Formulario de pregunta de seguridad -->
                    <Form v-if="currentForm === 2" @submit.prevent="continueRegister">
                        <div class="form-group">
                            <label for="security-question" class="label">Pregunta de seguridad</label>
                            <input type="security-question" id="security-question" name="security-question" placeholder="Ej: nombre de tu primera mascota" class="input" />
                        </div>
                        <div class="form-group">
                            <label for="security-answer" class="label">Respuesta</label>
                            <input type="security-answer" id="security-answer" name="security-answer" placeholder="Ej: Olivia" class="input" />
                        </div>
                        <p>Asegúrate de que solo tú sepas la respuesta.</p>
                        <div class="form-group button-group">
                            <Button type="pink">Continuar</Button>
                        </div>
                    </Form>

                    <!-- Formulario de datos físicos -->
                    <Form v-if="currentForm === 3" @submit.prevent="continueRegister">
                        <div class="form-group">
                            <label for="weight" class="label">Peso</label>
                            <input type="text" id="weight" name="weight" placeholder="Kg" class="input" />
                        </div>
                        <div class="form-group">
                            <label for="height" class="label">Altura</label>
                            <input type="text" id="height" name="height" placeholder="Cm" class="input" />
                        </div>
                        <div class="form-group">
                            <label for="start-period" class="label">Inicio de su último periodo</label>
                            <input type="text" id="start-period" name="start-period" placeholder="dd/mm/aaaa" class="input" />
                        </div>
                        <div class="form-group">
                            <label for="end-period" class="label">Término de su último periodo</label>
                            <input type="text" id="end-period" name="end-period" placeholder="dd/mm/aaaa" class="input" />
                        </div>
                        <div class="form-group">
                            <label for="cycle-duration" class="label">Duración de su ciclo</label>
                            <input type="text" id="cycle-duration" name="cycle-duration" placeholder="Días que suele durar (ej: 28)" class="input" />
                        </div>
                        <div class="form-group">
                            <label for="period-duration" class="label">Duración de su periodo</label>
                            <input type="text" id="period-duration" name="period-duration" placeholder="Días que suele durar (ej: 5)" class="input" />
                        </div>
                        <div class="form-group button-group">
                            <Button type="pink">Continuar</Button>
                        </div>
                    </Form>

                    <!-- Formulario de método anticonceptivo -->
                    <Form v-if="currentForm === 4" @submit.prevent="continueRegister">
                        <div class="form-group">
                            <label for="intern-method" class="label">Método anticonceptivo</label>
                            <SelectMethod></SelectMethod>
                        </div>
                        <div class="form-group button-group">
                            <Button type="pink">Continuar</Button>
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
import SelectMethod from '../components/SelectMethod.vue';
import '../style.css';

const router = useRouter();
const currentForm = ref(1); 

const continueRegister = () => {
    if (currentForm.value < 4) {
        currentForm.value++;
    } else {
        console.log('Registro completado');
        router.push('/login');
    }
};

const goToLogin = () => {
    router.push('/login');
};
</script>

<style scoped>
/* Estilos generales */
.register-page {
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
</style>
