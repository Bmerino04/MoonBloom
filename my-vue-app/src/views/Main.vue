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
import Navbar from '../components/navbar.vue';
import DaySummary from '../components/DaySummary.vue';
import Calendar from '../components/Calendar.vue';
import DailyAdvice from '../components/DailyAdvice.vue';
</script>

<style scoped>
.main-container {
    font-family: var(--fuente-principal);
    display: flex;
    align-items: center;
    padding: 1.5% 0 1.5%;
    width: 100%;

}
.left-panel{
    width: 40%;
    height: 32rem;
    display: flex;
    flex-direction: column;
    align-items: center; 
    padding-left: 3% ;
    justify-content: space-between;
    
  
}

.right-panel{
    width: 60%;
    height: 100%;
    align-content: center;
}
.right-panel{
    width: 60%;
    height: 100%;
    align-content: center;
}

</style>
