<template>
  <div class="phases-slider">
    <div class="buttons">
      <button class="back-button">
        <img src="../assets/img_cal/left-arrow.png" alt="Anterior" />
      </button>
      <h2>Fase</h2>
      <button class="next-button">
        <img src="../assets/img_cal/right-arrow.png" alt="Siguiente" />
      </button>
    </div>
  </div>
</template>
<style scoped>
button{
    background-color:transparent;
    border-color:transparent;
}
.buttons{
    width: 15%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 19%;
    background-color: #F88FA3;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    text-align: center;
    padding-left: 5px;
    padding-right: 5px;
}
.buttons img{ 
    width: 45px;
    padding-top: 5px;
}
.buttons h2{
    line-height: 1.15;
    width: 180px;
    font-size: 20px;
    color: #FFFFFF;
}
</style>
