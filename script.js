// Global state
let currentSlide = {
    flora: 0,
    fauna: 0
};

const content = {
    flora: {
        naranjales: "Los naranjales son una parte fundamental del paisaje de Fortaleny. Estos cultivos de cítricos dominan las afueras del municipio, creando un mar verde que se transforma en blanco durante la floración y en naranja durante la cosecha.",
        pinada: "La pinada mediterránea de Fortaleny constituye un pulmón verde para el municipio. Dominada por el pino carrasco (Pinus halepensis), esta área boscosa alberga numerosas especies de sotobosque como romero, tomillo y lavanda.",
        ribera: "En las cercanías del río, Fortaleny cuenta con áreas de vegetación de ribera típica valenciana. Aquí podemos encontrar especies como chopos, sauces y álamos, que crean microhábitats húmedos.",
        huerta: "La huerta tradicional de Fortaleny representa un sistema agrícola sostenible desarrollado a lo largo de siglos. Además de verduras y hortalizas de temporada, estas áreas de cultivo están delimitadas por setos naturales."
    },
    fauna: {
        aves: "Fortaleny es hogar de numerosas especies de aves, tanto residentes como migratorias. Entre las más comunes se encuentran el gorrión común, la golondrina y el jilguero.",
        mamiferos: "Los campos y bosques alrededor de Fortaleny albergan una variedad de mamíferos adaptados a la vida cerca de asentamientos humanos. Es común encontrar conejos, liebres y erizos.",
        reptiles: "La herpetofauna de Fortaleny incluye especies como la lagartija ibérica y el lagarto ocelado, fáciles de ver tomando el sol en muros de piedra. Entre los anfibios destacan la rana común y el sapo corredor.",
        insectos: "El mundo de los insectos en Fortaleny es particularmente diverso. Durante la primavera y el verano, mariposas como la macaón y la vanesa de los cardos colorean los campos."
    }
};

// Toggle hamburger menu
function toggleMenu() {
    document.querySelector('.menu').classList.toggle('active');
}

// Page navigation
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.add('hidden');
    });
    
    // Show selected page
    document.getElementById(pageId).classList.remove('hidden');
    
    // Close menu after navigation
    document.querySelector('.menu').classList.remove('active');
    
    // Update active state in menu
    document.querySelectorAll('.menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick').includes(pageId)) {
            link.classList.add('active');
        }
    });
}

// Carousel navigation
function moveCarousel(direction, type) {
    const items = document.querySelectorAll(`#${type} .carousel-item`);
    currentSlide[type] = (currentSlide[type] + direction + items.length) % items.length;
    
    items.forEach((item, index) => {
        item.style.transform = `translateX(${(index - currentSlide[type]) * 100}%)`;
    });
}

// Initialize carousels
function initCarousels() {
    ['flora', 'fauna'].forEach(type => {
        const items = document.querySelectorAll(`#${type} .carousel-item`);
        items.forEach((item, index) => {
            item.style.transform = `translateX(${index * 100}%)`;
        });
    });
}

// Dropdown functionality
function toggleDropdown(dropdownId) {
    document.getElementById(dropdownId).classList.toggle('active');
}

// Update content based on selection
function updateContent(type, option) {
    // Update dropdown button text
    document.getElementById(`${type}Selected`).textContent = 
        document.querySelector(`#${type}Dropdown a[onclick*="${option}"]`).textContent;
    
    // Update content with animation
    const contentElement = document.getElementById(`${type}Content`);
    contentElement.style.opacity = '0';
    
    setTimeout(() => {
        contentElement.textContent = content[type][option];
        contentElement.style.opacity = '1';
    }, 300);
    
    // Close dropdown
    document.getElementById(`${type}Dropdown`).classList.remove('active');
}

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.matches('.dropdown-btn') && !e.target.matches('.dropdown-btn *')) {
        document.querySelectorAll('.dropdown-content').forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    }
});

// Initialize when document is loaded
document.addEventListener('DOMContentLoaded', () => {
    initCarousels();
    // Show home page by default
    showPage('home');
});