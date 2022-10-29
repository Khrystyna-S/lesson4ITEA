const arrayImages = ['images/one.jpg', 'images/two.jpg', 'images/three.jpg', 'images/four.jpg',
    'images/five.jpg', 'images/six.jpg', 'images/seven.jpg', 'images/eight.jpg'];

const slider = document.querySelector('.images');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dots = document.getElementsByClassName('dot');

let id = 0;
window.addEventListener('load', slideShow(id));

function slideShow(id) {
    slider.src = arrayImages[id];

    slider.classList.add('fade');

    setTimeout(() => {
        slider.classList.remove('fade');
    }, 550);

    for(let i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("active", "");
    }

    dots[id].className += " active";

}

function currentSlide(n) {
    slideShow(id = n - 1);
}

prev.addEventListener('click', () => {
    id--;
    if (id < 0) {
        id = arrayImages.length - 1;
    }
    slideShow(id);
})

next.addEventListener('click', () => {
    id++;
    if (id > arrayImages.length - 1) {
        id = 0;
    }
    slideShow(id);
})
