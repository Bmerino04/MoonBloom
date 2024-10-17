<template>
    <div class="mb-4">
      <select
        id="intern-method"
        name="intern-method"
        class="select-style"
        v-model="selectedMethod"
      >
        <option value="" disabled selected>Seleccionar uno (opcional)</option>
        <option value="pildora">Inyecciones anticonceptivas</option>
        <option value="diu">DIU de cobre</option>
        <option value="diu-hormonal">DIU hormonal</option>
        <option value="implante">Implante anticonceptivo</option>
        <option value="anillo">Anillo vaginal</option>
        <option value="ninguna">Ninguna</option>
      </select>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, defineEmits } from 'vue'; // Asegúrate de importar `watch`
  
  // Definimos la propiedad emit para enviar el valor seleccionado al padre
  const emit = defineEmits(['update:selectedMethod']);
  
  // Creamos un ref para el método seleccionado
  const selectedMethod = ref('');
  
  // Observamos cambios en el método seleccionado y lo emitimos al componente padre
  watch(selectedMethod, (newValue) => {
    emit('update:selectedMethod', newValue);
  });
  </script>
  
  <style scoped>
  .select-style {
    width: 100%;
    padding: 10px;
    margin-bottom: 10%;
    border: 1px solid gray;
    border-radius: 5px;
    outline: none;
    background-color: white; 
    color: black; 
    transition: border-color 0.3s;
  }
  
  .select-style:focus {
    border-color: teal; 
  }
  
  .select-style option {
    background-color: white;
    color: black;
  }
  </style>
  