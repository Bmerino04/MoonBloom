<template>
    <div class="Day-Summary ">
        <div class="Phase-Info ">
            <div class="text">
                <p>{{ todayDate }} </p>
                <p>{{ todayPhase }}</p>
                <h2>Periodo en <span>{{daysLeft}} Días</span></h2>
                <p>Prob. {{pregnancyProb}} de Embarazo</p>
            </div>

        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { getCalendarData } from '../Services/calendarServices';


const todayDate = ref("");
const todayPhase = ref("");
const daysLeft = ref(0);
const pregnancyProb =ref("");

const loadCalendarData = async () => {
  try {
    const data = await getCalendarData();

    todayDate.value = data.actualDate; 
    todayPhase.value = data.currentPhase;
    daysLeft.value = data.daysLeftPeriod;
    pregnancyProb.value = data.pregnancyProbability;


  } catch (error) {
    console.error("Error al cargar los datos del calendario:", error);
  }
};
onMounted(() => {
  loadCalendarData();
});


</script>
<style scoped>
.Day-Summary {
    width: 21.5rem;
    height: 21.5rem;
    border: 0.6rem dashed #2c5d5bc1;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.Phase-Info {
    width: 19.5rem;
    height: 19.5rem;
    background-color: #F88FA3;
    border: 0.375rem solid #2c5d5bc1;
    border-radius: 100%;
    display: flex;
    align-content: center;
    text-align: center;
    justify-content: center;
    align-items: center;


}

.text {
    width: 10rem;
}

.text p {
    font-size: 20px;
    color: #FFFFFF;
}

.text h2 {
    color: #FF2D55;
    font-size: 2rem;
    font-weight: 600;
}

.text span {
    font-weight: 900;
}
</style>