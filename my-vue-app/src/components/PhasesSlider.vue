<template>
  <div class="phasesSlider">
    <div v-if="currentSlideIndex < 3">
      <div v-for="(slide, index) in slides" :key="index" v-show="index === currentSlideIndex" class="slide-container">
        <div class="slide">
          <div class="buttons">
      <button @click="previousSlide" class="back-button">
        <img src="../assets/img_cal/left-arrow.png" alt="Anterior" />
      </button>
      <h2>{{ slideTitles[currentSlideIndex] }}</h2>
      <button @click="nextSlide" class="next-button">
        <img src="../assets/img_cal/right-arrow.png" alt="Siguiente" />
      </button>
    </div>  
        <LineChart :chartId="`LineChart${index + 1}`" :labels="slide.labels" :data="slide.data" />
        </div>
        <SummaryBox 
        :type="'phase'"
        :phaseTitle="slideTitles[currentSlideIndex]"
        :data="{
          avgCycleDuration: slide.avgCycleDuration,
          shortestCycle: slide.shortestCycle,
          longestCycle: slide.longestCycle,
          anomalyMessage: slide.anomalyMessage,
          contraceptiveMessage: slide.contraceptiveMessage
        }"
        />
      </div>
    </div>

    <div v-if="currentSlideIndex === 3" class="sexualTrendSlide">
      <div class="sexButtons">
      <button @click="previousSlide" class="back-button">
        <img src="../assets/img_cal/left-arrow.png" alt="Anterior" />
      </button>
      <h2>{{ slideTitles[currentSlideIndex] }}</h2>
      <button @click="nextSlide" class="next-button">
        <img src="../assets/img_cal/right-arrow.png" alt="Siguiente" />
      </button>
    </div>  
      <SexualTrendSlider/>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import LineChart from './LineChart.vue';
import SexualTrendSlider from './SexualTrendSlider.vue';
import axios from 'axios';
import SummaryBox from './SummaryBox.vue';

const slides = ref([]);
const slideTitles = ["Ciclo", "Fase Menstrual", "Día a Ovular", "Tendencia Sexual"];
const currentSlideIndex = ref(0);

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:3000/users?user_name=ana_garcia');
    const user = response.data[0];

    const shortestCycleIndex = user.cycle_data.cycles_registered.indexOf(Math.min(...user.cycle_data.cycles_registered));
    const longestCycleIndex = user.cycle_data.cycles_registered.indexOf(Math.max(...user.cycle_data.cycles_registered));
    slides.value = [
      {
        labels: user.cycle_data.cycle_intervals,
        data: user.cycle_data.cycles_registered,
        avgCycleDuration: user.cycle_data.avg_cycle_duration,
        shortestCycle: user.cycle_data.cycle_intervals[shortestCycleIndex],
        longestCycle: user.cycle_data.cycle_intervals[longestCycleIndex],
        anomalyMessage: user.cycle_data.cycle_anomalies ? `Riesgo de embarazo en el ciclo ${user.cycle_data.cycle_anomalies}` : "No hay anomalías registradas.",
        contraceptiveMessage: user.anticonceptive_method ? `Registras el método anticonceptivo: ${user.anticonceptive_method}.` : "No registras un método anticonceptivo que afecte tu ciclo."
      },
      {
        labels: user.cycle_data.cycle_intervals,
        data: user.menstrual_phase_data.menstrual_phase_durations,
        avgCycleDuration: user.menstrual_phase_data.avg_menstrual_phase_duration,
        shortestCycle: user.cycle_data.cycle_intervals[shortestCycleIndex],
        longestCycle: user.cycle_data.cycle_intervals[longestCycleIndex],
        anomalyMessage: user.menstrual_phase_data.menstrual_phase_anomalies ? `Anomalías en la fase menstrual del ciclo ${user.menstrual_phase_data.menstrual_phase_anomalies}` : "No hay anomalías registradas en las fases menstruales.",
        contraceptiveMessage: user.anticonceptive_method ? `Registras el método anticonceptivo: ${user.anticonceptive_method}.` : "No registras un método anticonceptivo que afecte tu ciclo."
      },
      {
        labels: user.cycle_data.cycle_intervals,
        data: user.ovulation_data.day_of_ovulation,
        avgCycleDuration: user.ovulation_data.avg_day_of_ovulation,
        shortestCycle: user.cycle_data.cycle_intervals[shortestCycleIndex],
        longestCycle: user.cycle_data.cycle_intervals[longestCycleIndex],
        anomalyMessage: user.ovulation_data.ovulation_anomalies ? `Anomalías en el ciclo de ovulación ${user.ovulation_data.ovulation_anomalies}` : "No hay anomalías registradas en los días de ovulación.",
        contraceptiveMessage: user.anticonceptive_method ? `Registras el método anticonceptivo: ${user.anticonceptive_method}.` : "No registras un método anticonceptivo que afecte tu ciclo."
      },
      {
        labels: [],
        data: [],
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
}
.slide-container{
  display: flex;
  width: 100%;
  justify-content: center;
}
.slide-container SummaryBox{
  width: 0%;
  justify-content: center;
}  
.slide{
  display: flex;
  flex-direction: column;
  width: 55%;
  height: 100%;
  padding-left: 3%;
  padding-right: 3%;
  align-items: center;
}
.sexButtons{
    width: 17%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:var(--color-rosado-claro-barras);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    text-align: center;
    margin-left: 20%;
}
.sexButtons img{ 
    width: 45px;
    padding-top: 5px;
}
.sexButtons h2{
    font-family: var(--fuente-principal);
    line-height: 1.15;
    width: 180px;
    font-size: 18px;
    color: var(--color-blanco);
    padding: 0;
    margin: 0;
}
button{
    background-color:transparent;
    border-color:transparent;
}
.buttons{
    width: 30%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
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