const switchButton1 = document.getElementById('switchButton1');
const switchButton2 = document.getElementById('switchButton2');
const switchButton3 = document.getElementById('switchButton3');
const switchButton4 = document.getElementById('switchButton4');
const switchButton5 = document.getElementById('switchButton5');
const switchButton6 = document.getElementById('switchButton6');

const image = document.getElementById('imagehome');

const images= ['images/chev.png' , 'images/jag.png' , 'images/ka.png' , 'images/lambo.png' , 'images/lotus.png' , 'images/nissan.png'];

let index=0;

switchButton1.addEventListener('click' , () => {
    index = 0;
    image.src = images[index];
});

switchButton2.addEventListener('click' , () => {
    index = 1;
    image.src = images[index];
});

switchButton3.addEventListener('click' , () => {
    index = 2;
    image.src = images[index];
});

switchButton4.addEventListener('click' , () => {
    index = 3;
    image.src = images[index];
});

switchButton5.addEventListener('click' , () => {
    index = 4;
    image.src = images[index];
});

switchButton6.addEventListener('click' , () => {
    index = 5;
    image.src = images[index];
});


$(document).ready(function() {
    $('#carouselExampleControls').carousel();
  });
  