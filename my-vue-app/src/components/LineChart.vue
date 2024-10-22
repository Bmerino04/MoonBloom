<template>
    <div class="lineChart">
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
  
  const createLineChart = () => {
    const ctx = document.getElementById(props.chartId).getContext('2d');
    chartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: props.labels,
        datasets: [{
          label: 'Datos de Línea',
          data: props.data,
          borderColor: '#48A09F',
          fill: false
        }]
      },
      options: {
        responsive: true
      }
    });
  };
  
  onMounted(() => {
    createLineChart();
  });
  
  watch(() => props.data, (newData) => {
    if (chartInstance) {
      chartInstance.data.datasets[0].data = newData;
      chartInstance.update();
    }
  });
  </script>
  
  <style scoped>
  .lineChart {
    background-color: var(--color-rosado-claro);
    border:8px solid var(--color-rosado-claro-barras);
    border-radius: 8px;
    width: 100%;
    height: 100%;
    margin-top: 0px;
  }
  </style>