const slides = [
    {
        image: "slide1.jpg",
        tagLine:
            "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
        image: "slide2.jpg",
        tagLine:
            "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    },
    {
        image: "slide3.jpg",
        tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    {
        image: "slide4.png",
        tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
    },
];

let currentIndex = 0;
const prevImage = document.getElementById("prevImg");
const nextImage = document.getElementById("nextImg");
const bannerImg = document.querySelector(".banner-img");
const path = "./assets/images/slideshow/";
const tagLine = document.querySelector("#banner p");

function updateSlide(index) {
    const currentSlide = slides[index];
    bannerImg.src = path + currentSlide.image;
    tagLine.innerHTML = currentSlide.tagLine;
}

prevImage.addEventListener("click", function () {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    }
    updateSlide(currentIndex);
});

nextImage.addEventListener("click", function () {
    currentIndex++;
    if (currentIndex > slides.length - 1) {
        currentIndex = 0;
    }
    updateSlide(currentIndex);
});
