<template>
    <article class="Text-panel shadow-md items-center justify-between">
      <h2>{{ title }}</h2>
      <p>{{ content }}</p>
      <slot></slot> 
    </article>
  </template>
  
  <script setup>
  const props = defineProps({
    title: String,
    content: String,
  });
  </script>
  
<style scoped>
.Text-panel {
    font-family: var(--fuente-principal);
    background-color: var(--color-celeste-oscuro-op);
    border:8px solid var(--color-celeste-oscuro);
    width: 100%;
    border-radius: 8px;
    padding: 2%;
    color: var(--color-blanco);
    display:inline-block;
    align-items: center; 
    justify-content: space-between; 
    gap: 20px; 
}

.Upper-text {
    flex: 1; 
}

</style>
  