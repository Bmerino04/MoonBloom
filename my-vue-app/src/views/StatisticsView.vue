<script setup>
 import Navbar from '../components/navbar.vue'
 import Slider from '../components/PhasesSlider.vue'
</script>
<template>
    <div class="Statistics-page">
        <Navbar :currentView="'estadisticas'" />
        <Slider/>
    </div>
</template>

<style scoped>
.Statistics-page{
    background-color: #A6C4C2;
}
</style>