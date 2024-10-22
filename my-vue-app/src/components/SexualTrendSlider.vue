<template>
  <div class="sexual-trend-slider">
    <h2>{{ `Ciclo ${currentSlideIndex + 1}` }}</h2>
      <div class="buttons">
        <button @click="previousSlide" class="back-button">
          <img src="../assets/img_cal/left-arrow.png" alt="Anterior" />
        </button>
        <button @click="nextSlide" class="next-button">
          <img src="../assets/img_cal/right-arrow.png" alt="Siguiente" />
        </button>
      </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const cycles = ref([]);
const currentSlideIndex = ref(0);

const nextSlide = () => {
  currentSlideIndex.value = (currentSlideIndex.value + 1) % cycles.value.length;
};

const previousSlide = () => {
  currentSlideIndex.value = (currentSlideIndex.value - 1 + cycles.value.length) % cycles.value.length;
};
</script>

<style scoped>
.slide{
  display: flex;
  width: 54%;
  height: auto;
  justify-content: center;
}
.sexual-trend-slider {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 0px;
  padding-top: 2.6%;
  margin-left: 7%;
}
button{
    background-color:transparent;
    border-color:transparent;
}
.buttons {
  width: 66px;
    height: auto;
    display: flex;
    position: absolute;
    z-index: 2;
    align-items: center;
    justify-content: center;
    margin-left: 47%;
    background-color: var(--color-rosado-claro-barras);
    border-bottom-left-radius: 10px;
    border-top-right-radius: 10px;
    text-align: center;
    gap: 0px;
}
.buttons img{ 
  width: 100%;
  padding-top: 5px;
}
</style>
