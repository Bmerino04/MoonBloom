document.addEventListener('DOMContentLoaded', () => {
    const monthDays=document.querySelector('.Days');
    const month =document.querySelector('.Month');
    const nextButton=document.querySelector('.Next');
    const backButton=document.querySelector('.Back');

    const months = ['Junio','Julio','Agosto','Septiembre','Octubre'];
    const daysInMonths = [30,31,31,30,31];
    const firstDays=[6,1,4,0,2] //dia de la semana en la que empieza cada mes

    let currentMonthIndex = 1;

    function renderCalendar(monthIndex) {
        monthDays.innerHTML=''; //limpia el calendario
        month.textContent=months[monthIndex]; //actualiza el calendario

        for(let i=0; i<firstDays[monthIndex]; i++){  //celdas vacias antes del primer dia
            const day = document.createElement('div');
            day.className = 'day other-month-days';
            monthDays.appendChild(day);
        }

        for (let i = 1; i <= daysInMonths[monthIndex]; i++) { //dias del mes
            const day = document.createElement('div');
            day.textContent = i;
            day.className = 'day normal-day';

            if ([8,9,10, 11].includes(i)) {
                day.className = 'day menstrual-day';
            } else if ([20,21,22, 23,24, 25].includes(i)) {
                day.className = 'day fertile-day';
            }
            if ([22,23].includes(i)) { //dias punteados
            if ([22,23].includes(i)) {
                day.className = 'day ovulation-day';
            }
            if(monthIndex ===1 && i ===25){
                day.className = 'day current-day';
            }
            monthDays.appendChild(day);
        } 

        const totalCells = 42; 
        const remainingCells = totalCells - (firstDays[monthIndex] + daysInMonths[monthIndex]);
        for (let i = 1; i <= remainingCells; i++) {//celdas calendadio
            const day = document.createElement('div');
            day.className = 'other-month-days'; //Add styles to cells after last day of the month
            monthDays.appendChild(day);
        }
    }

    backButton.addEventListener('click', () => {
        currentMonthIndex = (currentMonthIndex - 1 + months.length) % months.length;
        renderCalendar(currentMonthIndex);
    });

    nextButton.addEventListener('click', () => {
        currentMonthIndex = (currentMonthIndex + 1) % months.length;
        renderCalendar(currentMonthIndex);
    });

    // Initial render
    renderCalendar(currentMonthIndex);
    });