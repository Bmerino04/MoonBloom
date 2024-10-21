<template>
    <div class="Day-Summary ">
        <div class="Phase-Info ">
            <p>Viernes, 25 Jul. </p>
            <p>Fase Ovulatoria</p>
            <h2>Periodo en <span>10 Días</span></h2>
            <p>Prob. media de Embarazo</p>
        </div>
    </div>
</template>

<style scoped>
.Day-Summary{
    width: 22.5rem;
    height: 22.5rem;
    border: 0.6rem dashed #2c5d5bc1;
    border-radius:100% ;
    display: flex;
    justify-content: center;
    align-items: center;
}
.Phase-Info{
    width: 20rem;
    height: 20rem;
    background-color: #F88FA3;
    border: 0.375rem solid #2c5d5bc1; 
    border-radius:100%;
    text-align: center; 
    align-content: center; 
    padding: 0 20%;  
    letter-spacing: 0.085rem;
}
.Phase-Info p{
    font-size: 20px;
    color: #FFFFFF;
}

.Phase-Info h2{
    color: #FF2D55;
    font-size: 2rem;
    font-weight: 600;
}
.Phase-Info span{
    font-weight: 900;
}
</style>