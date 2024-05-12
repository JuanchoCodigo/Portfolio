// Moving the slides with mouse events

const slides = document.querySelector(".slides");

let isDown = false;
let startX;
let scrollLeft;

slides.addEventListener("mousedown", (e) => {
    isDown = true;
    slides.classList.add("active");
    startX = e.pageX - slides.offsetLeft;
    scrollLeft = slides.scrollLeft;
});

slides.addEventListener("mouseleave", () => {
    isDown = false;
    slides.classList.remove("active");
});

slides.addEventListener("mouseup", () => {
    isDown = false;
    slides.classList.remove("active");
});

slides.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slides.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    slides.scrollLeft = scrollLeft - walk;
});

// Move the slides with the prev and next buttons 

const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

prevBtn.addEventListener("click", () => {
    slides.scrollLeft -= slides.offsetWidth;
});

nextBtn.addEventListener("click", () => {
    slides.scrollLeft += slides.offsetWidth;
});

// Restart the slides when the last slide is shown

slides.addEventListener("scroll", () => {
    const slidesWidth = slides.scrollWidth;
    const slidesScrollLeft = slides.scrollLeft;
    const slidesWidthOffset = slidesWidth - slides.offsetWidth;

    if (slidesScrollLeft === slidesWidthOffset) {
        slides.scrollLeft = 0;
    }
});

// Move one slide at a time when clicking the slides

const slide = document.querySelector(".slides");
const slideWidth = slide.offsetWidth;

slide.addEventListener("click", () => {
    slides.scrollLeft += slideWidth;
});

slide.addEventListener("touchstart", () => {
    slides.scrollLeft += slideWidth;
});

// move slides every 4 seconds

setInterval(() => {
    slides.scrollLeft += slideWidth;
}, 5000);



/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}