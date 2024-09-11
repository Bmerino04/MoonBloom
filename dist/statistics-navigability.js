document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.Slide');
    const slideTitle = document.querySelector('.Slide-Title');
    const nextButton = document.querySelector('.Next');
    const backButton = document.querySelector('.Back');

    const slideTitles = ["Ciclo", "Fase Menstrual", "Día a Ovular", "Tendencia Sexual"];
    let currentSlideIndex = 0;

    function renderSlides(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
        slideTitle.textContent = slideTitles[index];

        // Inicializar el gráfico para el slide visible
        initializeChart(index);

        // Si llegamos al slide de "Tendencia Sexual", también renderizamos el segundo carrusel
        if (index === 3) { // Slide "Tendencia Sexual"
            renderSecondSlides(currentSecondSlideIndex);
        }
    }

    function initializeChart(index) {
        const chartId = `LineChart${index + 1}`;
        const canvas = document.getElementById(chartId);
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['av-1', 'av-2', 'av-3', 'av-4', 'av-5', 'av-6', 'av-6', 'av-6', 'av-6'],
                datasets: [{
                    data: [21, 13, 12, 17, 15, 18, 12, 12, 9],
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
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        type: 'category',
                        labels: ['0', '1', '2', '3', '4', '5', '6', '7','8'],
                        title: {
                            display: true,
                            text: 'Periodos'
                        }
                    },
                    y: {
                        min: 0,
                        max: 35,
                        title: {
                            display: true,
                            text: 'Días',
                        }
                    }
                }
            }
        });
    }

    backButton.addEventListener('click', () => {
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        renderSlides(currentSlideIndex);
    });

    nextButton.addEventListener('click', () => {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        renderSlides(currentSlideIndex);
    });

    // Renderizado inicial
    renderSlides(currentSlideIndex);

    // Lógica del segundo carrusel
    const secondSlides = document.querySelectorAll('.Second-Slide');
    const secondNextButton = document.querySelector('.Second-Next');
    const secondBackButton = document.querySelector('.Second-Back');

    let currentSecondSlideIndex = 0;

    function renderSecondSlides(index) {
        secondSlides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });

        // Inicializar el gráfico de barras en el slide visible
        initializeSexChart(index);
    }

    function initializeSexChart(index) {
        const chartId = `SexChart${index + 1}`;
        const canvas = document.getElementById(chartId);
        if (!canvas) return;
    
        const ctx = canvas.getContext('2d');
    
        // Destroy any existing chart instance before creating a new one
        if (window[`sexChart${index}`]) {
            window[`sexChart${index}`].destroy();
        }
    
        // Store the chart instance in a global variable
        window[`sexChart${index}`] = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Menstrual', 'Folicular', 'Ovulatoria', 'Lutea'],
                datasets: [
                    {
                        label: 'R.S. con protección',
                        data: [1, 2, 4, 2],
                        backgroundColor: '#F88FA3',
                    },
                    {
                        label: 'R.S. sin protección',
                        data: [2, 1, 0, 1],
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
                                size: 14,
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    secondBackButton.addEventListener('click', () => {
        currentSecondSlideIndex = (currentSecondSlideIndex - 1 + secondSlides.length) % secondSlides.length;
        renderSecondSlides(currentSecondSlideIndex);
    });

    secondNextButton.addEventListener('click', () => {
        currentSecondSlideIndex = (currentSecondSlideIndex + 1) % secondSlides.length;
        renderSecondSlides(currentSecondSlideIndex);
    });

    // Renderizado inicial del segundo carrusel
    renderSecondSlides(currentSecondSlideIndex);
});

