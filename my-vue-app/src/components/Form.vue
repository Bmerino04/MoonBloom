<template>
    <form @submit.prevent="handleSubmit" class="form-opacity">
      <slot></slot> <!-- Aquí se inyectarán los campos del formulario -->
      <div class="text-center my-4">o</div>
      <div class="form-footer">
        <slot name="footer"></slot> <!-- Permite añadir contenido al pie del formulario -->
      </div>
    </form>
</template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  // Prop para manejar la acción de envío
  const props = defineProps({
    onSubmit: Function // Función opcional para manejar el submit
  });
  
  const handleSubmit = () => {
    if (props.onSubmit) {
      props.onSubmit(); // Llama a la función de submit si se proporciona
    }
  };
  </script>
  
  <style scoped>
  .form-opacity {
      padding: 20px;
      border-radius: 10px;
      background-color: rgba(255, 255, 255, 0.7); /* Fondo blanco con opacidad */
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra para el contenedor del formulario */
  }
  
  /* Estilo para los enlaces de la contraseña olvidada */
  a {
      color: var(--color-celeste-medio);
      text-decoration: none;
  }
  
  a:hover {
      color: var(--color-celeste-oscuro);
      text-decoration: underline;
  }
  
  /* Estilo para el texto centrado */
  .text-center {
      text-align: center;
      margin: 1rem 0; /* Espaciado superior e inferior */
  }
  
  /* Estilo para el pie del formulario */
  .form-footer {
      display: flex;
      flex-direction: column;
      align-items: center; /* Centrar elementos en el pie */
  }
  </style>