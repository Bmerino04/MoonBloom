<template>
    <form @submit.prevent="handleSubmit" class="form-opacity">
      <slot></slot> <!-- Aquí se inyectarán los campos del formulario -->
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
      width: 100%;  
      padding: 20px;
      border-radius: 10px;
      width: 100%;
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
  
  </style>