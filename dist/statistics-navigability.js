document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.Slide');
    const slideTitle = document.querySelector('.Slide-Title');
    const nextButton = document.querySelector('.Next');
    const backButton = document.querySelector('.Back');

    // Definir títulos para cada slide
    const slideTitles = [
        "Ciclo",
        "Fase Menstrual",
        "Día a Ovular",
        "Tendencia Sexual"
    ];

    let currentSlideIndex = 0;

    // Función para mostrar el slide actual y actualizar el título
    function renderSlides(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });

        // Actualizar el título del slide
        slideTitle.textContent = slideTitles[index];
    }

    // Evento para ir al slide anterior
    backButton.addEventListener('click', () => {
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        renderSlides(currentSlideIndex);
    });

    // Evento para ir al siguiente slide
    nextButton.addEventListener('click', () => {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        renderSlides(currentSlideIndex);
    });

    // Renderizado inicial

});
