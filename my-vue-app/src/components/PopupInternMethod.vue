<template>
  <div class="modal" @click.self="closeModal">
    <div class="modal-content">
      <h3>Método Anticonceptivo Interno</h3>
      <div class="mb-4">
        <select id="intern-method" name="intern-method" class="select-style" v-model="selectedMethod">
          <option value="" disabled selected>Seleccionar uno (opcional)</option>
          <option value="pildora">Inyecciones anticonceptivas</option>
          <option value="diu">DIU de cobre</option>
          <option value="diu-hormonal">DIU hormonal</option>
          <option value="implante">Implante anticonceptivo</option>
          <option value="anillo">Anillo vaginal</option>
          <option value="ninguna">Ninguna</option>
        </select>
      </div>
      <ButtonComponent type="pink" @click="handleContinue">Continuar</ButtonComponent>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ButtonComponent from './ButtonComponent.vue';

const emit = defineEmits(['close']);
const selectedMethod = ref('');

const closeModal = () => {
  emit('close');
};

const handleContinue = () => {
  if (selectedMethod.value === '') {
    alert('Por favor selecciona un método o elige "Ninguna".');
  } else {
    closeModal();
  }
};
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
  color: black;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  text-align: center;
}

.modal-content h3 {
  font-size: 16px;
  color: black;
}

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
