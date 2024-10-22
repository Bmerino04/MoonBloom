<template>
    <div :class="day.className" class="day" @click="handleClick" v-if="day.day">
      {{ day.day }}
    </div>
    <div :class="day.className" class="day" v-else></div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    day: Object, currentMonthIndex: Number,
});

const emit = defineEmits(['click']);

const handleClick = () => {
    if (props.day?.day) {
        emit('click', props.day.day);
    }
};
</script>

<style scoped>

.day {
    text-align: center;
    align-content: center;
    width: 5rem;
    height: 3.438rem;
    border-radius: 5rem;
    opacity: 5;
    cursor: pointer;
}

.Normal-Day {
    background-color: #FFFFFF;
    transition: background-color 0.3s ease;
}

.Normal-Day:hover {
    background-color: #FE9FA3;
}

.Menstrual-Day {
    background-color: #ff2d5381;
    border: 0.25rem dotted #FF2D55;
    transition: background-color 0.3s ease;
}

.Menstrual-Day:hover {
    background-color: #FF2D55;
}

.Ovulation-Day {
    background-color:#a6c4c2b1;
    border: 0.25rem solid #2c5d5bc1;
}

.Fertile-Day {
    background-color: #a6c4c2b1;
    border:0.25rem dotted #A6C4C2;
    transition:  background-color 0.3s ease; 
}

.Fertile-Day:hover{
    background-color: #A6C4C2;
}

.Ovulation-Day, .Current-Day{
    transition:  background-color 0.3s ease; 
}

.Ovulation-Day:hover, .Current-Day:hover{
    background-color:  #2c5d5bc1;
}

.Other-Month-Days{
    background-color: #ffffff78;
    text-align: center;
    align-content: center;
    width: 5.625rem;
    border-radius: 5rem;   
}

.Current-Day {
    background-color: #A6C4C2;
    border: 0.25rem solid #2c5d5bc1;
}
</style>