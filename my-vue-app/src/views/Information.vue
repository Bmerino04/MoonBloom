<template>
     <Navbar :currentView="'info'" />
     <div class="Main-Container">
        <InformationPanel></InformationPanel>
        <InformationText></InformationText>
     </div>

</template>

<script setup>
import Navbar from '../components/navbar.vue';
import InformationPanel from '../components/InformationPanel.vue'; 
import InformationText from '../components/InformationText.vue';

</script>
<style scoped>
.Main-Container{
    font-family: var(--fuente-principal);
}
</style>