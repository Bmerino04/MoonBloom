<template>
    <article class="Text-panel shadow-md items-center justify-between">
      <h2>{{ title }}</h2>
      <p>{{ content }}</p>
      <slot></slot> <!-- Permite añadir botones o contenido adicional -->
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
    display:inline-block; /* Para hacer que los hijos se alineen horizontalmente */
    align-items: center; /* Alinea verticalmente */
    justify-content: space-between; /* Espacio entre article y el botón */
    gap: 20px; /* Espacio entre article y el botón */
}

.Upper-text {
    flex: 1; /* Esto permite que el artículo ocupe la mayor parte del espacio disponible */
}

</style>
  