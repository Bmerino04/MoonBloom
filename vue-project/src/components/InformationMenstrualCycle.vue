<template>
    <article class="Text-Panel">
        <div class="Text-Container">
            <h2>El Ciclo Menstrual</h2>
            <img src="../assets/icon/menstrual.png">
            <p>El ciclo menstrual es un periodo de aproximadamente 28 días en el que la mujer experimenta cambios en su
                cuerpo, especialmente en el útero y los ovarios de su sistema reproductor, por la acción de las hormonas
                sexuales femeninas. Todos estos cambios tienen como objetivo preparar a la mujer para un posible
                embarazo, desde que inicia su etapa reproductiva con la primera menstruación, hasta que llega la
                menopausia. </p>
            <p>La duración del ciclo puede variar entre 23 y 35 días en función de la mujer, ya que algunas tienen
                ciclos más cortos o más largos.</p>
        </div>
    </article>
</template>

<script setup></script>

<style scoped>
.Text-Panel h2 {
    font-size: var(--tamaño-fuente-grande);
    text-decoration: underline;
}

.Text-Container {
    text-align: justify;
    margin-top: 2%;
    align-items: flex-end;
}

.Text-Container p {
    text-indent: 2%;
}

.Text-Container img {
    float: right; 
    margin-left: 1.25rem; 
    width: 30%; 
    border: 0.5rem solid var(--color-rosado-claro-barras);
    border-radius: 0.5rem;
}

</style>