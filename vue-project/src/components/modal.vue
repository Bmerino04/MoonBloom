<template>
    <div v-if="isOpen" :id="id" class="modal" @click.self="closeModal">
      <div class="modal-content">
        <h3>{{ title }}</h3>
        <slot></slot> 
      </div>
    </div>
  </template>
  
<script setup>
  const props = defineProps({
    id: String,
    title: String,
    isOpen: Boolean, 
  });
  
  const emit = defineEmits(['close']); 
  
  function closeModal() {
    emit('close'); 
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
  display: flex; 
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  color: var(--color-negro);
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center; 
}

.modal-content h3 {
  font-size: 16px;
  margin-bottom: 20px;
}
</style>
  