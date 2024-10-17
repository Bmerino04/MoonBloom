<template>
    <nav>
        <a class="Logotipo">
            <img :src="logoSrc" alt="Logotipo MoonBloom">
            <h1>MOONBLOOM</h1>
        </a>
    </nav>
</template>

<script setup>
import logoSrc from '../assets/icon/logo-MoonBloom.png';
</script>

<style scope>
nav{  
  display: flex;
  justify-content: space-between;
  background-color: #48a09ebd;
  display: flex;
  font-family: 'Raleway', sans-serif;
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: space-between;  
}
.Logotipo{
    display: flex;
    align-items: center; 
    gap:3%;
}
.Logotipo img{
    width: 70px;
    height: auto;
}
.Logotipo h1{
    color: #fff;
    font-size: 24px;
    font-weight: bolder;
    letter-spacing: 0.20em;
}
</style>