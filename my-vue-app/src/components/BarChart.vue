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
      datasets: [
        {
          label: 'R.S. con protección',
          data: props.data[0],  
          backgroundColor: '#F88FA3',
        },
        {
          label: 'R.S. sin protección',
          data: props.data[1],  
          backgroundColor: '#FF7777',
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            pointStyle: 'circle',
            color: '#000',
            font: {
              size: 14
            }
          },
          title: {
            display: true,
            text: props.cycleLabel,
            font: {
              size: 14
            },
            padding: {
              bottom: 0
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1,
            callback: function(value) {
              return Number.isInteger(value) ? value : '';
            }
          }
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
    chartInstance.data.datasets[0].data = newData[0];
    chartInstance.data.datasets[1].data = newData[1];
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
  .Chart canvas{
    width: 100% !important;
    height: 100% !important;
}
  </style>
  