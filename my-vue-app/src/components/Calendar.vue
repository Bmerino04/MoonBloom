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
        <CalendarDay v-for="day in days" :key="day.index" :day="day" :current-month-index="currentMonthIndex"
          @click="openPopup" />
      </div>
    </div>
    <CalendarPopup :day="selectedDay" :month="selectedMonth" :weekDay="selectedDayOfWeek" :visible="isPopupVisible"     :cyclePhase="cyclePhase" 
    :cyclePhaseClass="cyclePhaseClass" 
      @close="isPopupVisible = false" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import CalendarDay from './CalendarDay.vue';
import CalendarPopup from './CalendarPopup.vue';
import { getCalendarData } from '../Services/calendarServices';

const months = ref([]);
const daysInMonths = ref([]);
const firstDays = ref([]);
const weekDays = ref({});
const phases = ref({});

const currentMonthIndex = ref(0);
const isPopupVisible = ref(false);
const selectedDay = ref(null);
const selectedMonth = ref('');
const selectedDayOfWeek = ref('');
const cyclePhase = ref('');         
const cyclePhaseClass = ref('');     


const loadCalendarData = async () => {
  try {
    const data = await getCalendarData();

    months.value = data.months;
    daysInMonths.value = data.daysInMonths;
    firstDays.value = data.firstDays;
    weekDays.value = data.weekDays;
    phases.value = data.phases;
    currentMonthIndex.value = data.currentMonth;
    currentMonth.value = data.currentMonth;

  } catch (error) {
    console.error("Error al cargar los datos del calendario:", error);
  }
};

onMounted(() => {
  loadCalendarData();
});

const days = computed(() => {
  const daysArray = [];


  for (let i = 0; i < firstDays.value[currentMonthIndex.value]; i++) {
    daysArray.push({ day: null, className: 'Other-Month-Days' });
  }

  for (let i = 1; i <= daysInMonths.value[currentMonthIndex.value]; i++) {
    let className = 'Normal-Day';

    if (phases.value.menstrual.includes(i)) {
      className = 'Menstrual-Day';
    } else if (phases.value.fertile.includes(i)) {
      className = 'Fertile-Day';
    }
    if (phases.value.ovulation.includes(i)) {
      className = 'Ovulation-Day';
    }
    if (i === phases.value.currentDay && currentMonthIndex.value === currentMonthIndex.value) { //ARREGLAR
      className = 'Current-Day';
    }

    daysArray.push({ day: i, className });
  }


  const totalDays = firstDays.value[currentMonthIndex.value] + daysInMonths.value[currentMonthIndex.value];
  const remainingCells = totalDays % 7 === 0 ? 0 : 7 - (totalDays % 7);

  for (let i = 0; i < remainingCells; i++) {
    daysArray.push({ day: null, className: 'Other-Month-Days' });
  }

  return daysArray;
});

const prevMonth = () => {
  currentMonthIndex.value = (currentMonthIndex.value - 1 + months.value.length) % months.value.length;
};

const nextMonth = () => {
  currentMonthIndex.value = (currentMonthIndex.value + 1) % months.value.length;
};

const openPopup = (day) => {

  const firstDayMonth = firstDays.value[currentMonthIndex.value];
  const DayOfWeek = (firstDayMonth + (day - 1)) % 7;
  selectedDayOfWeek.value = weekDays.value[DayOfWeek];
  selectedDay.value = day;
  selectedMonth.value = months.value[currentMonthIndex.value];

  let phaseClass = 'Normal-Phase'; 
  let phaseTitle = 'Fase Normal'; 

  if (phases.value.menstrual.includes(day)) {
    phaseClass = 'Menstrual-Phase';
    phaseTitle = 'Fase Menstrual';
  } else if (phases.value.fertile.includes(day)) {
    phaseClass = 'Ovulatory-Phase';
    phaseTitle = 'Fase Ovulatoria ';
  } else if (phases.value.ovulation.includes(day)) {
    phaseClass = 'Ovulatory-Phase';
    phaseTitle = 'Fase Ovulatoria';
  } else if (phases.value.folicular.includes(day)) {
    phaseClass = 'Folicular-Phase';
    phaseTitle = 'Fase Folicular';
  } else {
    phaseClass = 'Luteal-Phase';
    phaseTitle = 'Fase Lútea';
  }


  cyclePhase.value = phaseTitle;
  cyclePhaseClass.value = phaseClass; 


  isPopupVisible.value = true;


};

</script>


<style scoped>
.calendar {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.buttons {
  width: 18rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F88FA3;
  border-top-left-radius: 0.625rem;
  border-top-right-radius: 0.625rem;
  text-align: center;
}

.buttons img {
  width: 2.5rem;
  height: 2.5rem;
  

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

}

.calendar-weeks {
  background-color: #FFCCCB;
  font-size: 24px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 0.025rem 1.25rem 0;
}

.calendar-weeks p {
  text-align: center;
}

.days {
  background-color: #FFCCCB;
  font-size: 24px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.75rem 0.40rem;
  padding: 0 1.25rem 0.625rem;
}
</style>