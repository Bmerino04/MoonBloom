<template>
  <div class="sexual-trend-slider">


      <div v-for="(cycle, index) in cycles" :key="index" v-show="index === currentSlideIndex" class="slide-container">
        <div class="slide">
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
        
        <SummaryBox 
        :type="'sexual'"
        :data="{
          totalActivity: cycle.total_activity,
          mostActivePhase: cycle.most_active_phase,
          protectedSexTotal: cycle.protected_sex_total,
          unprotectedSexTotal: cycle.unprotected_sex_total,
          trendMessage: cycle.trendMessage
        }"
      />
    </div>
    <div class="buttons">
        <button @click="previousSlide">
          <img src="../assets/icon/left-arrow.png" alt="Anterior" />
        </button>
        <button @click="nextSlide">
          <img src="../assets/icon/right-arrow.png" alt="Siguiente" />
        </button>
      </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import BarChart from './BarChart.vue';
import SummaryBox from './SummaryBox.vue';

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
.slide-container{
  display: flex;
  width: 100%;
}
.slide-container SummaryBox{
  width: 0%;
  justify-content: center;
}  
.slide{
  display: flex;
  justify-content: center;
  width: 55%;
  height: 100%;
  padding-left: 3%;

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
    width: fit-content;
    padding: 0;
}
.buttons {
  width: 7%;
    height: auto;
    display: flex;
    position: absolute;
    z-index: 2;
    align-items: center;
    justify-content: center;
    background-color: var(--color-rosado-claro-barras);
    border-bottom-left-radius: 10px;
    border-top-right-radius: 10px;
}
.buttons img{ 
  max-width: 100%;
  max-height: 100%;
  padding-top: 5px;
}
</style>