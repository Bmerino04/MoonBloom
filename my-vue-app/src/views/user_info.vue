<template>
  <div class="User-info-page bg-A6C4C2">
    <Navbar :currentView="'perfil'" />

    <section class="Main-container flex gap-20 p-4 bg-white rounded-lg bg-opacity-50 justify-center">
      <UserProfilePanel v-if="userData" :userData="userData" />
  
      <div class="Text-panel-container">
        <TextPanel 
          title="Anticonceptivos Internos"
          content="Los métodos anticonceptivos internos pueden afectar el ciclo menstrual de diferentes maneras."
        >
          <Button class="method-btn" @click="openModal">Registrar o eliminar un método Anticonceptivo</Button>
        </TextPanel>
  
        <!-- Modal -->
        <Modal :isOpen="isModalOpen" title="Método Anticonceptivo Interno" @close="closeModal">
          <SelectMethod v-model="selectedMethod" />
          <a href="#" class="close-modal" @click="closeModal">Continuar</a>
        </Modal>
  
        <div class="text-panel-sub-container flex gap-4">
          <TextPanel title="Duración Periodo/Ciclo">
            <p><strong>Tu periodo suele durar:</strong> {{ userData.period_duration_est }} días <a href="#" class="editar">[editar]</a></p>
            <p><strong>Tu ciclo suele durar:</strong> {{ userData.cycle_duration_est }} días <a href="#" class="editar">[editar]</a></p>
            <p class="Note">Nota: Esta estimación se usará para poner de trasfondo previo a los registros.</p>
          </TextPanel>
  
          <TextPanel title="Actualmente estás usando:">
            <p>Estás usando: {{ userData.anticonceptive_method }}. Este método suele hacer que las menstruaciones sean más ligeras y menos dolorosas.</p>
            <p class="note">Nota: El método anticonceptivo se tomará en cuenta para futuras predicciones.</p>
          </TextPanel>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Navbar from '../components/navbar.vue';
import UserProfilePanel from '../components/UserProfilePanel.vue';
import TextPanel from '../components/TextPanel.vue';
import SelectMethod from '../components/SelectMethod.vue';
import Button from '../components/Button.vue';
import Modal from '../components/Modal.vue';

const isModalOpen = ref(false);
const selectedMethod = ref(null);
const userData = ref({}); // Inicializa userData como un objeto vacío

function openModal() {
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
}

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/users');
    console.log("Datos del usuario: ", response.data);
    
    // Encuentra al usuario y mapea los datos necesarios
    const user = response.data.find(user => user.user_name === 'ana_garcia');
    if (user) {
      userData.value = {
        userName: user.user_name,
        email: user.email,
        weight: user.weight,
        height: user.height,
        bmi: user.imc,
        bmiPointerPosition: `${(calculateBMI(user.weight, user.height) / 40) * 100}%`, // Ejemplo de cálculo de posición del puntero
        profilePicture: user.profilePicture || "../assets/icon/foto-perfil-ejemplo.png", // Imagen por defecto
        period_duration_est: user.period_duration_est,
        cycle_duration_est: user.cycle_duration_est,
        anticonceptive_method: user.anticonceptive_method,
      };
    }
  } catch (error) {
    console.error('Error al cargar los datos:', error);
  }
});

// Función para calcular el IMC
function calculateBMI(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2); // Devuelve el IMC con 2 decimales
}
</script>


<style scoped>

.User-info-page{
  background-color: var(--color-celeste-fondo);
}

.Text-panel-container {
  padding-left: 10%;
  flex: 1;
}

.text-panel-sub-container {
  display: flex;
  gap: 16px;
  width: 100%; /* Asegura que el contenedor ocupe todo el ancho disponible */
}

.text-panel-sub-container > * {
  flex: 1; /* Hace que los elementos compartan equitativamente el espacio disponible */
  min-width: 0; /* Evita que el contenido interno fuerce un mínimo de ancho */
}


body{
    
    font-family: var(--fuente-principal);
    background-color: var(--color-celeste-fondo) ;
}


.Main-container {
    display: flex;
    align-items: center;
    flex-wrap: wrap; /* Permite que el contenido se ajuste dentro del ancho máximo */
    padding: 5% 5%;
    width: 100%;
    max-width: 1200px; /* Ajusta este valor según tu diseño */
    font-family: var(--fuente-principal);
}

.Panel-Info-Profile{
    background-color: var(--color-rosado-claro);
    border:8px solid var(--color-rosado-claro-barras);
    border-radius: 8px;
    height: 60%;
    width: 25%;
    padding: 20px;
}

.Text-panel-container {
    display: flex;
    flex-direction: column;
    gap: 20px; /* Separación entre los paneles */
    width: 60%;
}


.method-btn {
    background-color: var(--color-celeste-oscuro);
    border: 8px solid var(--color-celeste-oscuro);
    width: 200px; /* Ancho fijo del botón */
    height: 100px; /* Altura del botón para mantener la proporción 2:1 */
    border-radius: 8px; /* Bordes redondeados */
    color: white;
    text-decoration: none;
    font-size: 16px;
    display: flex; /* Alinea el texto en el centro del botón */
    align-items: center;
    justify-content: center;
    text-align: center; /* Centra el texto horizontalmente */
}
.method-btn:hover {
    background-color: var(--color-header);
}

.Text-panel h2 {
    font-size: var(--tamaño-fuente-medio);
    color: var(--color-rosado-medio);
    text-align: left; /* Cambiado a izquierda */
    margin: 5%;
}

.Text-panel p {
    font-size: 20px;
    color: var(--color-blanco-opaco);
    text-align: left; /* Cambiado a izquierda */
    margin: 5%;
}
.text-panel-sub-container {
    display: flex;
    gap: 20px; /* Espacio entre los paneles */
    width: 100%;
}

/* Los paneles dentro del sub-contenedor ocuparán la mitad del espacio cada uno */
.text-panel-sub-container .Panel-Texto {
    flex: 1; /* Se aseguran de ocupar el mismo espacio */
}

.contained-text {
    display: flex;
    flex-direction: column;
    gap: 20px; /* Espacio entre los bloques de texto */
}

.title {
    font-size: 20px !important;
    font-weight: bold;
    color: var(--color-rosado-medio);
    text-align: center;
}

.content {
    font-size: 20px !important;
    color: var(--color-blanco);
}

.subtitle {
    margin-bottom: 10px;
}

.subtitle strong {
    font-weight: bold;
}

.subtitle span {
    display: block; /* Hace que el texto del subtítulo y la opción de editar estén en líneas separadas */
}

.edit {
    color: var(--color-rosado-medio) !important;
    text-decoration: none;
}

.edit:hover {
    text-decoration: underline;
}

.Note {
    font-size: 14px !important;
    font-weight: bold !important;
    color: var(--color-blanco);
    margin-top: 20px !important;
    margin-bottom: 5px !important;
}


  
.close-modal {
    display: block; 
    width: 50%; 
    border: 3px solid var(--color-rosado-medio); 
    background-color: var(--color-rosado-claro);
    color: var(--color-negro); 
    font-weight: 600; 
    padding: 0.5rem;
    border-radius: 0.375rem; 
    transition: background-color 0.3s ease; 
    text-align: center;
    text-decoration: none; 
    margin: 30px;
  }

  

</style>
