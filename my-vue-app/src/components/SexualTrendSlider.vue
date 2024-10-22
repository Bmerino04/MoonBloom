<template>
    <div class="barChart">
      <canvas :id="chartId"></canvas>
    </div>
  </template>
  
  <script setup>
  import { onMounted, watch } from 'vue';
  import Chart from 'chart.js/auto';
  
  const props = defineProps({
    chartId: {
      type: String,
      required: true
    },
    labels: {
      type: Array,
      required: true
    },
    data: {
      type: Array,
      required: true
    }
  });
  
  let chartInstance = null;
  
  const createBarChart = () => {
    const ctx = document.getElementById(props.chartId).getContext('2d');
    chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: props.labels,
        datasets: [{
          label: 'Tendencia Sexual',
          data: props.data,
          backgroundColor: ['#48A09F', '#FF7777']
        }]
      },
      options: {
        responsive: true
      }
    });
  };
  
  onMounted(() => {
    createBarChart();
  });
  
  watch(() => props.data, (newData) => {
    if (chartInstance) {
      chartInstance.data.datasets[0].data = newData;
      chartInstance.update();
    }
  });
  </script>
  
  <style scoped>
  .barChart {
    background-color: var(--color-rosado-claro);
    border:8px solid var(--color-rosado-claro-barras);
    border-radius: 8px;
    width: 100%;
    height: 100%;
    margin-top: 0px;
  }
  </style>