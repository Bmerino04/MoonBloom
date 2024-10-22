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
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const slides = ref([]);
const slideTitles = ["Ciclo", "Fase Menstrual", "Día a Ovular", "Tendencia Sexual"];
const currentSlideIndex = ref(0);



const nextSlide = () => {
  currentSlideIndex.value = (currentSlideIndex.value + 1) % slideTitles.length;
};

const previousSlide = () => {
  currentSlideIndex.value = (currentSlideIndex.value - 1 + slideTitles.length) % slideTitles.length;
};
</script>
<style scoped>

.phasesSlider{
  display: flex;
  flex-direction: column;
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
    font-size: 20px;
    color: var(--color-blanco)
}
</style>
