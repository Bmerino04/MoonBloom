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
    chartInstance = new Chart(ctx,{
    type: 'line',
    data: {
      labels: props.labels,
      datasets: [{
        data: props.data,
        borderColor: '#48A09F',
        backgroundColor: 'rgba(72, 160, 159, 0.2)', 
        fill: false,
        tension: 0,  
        pointBackgroundColor: '#FFFFFF', 
        pointBorderColor: '#48A09F',  
        pointBorderWidth: 3,  
        pointRadius: 8 
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false  
        },
        tooltip: {
          callbacks: {
            title: function(context) {
              return context[0].label;
            },
            label: function(context) {
              const value = context.raw;
              return `Días: ${value}`;
            }
          }
        }
      },
      scales: {
        x: {
          type: 'category',
          labels: props.labels, 
          title: {
            display: false,
            text: 'Periodos'
          },
          ticks: {
            display: false  
          }
        },
        y: {
          min: 0,
          max: 35,  
          title: {
            display: false,
            text: 'Días'
          }
        }
      }
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