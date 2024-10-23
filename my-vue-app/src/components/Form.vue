<template>
    <form @submit.prevent="handleSubmit" class="form-opacity">
      <slot></slot>
    </form>
</template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    onSubmit: Function 
  });
  
  const handleSubmit = () => {
    if (props.onSubmit) {
      props.onSubmit(); 
    }
  };
  </script>
  
  <style scoped>
  .form-opacity {
      width: 100%;  
      padding: 20px;
      border-radius: 10px;
      width: 100%;
  }
  
  a {
      color: var(--color-celeste-medio);
      text-decoration: none;
  }
  
  a:hover {
      color: var(--color-celeste-oscuro);
      text-decoration: underline;
  }
  
  .text-center {
      text-align: center;
      margin: 1rem 0; 
  }
  
  </style>