<template>
  <div class="Summary">
    <h3>Resumen</h3>
    <div v-if="type === 'phase'">
      <h5>Promedio:</h5>
      <ul>
        <li>Tu ciclo suele durar {{ data.avgCycleDuration }} días.</li>
      </ul>
      <h5>Variaciones:</h5>
      <ul>
        <li>En el ciclo {{ data.shortestCycle }} se registró una menor duración.</li>
        <li>Durante el ciclo {{ data.longestCycle }} se registró una mayor duración.</li>
      </ul>
      <h5>Anomalía:</h5>
      <ul>
        <li>{{ data.anomalyMessage }}</li>
      </ul>
      <h5>{{ data.contraceptiveMessage }}</h5>
    </div>

    <div v-else-if="type === 'sexual'">
      <h5>Cantidad:</h5>
      <ul>
        <li>{{ data.totalActivity }} veces de actividad sexual registrada durante el ciclo.</li>
      </ul>
      
      <h5>Tendencia:</h5>
      <ul>
        <li>R.S protegidas es lo más frecuente.</li>
      </ul>
      <ul>
        <li>R.S protegido x{{ data.protectedSexTotal }}</li>
        <li>R.S sin protección x{{ data.unprotectedSexTotal }}</li>
      </ul>
      <ul>
        <li>En la fase {{ data.mostActivePhase }} se registró mayor actividad sexual.</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    required: true
  },
  data: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.Summary {
    width: 50%;
    border-radius: 8px;
    background-color: var(--color-celeste-claro);
    padding:1%;
    margin-right: 10%;
    font: var(--fuente-principal);
    color: var(--color-celeste-oscuro)
}
.Summary h5{
    font-weight: 600;
    margin-top: 4.2%;
}
.Summary h3{
    font-size: var(--tamaño-fuente-texto);
    font-weight: bold;
    text-decoration: underline;
}
.Summary ul{
    list-style-type: disc; 
    margin-left: 10%;
    margin-right: 0.5%;
}
</style>
