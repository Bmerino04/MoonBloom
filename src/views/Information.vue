<template>
     <Navbar :currentView="'info'" />
     <div class="Main-Container">
        <InformationPanel></InformationPanel>
     </div>

</template>

<script setup>
import Navbar from '../components/navbar.vue';
import InformationPanel from '../components/InformationPanel.vue'; 

</script>
<style scoped>
.Main-Container{
    font-family: var(--fuente-principal);
    display: flex;
    align-items: flex-start;
    padding-top: 2.5%;
    justify-content: center;
    gap: 5rem;
    width: 100%;
    height: auto;
    
}

</style>