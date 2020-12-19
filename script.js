'use strict'

const cats = [
    "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495636.svg",
    "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495625.svg",
    "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495622.svg",
    "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495619.svg",
    "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495616.svg",
    "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495613.svg",
    "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495592.svg",
    "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/495579.svg",
    "https://storage.googleapis.com/ck-kitty-image/0x06012c8cf97bead5deae237070f9587f8e7a266d/336916.svg"
  ];
let currentSlide = 0;

let next = document.querySelector('.nextSlide');
let prev = document.querySelector('.prevSlide');
let wrapper = document.querySelector('.wrapper');
let wrap = document.querySelector('.wrap')


for(let i = 0; i < cats.length;i++){
    let number = document.createElement('div');
    number.classList.add(`number${i}`);
    wrap.append(number);
    number.innerHTML =`${i}`;
    number.onclick = () =>{
        document.querySelector("img").src = cats[i];
    };
};


next.onclick = () =>{
    if(currentSlide === cats.length - 1){
        currentSlide = 0;
    }else{
    currentSlide++;
}
    updateSlide();
}

prev.onclick = () =>{
    if(currentSlide === 0){
        currentSlide = cats.length - 1;
    }else{
    currentSlide--;
    }
    updateSlide();
}

function updateSlide(){
    document.querySelector("img").src = cats[currentSlide];
}


