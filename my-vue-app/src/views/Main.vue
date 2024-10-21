<template>
    <Navbar :currentView="''" />
    <div class="main-container">
        <div class="left-panel">
            <DaySummary></DaySummary>
            <DailyAdvice></DailyAdvice>
        </div>
        <div class="right-panel">
            <Calendar></Calendar>
        </div>

    </div>


</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import DaySummary from '../components/DaySummary.vue';
import Calendar from '../components/Calendar.vue';
import DailyAdvice from '../components/DailyAdvice.vue';
</script>

<style scoped>
.main-container {
    font-family: var(--fuente-principal);
    display: flex;
    align-items: center;
    padding: 3% 4% 0;
    gap:3%;
    width: 100%;
    height: 37.5rem; 
}
.left-panel{
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; 
    gap:5.5%;   
}

.right-panel{
    width: 60%;
    height: 100%;
    align-content: center;
}

</style>
