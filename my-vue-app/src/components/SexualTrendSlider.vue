<template>
  <div class="sexual-trend-slider">
      <div class="buttons">
        <button @click="previousSlide">
          <img src="../assets/img_cal/left-arrow.png" alt="Anterior" />
        </button>
        <button @click="nextSlide">
          <img src="../assets/img_cal/right-arrow.png" alt="Siguiente" />
        </button>
      </div>

      <div v-for="(cycle, index) in cycles" :key="index" v-show="index === currentSlideIndex" class="slide">
        <BarChart 
          :chartId="`BarChart${index + 1}`" 
          :labels="['Menstrual', 'Folicular', 'Ovulatoria', 'Lutea']" 
          :data="[
            [cycle.protected_sex.menstrual, cycle.protected_sex.folicular, cycle.protected_sex.ovulatoria, cycle.protected_sex.lutea],
            [cycle.unprotected_sex.menstrual, cycle.unprotected_sex.folicular, cycle.unprotected_sex.ovulatoria, cycle.unprotected_sex.lutea]
          ]"
          :cycleLabel="`Ciclo ${cycle.cycle_dates}`" 
        />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import BarChart from './BarChart.vue';

const cycles = ref([]);
const currentSlideIndex = ref(0);

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:3000/users?user_name=ana_garcia');
    const user = response.data[0];

    cycles.value = user.sexual_activity_data.cycles_registered;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

onMounted(() => {
  fetchData();
});


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
  width: 100%;
  height: 100%;
  justify-content: center;
}
.sexual-trend-slider {
  display: flex;
  justify-content: center;
  padding-bottom: 0px;
  width: 100%;
}
button{
    background-color:transparent;
    border-color:transparent;
    justify-content:space-between;
}
.buttons {
  width: 7%;
    height: auto;
    display: flex;
    position: absolute;
    z-index: 2;
    align-items: center;
    justify-content: center;
    margin-left: 43%;
    background-color: var(--color-rosado-claro-barras);
    border-bottom-left-radius: 10px;
    border-top-right-radius: 10px;
    text-align: center;
    gap: 0px;
}
.buttons img{ 
  max-width: 100%;
  max-height: 100%;
  padding-top: 5px;
}
</style>
