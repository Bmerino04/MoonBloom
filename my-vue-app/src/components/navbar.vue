<template>
    <nav class="navbar">
      <a class="Logotipo">
        <img :src="logoSrc" alt="Logotipo MoonBloom">
        <h1>MOONBLOOM</h1>
      </a>
      <div class="Buttons-Navigation">
          <NavbarButton 
          title="Estadísticas" 
          :defaultIcon="defaultStatisticsIcon" 
          :activeIcon="activeStatisticsIcon" 
          :currentView="currentView" 
          buttonView="estadisticas" 
        />
        <NavbarButton 
          title="Información" 
          :defaultIcon="defaultInfoIcon" 
          :activeIcon="activeInfoIcon" 
          :currentView="currentView" 
          buttonView="info" 
        />
        <NavbarButton 
          title="Perfil" 
          :defaultIcon="defaultProfileIcon" 
          :activeIcon="activeProfileIcon" 
          :currentView="currentView" 
          buttonView="perfil" 
        />
      </div>
    </nav>
</template>
  
  <script setup>
  import NavbarButton from './NavbarButton.vue';
  import logoSrc from '../assets/icon/logo-MoonBloom.png';
  

  import defaultStatisticsIcon from '../assets/icon/estadistica-blanco.png';
  import activeStatisticsIcon from '../assets/icon/estadistica-verde.png';
  
  import defaultProfileIcon from '../assets/icon/perfil-blanco.png';
  import activeProfileIcon from '../assets/icon/perfil-verde.png';
  
  import defaultInfoIcon from '../assets/icon/info-blanco.png';
  import activeInfoIcon from '../assets/icon/info-verde.png';
  
  const props = defineProps({
  currentView: {
    type: String,
    required: true
  }
});
</script>
  

<style scope>
nav{  
  display: flex;
  justify-content: space-between;
  background-color: #48a09ebd;
  display: flex;
  font-family: 'Raleway', sans-serif;
  width: 100%;
  height: 70px;
  align-items: center;
  justify-content: space-between;  
}
.Logotipo{
    display: flex;
    align-items: center; 
    margin-left: 1.5%;
    gap:3%;
}
.Logotipo img{
    width: 12%;
    height: auto;
}
.Logotipo h1{
    color: #fff;
    font-size: 24px;
    font-weight: bolder;
    letter-spacing: 0.20em;
}
.Buttons-Navigation{
    height: 70px;
    display: flex ;
    gap: 3px;
    justify-content: flex-end;
    align-items: center;
}
.icon{
    position: relative;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: width 0.3s ease;
    overflow: hidden;
}
.icon img{
    width: 40px;
    height: 40px;
}
</style>