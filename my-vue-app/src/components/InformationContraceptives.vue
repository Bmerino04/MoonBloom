<template>
    <article class="Text-Panel shadow-md">
        <h2>Métodos Anticonceptivos</h2>
        <div class="Text-Container">
            <p> Elegir el anticonceptivo adecuado es clave para una planificación familiar eficaz. Aquí te presentamos
                algunos métodos comunes y cómo funcionan:</p>
            <ul class="Contraceptive-List">
                <li><strong>Píldoras Anticonceptivas:</strong> Previenen la ovulación y espesan el moco cervical para
                    evitar que los espermatozoides lleguen al óvulo.</li>
                    <img src="../assets/icon/contraceptive.png">
                    <li><strong>DIU (Dispositivo Intrauterino):</strong> El DIU de cobre bloquea a los espermatozoides,
                    mientras que el DIU hormonal suprime la ovulación.</li>
                
                <li><strong>Implante Subdérmico:</strong> Se inserta en el brazo y libera progestina para prevenir la
                    ovulación y espesar el moco cervical.</li>
                <li><strong>Anillo Vaginal:</strong> Libera hormonas en la vagina, previniendo la ovulación y
                    dificultando la llegada de los espermatozoides al óvulo.</li>
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
.Contraceptive-List {
    list-style-type: disc;
    padding-left: 1.5rem;
}
.Contraceptive-List li{
    padding: 1% 0;
}
.Contraceptive-List img {
    float: right; 
    margin-left: 1.25rem; 
    width: 30%; 
    border: 0.5rem solid var(--color-rosado-claro-barras);
    border-radius: 0.5rem;
}


</style>