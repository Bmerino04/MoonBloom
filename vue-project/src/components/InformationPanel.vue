<template>
  <div class="Main-Container">
    <aside class="Information-Panel">  
    <h2 @click="showComponent('informationMain')" class="clickable-title">¡Aprende sobre ti!</h2>
    <ul class="Information-List">
      <li @click="showComponent('menstrualCycle')" class="no-underline hover:underline">
        Ciclo Menstrual
      </li>
      <li @click="showComponent('contraceptives')" class="no-underline hover:underline">
        Métodos Anticonceptivos
      </li>
      <li @click="showComponent('reproductiveDiseases')" class="no-underline hover:underline">
        Enfermedades Reproductivas
      </li>
    </ul>   
  </aside>

  <section class="Container">
    <InformationMain v-if="currentComponent === 'informationMain'" />
    <MenstrualCycle v-if="currentComponent === 'menstrualCycle'" />
    <Contraceptives v-if="currentComponent === 'contraceptives'" />
    <ReproductiveDiseases v-if="currentComponent === 'reproductiveDiseases'" />
  </section>
  </div>

</template>

<script setup>
import { ref } from 'vue';

import InformationMain from './InformationMain.vue';
import MenstrualCycle from './InformationMenstrualCycle.vue';
import Contraceptives from './InformationContraceptives.vue';
import ReproductiveDiseases from './InformationReproductiveDiseases.vue';

const currentComponent = ref('informationMain');

function showComponent(componentName) {
  currentComponent.value = componentName;
}
</script>

<style scoped>

.Information-Panel {
  background-color: var(--color-rosado-claro);
  border: 0.5rem solid var(--color-rosado-claro-barras);
  border-radius: 0.5rem;
  height: 65%;
  width: 20%;
  padding: 1.5rem;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;

}

.Information-Panel h2 {
  font-size: var(--tamaño-fuente-grande);
  font-weight: 800;
  color: var(--color-celeste-medio-oscuro);
  text-align: center;
  margin: 5%;
  cursor: pointer;

}

.Information-List {
  list-style-type: disc;
  list-style-position: inside;
  font-size: var(--tamaño-fuente-texto);
  padding-left: 8%;
  padding-right: 8%;
  color: var(--color-celeste-medio-oscuro);
  font-weight: 600;
}

.Information-List li {
  padding: 12% 0;
  border-bottom: 0.2rem solid var(--color-rosado-claro-barras);
}
.Information-List li:hover{
  text-decoration: underline;
  cursor: pointer;
}
.Information-List li:last-child {
  border-bottom: none;
}

li.active {
  font-weight: bold;
}

li a {
  text-decoration: none;
  color: var(--color-celeste-medio-oscuro)F;
}

li a:hover {
  text-decoration: underline;
}
.Container {
  background-color: var(--color-celeste-oscuro-op);
  width: 700px;
  height: auto;
  border-radius: 0.5rem;
  padding: 2% 4% 2%;
  color: var(--color-blanco);
  word-wrap: break-word;
  overflow: auto;
  position: relative;
  text-overflow: ellipsis;
}
</style>