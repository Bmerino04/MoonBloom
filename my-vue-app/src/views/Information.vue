<template>
     <Navbar :currentView="'info'" />
     <InformationPanel></InformationPanel>
    <InformationText></InformationText>
</template>

<script setup>
import Navbar from '../components/navbar.vue';
import InformationPanel from '../components/InformationPanel.vue'; 
import InformationText from '../components/InformationText.vue';

</script>