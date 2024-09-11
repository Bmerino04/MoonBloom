document.addEventListener('DOMContentLoaded', () => {
    const monthDays=document.querySelector('.Days');
    const month =document.querySelector('.Month');
    const nextButton=document.querySelector('.Next-Button');
    const backButton=document.querySelector('.Back-Button');
    const popup=document.querySelector('.Popup');
    const popupDate=document.querySelector('.Popup-Date');
    const popupPhase=document.querySelector('.Cycle-Phase');
    const saveButton=document.querySelector('.Save-Button');
    const exitButton=document.querySelector('.Exit-Button');


    const months = ['Junio','Julio','Agosto','Septiembre','Octubre'];
    const daysInMonths = [30,31,31,30,31];
    const firstDays=[6,1,4,0,2] //First day of each month
    const weekDays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];


    let currentMonthIndex = 1;
    let selectedDate = null;

    //Render and update the calendar based on the current month index
    function renderCalendar(monthIndex) {
        monthDays.innerHTML=''; 
        month.textContent=months[monthIndex]; 

        // Add empty cells before the first day of the month
        for(let i=0; i<firstDays[monthIndex]; i++){ 
            const day = document.createElement('div');
            day.className = 'Day Other-Month-Days';
            monthDays.appendChild(day);
        }
        //Add actual days of the month with their respective styles and event listener
        for (let i = 1; i <= daysInMonths[monthIndex]; i++) {
            const day = document.createElement('div');
            day.textContent = i;
            day.className = 'Day Normal-Day';
            day.addEventListener('click', (event) => showPopup(i, monthIndex, event.target));

            //Apply specific styles for each phase
            if ([8,9,10, 11].includes(i)) {
                day.className = 'Day Menstrual-Day';
            } else if ([20,21,22, 23,24, 25].includes(i)) {
                day.className = 'Day Fertile-Day';
            }
           
            if ([22,23].includes(i)) {
                day.className = 'Day Ovulation-Day';
            }
            //Highlight the current day
            if(monthIndex ===1 && i ===25){
                day.className = 'Day Current-Day';
            }
     
            monthDays.appendChild(day);
        } 

        //Add empty cells after the last day of the month to complete the grid
        const totalCells = 42; 
        const remainingCells = totalCells - (firstDays[monthIndex] + daysInMonths[monthIndex]);
        for (let i = 1; i <= remainingCells; i++) {
            const day = document.createElement('div');
            day.className = 'Other-Month-Days'; 
            monthDays.appendChild(day);
        }
    }
    
    //Navigate to the previous month when the bcak button is clicked
    backButton.addEventListener('click', () => {
        currentMonthIndex = (currentMonthIndex - 1 + months.length) % months.length;
        renderCalendar(currentMonthIndex);
    });

    //Navigate to the next month when the next button is clicked
    nextButton.addEventListener('click', () => {
        currentMonthIndex = (currentMonthIndex + 1) % months.length;
        renderCalendar(currentMonthIndex);
    });

    //Show the popup with the selected date and phase details
    function showPopup(day, monthIndex, clickedElement) {
        const selectedMonth = months[monthIndex];
        const selectedDay = day; 
    
        //Calculate the day of the week
        const firstDayOfMonth = firstDays[monthIndex]; 
        const dayOfWeek = (firstDayOfMonth + (day - 1)) % 7; 
        const selectedWeekDay = weekDays[dayOfWeek]; 

        // Show the selected date in the popup
        popupDate.textContent = `${selectedWeekDay} ${selectedDay} de ${selectedMonth}, 2023`;

        //Assign the phase for the selected day
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
        //Assign ovulatory phase to the current day
        if(monthIndex ===1 && selectedDay  ===25){
            popupPhase.textContent = 'Fase Ovulatoria';
            popupPhase.className = 'Ovulatory-Phase';
        }

        //Show the popup
        popup.classList.remove('hidden');
    }
    
    //Hide the popup
    function hidePopup() {
        popup.classList.add('hidden');
    }

    //Non-functional button that hide the popup when clicked
    saveButton.addEventListener('click', () => {
        console.log('Saved for date:', selectedDate);
        hidePopup();
    });

    //Non-functional button that hide the popup when clicked
    exitButton.addEventListener('click', hidePopup);

    // Initial render
    renderCalendar(currentMonthIndex);
    });