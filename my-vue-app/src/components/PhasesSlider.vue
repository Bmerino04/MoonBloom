<template>
  <div class="phases-slider">
    <div class="buttons">
      <button class="back-button">
        <img src="../assets/img_cal/left-arrow.png" alt="Anterior" />
      </button>
      <h2>Fase</h2>
      <button class="next-button">
        <img src="../assets/img_cal/right-arrow.png" alt="Siguiente" />
      </button>
    </div>
    <div v-for="(slide, index) in slides" :key="index" v-show="index === currentSlideIndex" class="slide-container">
      <LineChart :chartId="`LineChart${index + 1}`" :labels="slide.labels" :data="slide.data" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios'
import LineChart from './LineChart.vue';

const slides = ref([]);
const slideTitles = ["Ciclo", "Fase Menstrual", "Día a Ovular"];
const currentSlideIndex = ref(0);

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:3000/phases');
    slides.value = response.data;
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
    background-color: var(--color-rosado-claro-barras);
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
    font-size: 20px;
    color: var(--color-blanco)
}
</style>
