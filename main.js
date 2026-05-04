// Datos de los puntos estratégicos de Ituzaingó
const datosEntorno = {
    transporte: {
        titulo: "Conectividad Total",
        detalle: "A solo 600m de la Estación Ituzaingó (Tren Sarmiento) y paradas de líneas 136 y 436 hacia CABA."
    },
    gastronomia: {
        titulo: "Polo Gastronómico",
        detalle: "A 5 minutos de las exclusivas propuestas de la calle Santa Rosa y el complejo Leloir Plaza."
    },
    verdes: {
        titulo: "Aire Puro",
        detalle: "Cercanía estratégica a la Reserva Natural de Ituzaingó, ideal para deportes y relax al aire libre."
    },
    educacion: {
        titulo: "Zona Educativa",
        detalle: "Acceso inmediato a los colegios más destacados de la zona (Oak Tree, Colegio Esclavas)."
    }
};

// Función para mostrar la información
function showInfo(punto) {
    const info = datosEntorno[punto];
    
    // Aquí puedes usar un simple alert para testear, 
    // pero para la V-Prop definitiva usaremos un modal o un div dedicado.
    
    const displayArea = document.getElementById('info-display');
    
    // Efecto de fade-in para la info
    displayArea.style.opacity = 0;
    
    setTimeout(() => {
        displayArea.innerHTML = `
            <div class="info-card">
                <h4>${info.titulo}</h4>
                <p>${info.detalle}</p>
            </div>
        `;
        displayArea.style.opacity = 1;
    }, 200);
}

// Agregar event listeners a los carteles
const carousel = document.getElementById('carousel');
const dots = document.querySelectorAll('.dot');

// 1. Sincronizar los puntos cuando deslizas con el dedo
carousel.addEventListener('scroll', () => {
    const scrollLeft = carousel.scrollLeft;
    const width = carousel.offsetWidth;
    const activeIndex = Math.round(scrollLeft / width);
    
    actualizarPuntos(activeIndex);
});

// 2. Función para ir a una foto específica al tocar el punto
function goToSlide(index) {
    const width = carousel.offsetWidth;
    carousel.scrollTo({
        left: width * index,
        behavior: 'smooth'
    });
    actualizarPuntos(index);
}

// 3. Función auxiliar para cambiar la clase activa
function actualizarPuntos(index) {
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}