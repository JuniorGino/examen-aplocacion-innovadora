const images = document.querySelectorAll('.carousel-img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let index = 0;

nextBtn.onclick = () => {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
};

prevBtn.onclick = () => {
    images[index].classList.remove('active');
    index = (index - 1 + images.length) % images.length;
    images[index].classList.add('active');
};
