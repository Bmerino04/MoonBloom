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
    },
    cycleLabel: {  
    type: String,
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
          label: props.cycleLabel,
          data: props.data,
          backgroundColor: [var(--color-rosado-claro-barras), '#FF7777'],
          borderColor: ['#48A09F', '#FF7777'],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
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
  .barChart{
    margin:0%;
    background-color: var(--color-rosado-claro);
    border:8px solid var(--color-rosado-claro-barras);
    border-radius: 8px;
    width: 100%;
    height: 100%;
  }
  </style>
  