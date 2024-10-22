<template>
  <div class="phasesSlider">
    <div class="buttons">
      <button @click="previousSlide" class="back-button">
        <img src="../assets/img_cal/left-arrow.png" alt="Anterior" />
      </button>
      <h2>{{ slideTitles[currentSlideIndex] }}</h2>
      <button @click="nextSlide" class="next-button">
        <img src="../assets/img_cal/right-arrow.png" alt="Siguiente" />
      </button>
    </div>  

    <div v-if="currentSlideIndex < 3">
      <div v-for="(slide, index) in slides" :key="index" v-show="index === currentSlideIndex" class="slide">
        <LineChart :chartId="`LineChart${index + 1}`" :labels="slide.labels" :data="slide.data" />
      </div>
    </div>

    <div v-if="currentSlideIndex === 3" class="slide">
      <SexualTrendSlider/>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import LineChart from './LineChart.vue';
import SexualTrendSlider from './SexualTrendSlider.vue';
import axios from 'axios';

const slides = ref([]);
const slideTitles = ["Ciclo", "Fase Menstrual", "Día a Ovular", "Tendencia Sexual"];
const currentSlideIndex = ref(0);

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:3000/users?user_name=ana_garcia');
    const user = response.data[0];

    slides.value = [
      {
        labels: ["Ciclo 1", "Ciclo 2", "Ciclo 3", "Ciclo 4"],
        data: user.cycle_data.cycles_registered,
        summary: `Promedio del ciclo: ${user.cycle_data.avg_cycle_duration} días, Variaciones: ${user.cycle_data.cycle_variation} días, Anomalías: ${user.cycle_data.cycle_anomalies}, Método anticonceptivo: ${user.anticonceptive_method}`
      },
      {
        labels: ["Fase 1", "Fase 2", "Fase 3", "Fase 4"],
        data: user.menstrual_phase_data.menstrual_phase_durations,
        summary: `Promedio de la fase menstrual: ${user.menstrual_phase_data.avg_menstrual_phase_duration} días, Variaciones: ${user.menstrual_phase_data.menstrual_phase_variation} días, Anomalías: ${user.menstrual_phase_data.menstrual_phase_anomalies}`
      },
      {
        labels: ["Ciclo 1", "Ciclo 2", "Ciclo 3", "Ciclo 4"],
        data: user.ovulation_data.day_of_ovulation,
        summary: `Promedio del día de ovulación: Día ${user.ovulation_data.avg_day_of_ovulation}, Variaciones: ${user.ovulation_data.ovulation_variation} días, Anomalías: ${user.ovulation_data.ovulation_anomalies}`
      },
      {
        labels: [],
        data: [],
        summary: `Tendencia Sexual`
      }
    ];  
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

onMounted(() => {
  fetchData();
});
const nextSlide = () => {
  currentSlideIndex.value = (currentSlideIndex.value + 1) % slides.value.length;
};

const previousSlide = () => {
  currentSlideIndex.value = (currentSlideIndex.value - 1 + slides.value.length) % slides.value.length;
};
</script>
<style scoped>

.phasesSlider{
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 0px;
  padding-top: 2.6%;
  margin-left: 7%;
}
.slide{
  display: flex;
  width: 54%;
  height: auto;
  justify-content: center;
}
button{
    background-color:transparent;
    border-color:transparent;
}
.buttons{
    width: 15%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 19%;
    background-color:var(--color-rosado-claro-barras);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    text-align: center;
    padding-left: 5px;
    padding-right: 5px;
}
.buttons img{ 
    width: 45px;
    padding-top: 5px;
}
.buttons h2{
    font-family: var(--fuente-principal);
    line-height: 1.15;
    width: 180px;
    font-size: 18px;
    color: var(--color-blanco)
}
</style>
