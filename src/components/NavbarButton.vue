<template>
    <RouterLink 
      class="navbar-button" 
      :to="route"
      :class="{ 'active-button': isActive }"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <img :src="isActive ? activeIcon : defaultIcon" :alt="title" />
      <span :class="{ 'active-text': isActive }" v-if="isHovered || isActive">{{ title }}</span>
    </RouterLink>
</template>
  
<script setup>
  import { ref, computed } from 'vue';
  import { RouterLink } from 'vue-router';
  
  // Definir las props que recibirá el componente
  const props = defineProps({
    title: {
      type: String,
      required: true
    },
    defaultIcon: {
      type: String,
      required: true
    },
    activeIcon: {
      type: String,
      required: true
    },
    currentView: {
      type: String,
      required: true
    },
    buttonView: {
      type: String,
      required: true
    },
    route:{
      type:String,
      required: true
    }
  });
  
  const isHovered = ref(false);
  const isActive = computed(() => props.currentView === props.buttonView);
</script>
  
<style scoped>

  .navbar-button {
    all: unset;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 80px;
    height: 80px;
    transition: width 0.3s ease;
    overflow: hidden;
    color: var(--color-blanco);
  }
  
  .navbar-button img {
    width: 40px;
    height: 40px;
    transition: filter 0.3s ease;
  }
  
  .navbar-button:hover {
    width: 200px;
  }
  
  .navbar-button span {
    margin-left: 10px;
    font-family: var(--fuente-principal);
    font-size: var(--tamaño-fuente-medio);
    font-weight: bold;
    transition: opacity 0.3s ease;
  }
  
  .active-button {
    background-color: #348188;
    width: 200px;
    height: 100%;
  }
  .active-text {
  color: #2C5D5B; /* Cambia esto al color verde que usas para los íconos activos */
}
</style>
  