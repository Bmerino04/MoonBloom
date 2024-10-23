<template>
    <div class="Daily-Advice">
        <h3>CONSEJO DEL DIA</h3>
        <p>{{ advice }} </p>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { getadviceData } from '../Services/dailyAdviceServices';

const advice = ref("");

const loadAdviceData = async () => {
  try {
    const data = await getadviceData();

    advice.value = data.content;

  } catch (error) {
    console.error("Error al cargar los datos del consejo:", error);
  }
};
onMounted(() => {
  loadAdviceData();
});


</script>
<style scoped>
.Daily-Advice{
   
    background-color: var(--color-celeste-oscuro-op);
    border-radius: 0.5rem;
    padding: 0 3% 1%;
    text-align: justify;
    
}

.Daily-Advice h3{
    color:  var(--color-rosado-claro-barras); 
    letter-spacing: 0.1rem;
    margin-block-end: 0;  

}
.Daily-Advice p{
    font-size:  var(--tamaño-fuente-texto);
    color: var(--color-blanco);
    padding: 1% 0;
    margin-block-start: 0;
    margin-block-end: 0;

}
</style>