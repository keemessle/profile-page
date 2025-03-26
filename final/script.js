// home 텍스트 타이핑 효과
const content = "H E L L O !"
const text = document.querySelector(".title h1");
let textIdx = 0;

function typing() {
    let txt = content[textIdx++];

    text.innerHTML += txt;

    if (textIdx > content.length) {
        text.textContent = "";
        textIdx = 0;
    }
}

setInterval(typing, 200)


// 스크롤에 반응하는 애니메이션
let aboutCard = document.querySelector(".about_profile")

let contactTitle = document.querySelector("#contact .category h2")
let contactLink = document.querySelector("#contact .link ul");

window.addEventListener("scroll", function() {
    let value = window.scrollY;
    if (value < 400){
        aboutCard.style.animation = "about_backslide 0.5s ease-out forwards";
    } else {
        aboutCard.style.animation = "about_slide 0.5s ease-out"
    };

    if(value > 2500) {
        contactTilte.style.animation = "grow 0.8s linear";
        contactLink.style.animation = "grow 0.8s linear";
    } else{
        contactTilte.style.animation = "grow-out 0.5s linear";
        contactLink.style.animation = "grow-out 0.5s linear";
    };
})


// project slide
const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slides li");
const slideCount = slide.length;

let currentIdx = 0;

let slideWidth = 400;
let slideMargin = 30;

const visibleCount = 2;

slides.style.width = (slideWidth + slideMargin) * slideCount - slideMargin + 'px';

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next")

function moveSlide(num){
    // slide 가 움직일때 slide index가 1이면 -330px 2면 -660px
    slides.style.left = -num * 430 +'px';
    currentIdx = num;
}

prevBtn.addEventListener('click', function(){
    if(currentIdx > 0){
        moveSlide(currentIdx - 1);
    } else {
        moveSlide(slideCount - visibleCount);
    }
})

nextBtn.addEventListener('click', function(){
    if(currentIdx < slideCount - visibleCount){
        moveSlide(currentIdx + 1);
    } else {
        moveSlide(0);
    }
})
