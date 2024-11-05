<template>

    <article class="Text-Panel">
        <h2>Enfermedades Uterinas/Reproductivas</h2>
        <div class="Text-Container">
            <p>
                Conocer las enfermedades uterinas y del sistema reproductivo es fundamental para mantener una buena
                salud. A continuación, te presentamos algunas condiciones comunes y sus características:
            </p>
            <ul class="Diseases-List">
                <img src="../assets/icon/uterus.png">
                <li><strong>Endometriosis:</strong> Ocurre cuando el tejido que normalmente recubre el interior del
                    útero crece fuera de él, causando dolor y problemas de fertilidad.</li>
                
                <li><strong>Fibromas Uterinos:</strong> Son tumores benignos que se desarrollan en el útero y pueden
                    causar dolor, sangrado abundante, y presión en la pelvis.</li>
                <li><strong>Síndrome de Ovario Poliquístico (SOP):</strong> Un desequilibrio hormonal que provoca ciclos
                    menstruales irregulares, quistes en los ovarios y problemas de fertilidad.</li>
            </ul>
        </div>
    </article>
</template>
<style scoped>

.Text-Panel h2{
    font-size: var(--tamaño-fuente-grande);
    text-decoration: underline;
}  

.Text-Container{  
    text-align: justify; 
    margin-top: 2%;   
    align-items: flex-end;
}
.Text-Container p{
    text-indent: 2%; 
}
.Diseases-List {
    list-style-type: disc;
    padding-left: 0.1rem;
}
.Diseases-List li{
    padding: 1% 0;
}
.Diseases-List img {
    float: left;
    margin-right: 1.50rem;
    margin-top: 1.25rem;
    width: 30%; 
    border: 0.5rem solid var(--color-rosado-claro-barras);
    border-radius: 0.5rem;

}
</style>