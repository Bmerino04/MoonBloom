<template>
    <div v-if="visible" class="popup-overlay" >
        <div class="popup-content" @click.stop>
            <div class="Head-Popup">
                <h2 class="Popup-Date">{{ weekDay }} {{ day }} de {{ month }}, 2024</h2>
                <h3 :class = "cyclePhaseClass" class="Cycle-Phase">{{ cyclePhase }}</h3>
            </div>

            <div class="Checkboxes">
                <label class="Protected-Activity">
                    <input type="checkbox" name="activity" value="protected" class="mr-2">
                    <span>Actividad sexual con protección</span>
                </label>
                <label class="Unprotected-Activity">
                    <input type="checkbox" name="activity" value="unprotected" class="mr-2">
                    <span>Actividad sexual con protección</span>
                </label>
                <label class="Period">
                    <input type="checkbox" name="activity" value="period" class="mr-2">
                    <span>Periodo</span>
                </label>
            </div>
            
            <div class="Action-Buttons">
                <button class="Save-Button"@click="closePopup" >Guardar</button>
                <button class="Exit-Button" @click="closePopup">Salir</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    weekDay : String,
    day: Number,
    month: String,
    cyclePhase: String,
    visible: Boolean,
    cyclePhase: String,
    cyclePhaseClass: String
});

const emit = defineEmits(['close']);

const closePopup = () => {
    emit('close');
};
</script>

<style scoped>
.popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup-content {
    background-color: white;
    border-radius: 1rem;    
    width: 25rem;
    display: flex;
    flex-direction: column;
    padding: 1rem 0 1.5rem;
    justify-content: center;
    align-items: center;
}
.Head-Popup{
    text-align: center;
}
.Popup-Date {
    padding:0.5rem 0;
    font-size: 1.5rem;
    font-weight: lighter;
}

.Head-Popup h3{
    font-size: 2rem;         
    font-weight: bold;          
    width: 25rem; 
    padding:1.5rem 0 1.5rem;    
}
.Checkboxes{
    padding-bottom: 2rem;       
    display: grid;             
    row-gap: 0.5rem; 
    font-size: var(--tamaño-fuente-texto);           
}
.Checkboxes input{
    cursor: pointer;
}
.Action-Buttons {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
}
.Save-Button {
    background-color: #a6c4c283;
    border: 0.40rem solid var(--color-celeste-fondo);
}
.Exit-Button {
    background-color: #f88fa27e;
    border: 0.40rem solid var(--color-rosado-claro-barras);
    width: 7.25rem;
}
.Save-Button, .Exit-Button{
    font-size: var(--tamaño-fuente-texto);
    padding: 0.1rem 1rem;     
    border-radius: 0.75rem;    
    transition:  background-color 0.3s ease; 
}
.Save-Button:hover{
    background-color:var(--color-celeste-fondo) ;
}
.Exit-Button:hover{
    background-color: var(--color-rosado-claro-barras);
}

.Ovulatory-Phase{          
    color: var(--color-celeste-medio); 
    background-color:#48a09e81 ;  
}
.Menstrual-Phase{          
    color: var(--color-rosado-oscuro); 
    background-color: #ff2d5383;  
}
.Folicular-Phase{          
    color: var(--color-celeste-fondo); 
    background-color:#a6c4c280;  
}
.Luteal-Phase{          
    color:#FE9FA3; 
    background-color: var(--color-rosado-claro);  
}
</style>