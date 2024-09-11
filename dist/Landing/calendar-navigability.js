document.addEventListener('DOMContentLoaded', () => {
    const monthDays=document.querySelector('.Days');
    const month =document.querySelector('.Month');
    const nextButton=document.querySelector('.NextBtn');
    const backButton=document.querySelector('.BackBtn');
    const popup=document.querySelector('.Popup');
    const popupDate=document.querySelector('.Popup-Date');
    const popupPhase=document.querySelector('.Cycle-Phase');
    const saveButton=document.querySelector('.SaveBtn');
    const exitButton=document.querySelector('.ExitBtn');


    const months = ['Junio','Julio','Agosto','Septiembre','Octubre'];
    const daysInMonths = [30,31,31,30,31];
    const firstDays=[6,1,4,0,2] //First day of each month
    const weekDays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']; // Días de la semana


    let currentMonthIndex = 1;
    let selectedDate = null;

    //clean and update the calendar
    function renderCalendar(monthIndex) {
        monthDays.innerHTML=''; 
        month.textContent=months[monthIndex]; 

        // Add empty cells for days before the 1st
        for(let i=0; i<firstDays[monthIndex]; i++){  ///Add styles to cells before first day of the month
            const day = document.createElement('div');
            day.className = 'Day Other-Month-Days';
            monthDays.appendChild(day);
        }
        // Add days of the month
        for (let i = 1; i <= daysInMonths[monthIndex]; i++) { //Add styles to Normal days
            const day = document.createElement('div');
            day.textContent = i;
            day.className = 'Day Normal-Day';
            day.addEventListener('click', (event) => showPopup(i, monthIndex, event.target));

            //Add styles to Menstrual days and Fertile days
            if ([8,9,10, 11].includes(i)) {
                day.className = 'Day Menstrual-Day';
            } else if ([20,21,22, 23,24, 25].includes(i)) {
                day.className = 'Day Fertile-Day';
            }
             //Add styles to Ovulation days
            if ([22,23].includes(i)) {
                day.className = 'Day Ovulation-Day';
            }
            //Add styles to the Current day
            if(monthIndex ===1 && i ===25){
                day.className = 'Day Current-Day';
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

    function showPopup(day, monthIndex, clickedElement) {
        const selectedMonth = months[monthIndex];
        const selectedDay = day; 
    
        const firstDayOfMonth = firstDays[monthIndex]; 
        const dayOfWeek = (firstDayOfMonth + (day - 1)) % 7; 
        const selectedWeekDay = weekDays[dayOfWeek]; 

        // Show the date in popup
        popupDate.textContent = `${selectedWeekDay} ${selectedDay} de ${selectedMonth}, 2023`;
 
        if (clickedElement.classList.contains('Fertile-Day') || clickedElement.classList.contains('Ovulation-Day')) {
            popupPhase.textContent = 'Fase Ovulatoria';
            popupPhase.className = 'Ovulatory-Phase';
        } else if  (clickedElement.classList.contains('Menstrual-Day')){
            popupPhase.textContent = 'Fase Menstrual';
            popupPhase.className = 'Menstrual-Phase';
        }else if (selectedDay >= 12 && selectedDay <= 19){
            popupPhase.textContent = 'Fase Folicular';
            popupPhase.className = 'Folicular-Phase';
        }else {
            popupPhase.textContent = 'Fase Lútea';
            popupPhase.className = 'Luteal-Phase';
        }  
        
        if(monthIndex ===1 && selectedDay  ===25){
            popupPhase.textContent = 'Fase Ovulatoria';
            popupPhase.className = 'Ovulatory-Phase';
        }
    
        popup.classList.remove('hidden');
    }

    function hidePopup() {
        popup.classList.add('hidden');
    }

    saveButton.addEventListener('click', () => {
        console.log('Saved for date:', selectedDate);
        hidePopup();
    });

    exitButton.addEventListener('click', hidePopup);

    // Initial render
    renderCalendar(currentMonthIndex);
    });