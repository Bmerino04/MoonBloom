<template>
    <div v-if="isOpen" :id="id" class="modal" @click.self="closeModal">
      <div class="modal-content">
        <h3>{{ title }}</h3>
        <slot></slot> <!-- Permite insertar contenido en el modal -->
      </div>
    </div>
  </template>
  
<script setup>
  const props = defineProps({
    id: String,
    title: String,
    isOpen: Boolean, // Controla la visibilidad del modal
  });
  
  const emit = defineEmits(['close']); // Define el evento 'close' para emitir cuando se cierra el modal
  
  function closeModal() {
    emit('close'); // Emite el evento de cierre al componente padre
  }
</script>
  
<style scoped>
 .modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex; /* Para centrar el modal en la pantalla */
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  color: var(--color-negro);
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  text-align: center; /* Asegura que todo dentro del modal esté centrado */
  display: flex;
  flex-direction: column;
  align-items: center; /* Alinea los elementos hijos, como el botón, en el centro */
}

.modal-content h3 {
  font-size: 16px;
  margin-bottom: 20px;
}
</style>
  