<template>
    <div class="login-page">
        <div class="form-container">
            <div class="flex-container">
                <div class="login-logo">
                    <img src="my-vue-app/src/assets/icon/logo-MoonBloom.png" alt="Logo MoonBloom" class="logo-image" />
                    <h1 class="title">MOONBLOOM</h1>
                </div>
                <div class="form-box">
                    <Form @submit="submitForm">
                        <div class="form-group">
                            <label for="email" class="label">Correo electrónico</label>
                            <input type="email" id="email" name="email" placeholder="Ingrese su correo electrónico..." class="input">
                        </div>
                        <div class="form-group">
                            <label for="password" class="label">Contraseña</label>
                            <input type="password" id="password" name="password" placeholder="Ingrese su contraseña..." class="input">
                        </div>
                        <div class="form-group text-right">
                            <a href="pass-recuperation-view.html" class="link">¿Olvidaste tu contraseña?</a>
                        </div>
                        <div class="form-group button-group">
                            <Button type="pink" @click="submitForm">Iniciar sesión</Button>
                            <div class="separator"></div>
                            <Button type="green" @click="goToRegister">Registrarse</Button>
                        </div>
                    </Form>
                </div>
                <div class="margin-container"></div> <!-- Contenedor de margen -->
            </div>
        </div>
    </div>
</template>

<script setup>
import Button from '../components/Button.vue';
import 'my-vue-app/src/style.css';

const submitForm = () => {
    console.log('Formulario enviado');
};

const goToRegister = () => {
    // Redirigir a la página de registro
    window.location.href = "register1-view.html"; // Cambia esto si usas un enrutador
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
    max-width: 800px; /* Ajusta el tamaño máximo según sea necesario */
}

.flex-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.login-logo, .form-box, .margin-container {
    font-family: var(--fuente-principal);
    flex: 1; /* Hace que los contenedores sean del mismo tamaño */
    display: flex;
    flex-direction: column;
    align-items: center; /* Centra el contenido dentro de cada contenedor */
}

.logo-image {
    width: 150px; /* Ajusta el tamaño del logo según sea necesario */
    margin-bottom: 1rem; /* Añade espacio entre el logo y el título */
    margin-right: 50%;
}

.title {
    font-family: var(--fuente-principal);
    color: var(--color-celeste-oscuro);
    font-size: var(--tamaño-fuente-grande);
    font-weight: bolder;
    letter-spacing: 0.20em;
    margin-right: 50%;
}

/* Estilos del formulario */
.form-box {
    background-color: rgba(255, 255, 255, 0.7); /* bg-opacity-70 */
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* shadow-lg */
}

/* Estilos de grupo de formularios */
.form-group {
    margin-bottom: 1rem;
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
    flex-direction: column; /* Coloca los botones uno encima del otro */
    align-items: center; /* Centra los botones */
    gap: 1rem;
}

/* Aumentar el tamaño de los botones */
.button-group .Green-Button,
.button-group .Pink-Button {
    padding: 0.25rem; /* Espaciado interno más grande */
    width: 100%; /* Asegura que los botones ocupen todo el ancho del contenedor */
    border-radius: 0.5rem; /* Aumentar el radio de los bordes, opcional */
}

/* Estilos para la línea separadora */
.separator {
    width: 100%; /* Ajusta el ancho de la línea */
    height: 1px; /* Ajusta el grosor de la línea */
    background-color: #D1D5DB; /* Color de la línea */
    margin: 0.75rem 0; /* Espacio superior e inferior */
}

.margin-container {
    flex: 1; /* Contenedor de margen del mismo tamaño */
}
</style>
