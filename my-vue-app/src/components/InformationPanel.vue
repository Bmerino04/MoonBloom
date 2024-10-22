<template>
        <aside class="Information-Panel shadow-md">  
            <a href="/dist/index.html">
                <a>¡Aprende sobre ti!</a>
            </a>
            <ul class="Information-List">
                <li class="no-underline hover:underline"><a href="/dist/views/Information/information-menstrual-cycle.html">Ciclo Menstrual</a></li>
                <li class="no-underline hover:underline"><a href="/dist/views/Information/information-contraceptives.html">Métodos Anticonceptivos</a></li>
                <li class="no-underline hover:underline"><a href="/dist/views/Information/information-reproductive-diseases.html">Enfermedades Reproductivas</a></li>
            </ul>   
        </aside>
  </template>
  
  <script setup>
 
  </script>
  
  <style scoped>
  .Information-Panel {
    background-color: var(--color-rosado-claro);
    border: 0.5rem solid var(--color-rosado-claro-barras);
    border-radius: 0.5rem;
    height: 80%;
    width: 25%;
    padding: 1.5rem;
    word-wrap: break-word; 
    overflow: hidden;      
    text-overflow: ellipsis;
    font-family: var(--fuente-principal);
  }
  .Information-Panel a{
    font-size: var(--tamaño-fuente-grande);
    font-weight: 800;
    color: var(--color-celeste-medio-oscuro);
    text-align: center;
    margin: 5%;
    
}
.Information-List{
    list-style-type: disc;
    list-style-position: inside;
    font-size: var(--tamaño-fuente-texto);
    padding-left: 8%;
    padding-right: 8%;
    color: var(--color-celeste-medio-oscuro);
    font-weight: 600;
}
.Information-List li{
    padding: 12% 0;
    border-bottom:0.2rem solid var(--color-rosado-claro-barras);    
} 
.Information-List li:last-child{
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

  </style>
  