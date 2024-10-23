<template>
  <aside class="Panel-Info-Profile shadow-md">
    <div>
      <div class="Profile-img shadow-md">
        <img src="../assets/icon/foto-perfil-ejemplo.png" alt="Foto de perfil" />
      </div>
      <div class="Edit-btn" @click="editProfile">
        <img src="../assets/icon/pencil.png" alt="Editar foto" />
      </div>
    </div>
    <a class="user-name">{{ userData.userName }}</a>
    <div class="user-data">
      <p><strong>Peso:</strong> {{ userData.weight }}kg <a href="#" @click="editWeight">[editar]</a></p>
      <p><strong>Altura:</strong> {{ userData.height }}cm <a href="#" @click="editHeight">[editar]</a></p>
      <div class="IMC-bar">
        <div class="range"></div>
        <div class="IMC-pointer" :style="{ left: getBmiPointerPosition }"></div>
      </div>
      <p>Tu IMC es: {{ userData.bmi }}</p>
      <a href="#" class="log-out shadow-md" @click="logout">Cerrar sesión</a>
    </div>
  </aside>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router'; 

const props = defineProps({
  userData: {
    type: Object,
    required: true,
  },
});

const getBmiPointerPosition = computed(() => {
  const bmi = props.userData.bmi;
  const minBmi = 10;
  const maxBmi = 40;
  const pointerPosition = ((bmi - minBmi) / (maxBmi - minBmi)) * 100;
  return `${Math.min(Math.max(pointerPosition, 0), 100)}%`;
});

const router = useRouter(); 

function editProfile() {
  console.log('Editar perfil');
}

function editWeight() {
  console.log('Editar peso');
}

function editHeight() {
  console.log('Editar altura');
}

function logout() {
  router.push('/login');
}
</script>

<style scoped>
.Panel-Info-Profile {
  background-color: var(--color-rosado-claro);
  border: 8px solid var(--color-rosado-claro-barras);
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 20px;
}

.Profile-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  border: 6px solid var(--color-celeste-oscuro);
}

.Profile-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.Edit-btn {
  position: absolute;
  top: 220px;
  right: 30px;
  background-color: var(--color-rosado-medio);
  border: 6px solid var(--color-celeste-oscuro);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.Edit-btn img {
  width: 30px;
  height: 30px;
  object-fit: contain;
}

.Edit-btn:hover {
  background-color: var(--color-rosado-claro);
}

.user-name {
  display: block; 
  width: 100%; 
  background-color: var(--color-rosado-medio);
  color: var(--color-celeste-oscuro); 
  font-weight: 600; 
  padding: 0.5rem;
  border-radius: 20px; 
  transition: background-color 0.3s ease; 
  text-align: center;
  text-decoration: none; 
}

.user-data {
  background-color: var(--color-rosado-medio);
  border: 2px solid var(--color-rosado-claro-barras);
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  text-align: left;
}

.user-data p {
  font-size: 18px;
  color: var(--color-celeste-oscuro);
}

.IMC-bar {
  width: 100%;
  height: 20px;
  background-color: lightgray;
  border-radius: 5px;
  margin: 20px 0;
  position: relative;
}

.range {
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #2C5D5B, #48A09F, #FFFF00, #FFCC00, #FF0000);
  border-radius: 5px;
}

.IMC-pointer {
  position: absolute;
  top: 0;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid black;
}

.log-out {
  background-color: var(--color-celeste-medio);
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px; 
  display: block;
  width: 60%;
  text-align: center;
}

.log-out:hover {
  background-color: var(--color-celeste-oscuro);
}
</style>
