const video = document.getElementById('mainVideo');
const playPauseBtn = document.getElementById('playPauseBtn');
const mainImage = document.getElementById('mainImage');
const imageDescription = document.getElementById('imageDescription');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const toggleThemeBtn = document.getElementById('toggleThemeBtn');

const images = [
    {
        src: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
        description: 'Uma vibrante paisagem urbana com arranha-céus iluminados à noite.'
    },
    {
        src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
        description: 'Um tranquilo campo verde com montanhas ao fundo.'
    },
    {
        src: 'https://images.unsplash.com/photo-1516321318423-7d6a78d56626',
        description: 'Uma rua movimentada da cidade com luzes de néon.'
    },
    {
        src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e',
        description: 'Um pôr do sol sereno sobre um campo florido.'
    }
];

let currentImageIndex = 0;
let isCityTheme = false;

function updateImage() {
    mainImage.src = images[currentImageIndex].src;
    imageDescription.textContent = images[currentImageIndex].description;
}

playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = 'Pausar';
    } else {
        video.pause();
        playPauseBtn.textContent = 'Reproduzir';
    }
});

prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
});

nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
});

toggleThemeBtn.addEventListener('click', () => {
    isCityTheme = !isCityTheme;
    document.body.classList.toggle('city-theme', isCityTheme);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateImage();
    } else if (e.key === 'ArrowRight') {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateImage();
    }
});

updateImage();