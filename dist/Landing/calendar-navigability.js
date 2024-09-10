document.addEventListener('DOMContentLoaded', () => {
    const monthDays=document.querySelector('.Days');
    const month =document.querySelector('.Month');
    const nextButton=document.querySelector('.Next');
    const backButton=document.querySelector('.Back');

    const months = ['Junio','Julio','Agosto','Septiembre','Octubre'];
    const daysInMonths = [30,31,31,30,31];
    const firstDays=[6,1,4,0,2] //First day of each month

    let currentMonthIndex = 1;

    //clean and update the calendar
    function renderCalendar(monthIndex) {
        monthDays.innerHTML=''; 
        month.textContent=months[monthIndex]; 

        // Add empty cells for days before the 1st
        for(let i=0; i<firstDays[monthIndex]; i++){  ///Add styles to cells before first day of the month
            const day = document.createElement('div');
            day.className = 'day other-month-days';
            monthDays.appendChild(day);
        }
        // Add days of the month
        for (let i = 1; i <= daysInMonths[monthIndex]; i++) { //Add styles to Normal days
            const day = document.createElement('div');
            day.textContent = i;
            day.className = 'day normal-day';

            //Add styles to Menstrual days and Fertile days
            if ([8,9,10, 11].includes(i)) {
                day.className = 'day menstrual-day';
            } else if ([20,21,22, 23,24, 25].includes(i)) {
                day.className = 'day fertile-day';
            }
             //Add styles to Ovulation days
            if ([22,23].includes(i)) {
                day.className = 'day ovulation-day';
            }
            //Add styles to the Current day
            if(monthIndex ===1 && i ===25){
                day.className = 'day current-day';
            }
            //Add divs to container .Days
            monthDays.appendChild(day);
        } 
        // Add empty cells for remaining days
        const totalCells = 42; 
        const remainingCells = totalCells - (firstDays[monthIndex] + daysInMonths[monthIndex]);
        for (let i = 1; i <= remainingCells; i++) {
            const day = document.createElement('div');
            day.className = 'other-month-days'; //Add styles to cells after last day of the month
            monthDays.appendChild(day);
        }
    }
    
    //Decrements the current month's index to go back to the previous month when clicked
    backButton.addEventListener('click', () => {
        currentMonthIndex = (currentMonthIndex - 1 + months.length) % months.length;
        renderCalendar(currentMonthIndex);
    });

    //Increments the current month's index to advance to the next month when clicked
    nextButton.addEventListener('click', () => {
        currentMonthIndex = (currentMonthIndex + 1) % months.length;
        renderCalendar(currentMonthIndex);
    });

    // Initial render
    renderCalendar(currentMonthIndex);
    });