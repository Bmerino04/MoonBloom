<template>
    <div class="calendar">
        <div class="buttons">
            <button @click="prevMonth" class="calendar-button prev">
                <img src="../assets/icon/left-arrow.png">
            </button>

            <h2 class="month">{{ months[currentMonthIndex] }}</h2>

            <button @click="nextMonth" class="calendar-button next">
                <img src="../assets/icon/right-arrow.png">
            </button>
        </div>

        <div class="cont">
            <div class="calendar-weeks">
                <p v-for="(day, index) in weekDays" :key="index">{{ day[0] }} </p>
            </div>
            <div class="days">
                <CalendarDay v-for="day in days" :key = "day.index" :day="day" :current-month-index="currentMonthIndex"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref,computed } from 'vue';
import CalendarDay from './CalendarDay.vue'; 

const months = ['Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre'];
const daysInMonths = [30, 31, 31, 30, 31];
const firstDays = [6, 1, 4, 0, 2]; 
const weekDays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

const currentMonthIndex = ref(1);

const days = computed(() => {
  const daysArray = [];


  for (let i = 0; i < firstDays[currentMonthIndex.value]; i++) {
    daysArray.push({ day: null, className: 'Other-Month-Days' });
  }


  for (let i = 1; i <= daysInMonths[currentMonthIndex.value]; i++) {
    let className = 'Normal-Day';
    if ([8, 9, 10, 11].includes(i)) {
      className = 'Menstrual-Day';
    } else if ([20, 21, 22, 23, 24, 25].includes(i)) {
      className = 'Fertile-Day';
    }
    if ([22, 23].includes(i)) {
      className = 'Ovulation-Day';
    }
    if (currentMonthIndex.value === 1 && i === 25) {
      className = 'Current-Day';
    }
    daysArray.push({ day: i, className });
  }

  const totalDays = firstDays[currentMonthIndex.value] + daysInMonths[currentMonthIndex.value];
  const remainingCells = totalDays % 7 === 0 ? 0 : 7 - (totalDays % 7);

  for (let i = 0; i < remainingCells; i++) {
    daysArray.push({ day: null, className: 'Other-Month-Days' });
  }

  return daysArray;
});


const prevMonth = () => {
    currentMonthIndex.value = (currentMonthIndex.value + 1) % months.length;
};

const nextMonth = () => {
    currentMonthIndex.value = (currentMonthIndex.value - 1 + months.length) % months.length;
};
</script>

<style scoped>
.calendar {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.buttons {
    width: 18.75rem;
    height: 4.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F88FA3;
    border-top-left-radius: 0.625rem;
    border-top-right-radius: 0.625rem;
    text-align: center;
}

.buttons img {
    width: 2.8rem;
    padding-top: 0.3rem;
}

.calendar-button {
    background-color: #F88FA3;
    border-style: none;
}

.buttons h2 {
    width: 11.25rem;
    font-size: 2rem;
    color: #FFFFFF;
}

.cont {
    border: 0.5rem solid #F88FA3;
    border-radius: 0.5rem;
    gap: 0.625rem;
}
.calendar-weeks {
  background-color: #FFCCCB;
  font-size: 24px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 0.3rem 1.25rem 0;
}
.calendar-weeks p {
  text-align: center;
}
.days {
  background-color: #FFCCCB;
  font-size: 24px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1.25rem 0.44rem;
  padding: 0.625rem 1.25rem 0;
}
</style>