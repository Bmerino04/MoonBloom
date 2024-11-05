<template>
    <button :class="buttonClass">
      <slot></slot> 
    </button>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  
  const props = defineProps({
    type: {
      type: String,
      default: 'green'
    }
  });
  
  const buttonClass = computed(() => {
    return props.type === 'green' ? 'Green-Button' : 'Pink-Button';
  });
  </script>
  
  <style scoped>
  .Green-Button {
    background-color: #A6C4C2;
    border: 0.3rem solid #48A09F;
    transition: background-color 0.3s ease;
    color: black;
  }
  
  .Pink-Button {
    background-color: #FFCCCB;
    border: 0.3rem solid #FE9FA3;
    transition: background-color 0.3s ease;
    color: black;
  }
  
  .Green-Button:hover {
    background-color: #48A09F;
  }
  
  .Pink-Button:hover {
    background-color: #FE9FA3;
  }
  </style>
  