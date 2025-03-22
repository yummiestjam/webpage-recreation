const sections = document.querySelectorAll(".scroll-section");
const sec1 = document.getElementById("scroll-1");
const sec2 = document.getElementById("scroll-2");
const sec3 = document.getElementById("scroll-3");
const sec4 = document.getElementById("scroll-4");
const sec5 = document.getElementById("scroll-5");
const sec6 = document.getElementById("scroll-6");
const sec7 = document.getElementById("scroll-7");
const sec8 = document.getElementById("scroll-8");

// heres the plan:
/*
    - make a single scroll event listener, track scroll progress, scale it 0 to 1
    - for each section, have a function that handles animations based on progress
*/

let progress;

window.addEventListener("scroll", function() {

    // track progress: scale scrollY by height of section
    // apparently the -1 is necessary by testing
    progress = window.scrollY / sec1.offsetHeight - 1;
    // clamp between 0 and 1
    // progress = Math.max(0, Math.min(1, progress));
    console.log("progress: " + progress);
    // console.log("progress % 2: " + (progress % 2));

    if (progress <= 2) {
        handleAnimation(sec1);
    } else if (progress <= 4) {
        handleAnimation(sec2);
    } else if (progress <= 6) {
        handleAnimation(sec3);
    } else if (progress <= 8) {
        handleAnimation(sec4);
    } else if (progress <= 10) {
        handleAnimation(sec5);
    } else if (progress <= 12) {
        handleAnimation(sec6);
    } else if (progress <= 14) {
        handleAnimation(sec7);
    } else if (progress <= 16) {
        handleAnimation(sec8);
    }
})

// turn this into a convert-progress
function handleAnimation(section) {
    const start = section.offsetTop;
    const end = start + section.offsetHeight;

    // console.log("scrollY: " + window.scrollY);
    // console.log("start: " + start);
    // console.log("progress: " + progress);

    // Move the box based on scroll progress
    section.children[0].style.transform = `translateX(${(progress % 2) * 100}vw)`;
}