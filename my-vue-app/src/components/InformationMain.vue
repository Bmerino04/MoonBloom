<template>
  <article class="Text-Panel shadow-md">
    <h2>¡Descubre más sobre tu salud menstrual y reproductiva!</h2>
    <div class="Text-Container">
      <p>Entender tu ciclo menstrual es clave para tomar decisiones informadas sobre tu bienestar. Aprende sobre los
        diferentes métodos anticonceptivos, cómo funcionan, y cuál podría ser el adecuado para ti. Además, infórmate
        sobre las enfermedades uterinas y del sistema reproductivo, para que puedas detectar síntomas a tiempo y saber
        cuándo consultar a un profesional.</p>
    </div>

    <p class="Panel-Texto_Final">
      Conoce más y cuida de ti misma. Tu salud es tu poder.
    </p>
  </article>
</template>

<script setup>



</script>

<style scoped>
.Text-Panel {
  background-color: var(--color-celeste-oscuro-op);
  width: 700px;
  height: auto;
  border-radius: 0.5rem;
  padding: 2% 4% 2%;
  color: var(--color-blanco);
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
}

.Text-Panel h2 {
  font-size: var(--tamaño-fuente-grande);
  text-decoration: underline;
}

.Text-Panel {
  font-size: var(--tamaño-fuente-texto);
}

.Text-Container {
  text-align: justify;
  margin-top: 2%;
  align-items: flex-end;
}

.Text-Container p {
  text-indent: 2%;
}

.Panel-Texto_Final {
  font-weight: bold;
  text-align: center;
  margin: 3% 0 3%;
}
</style>