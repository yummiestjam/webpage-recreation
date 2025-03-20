const sections = document.querySelectorAll(".scroll-section");
const sec1 = document.getElementById("scroll-1");
const sec2 = document.getElementById("scroll-2");

// heres the plan:
/*
    - make a single scroll event listener, track scroll progress, scale it 0 to 1
    - for each section, have a function that handles animations based on progress
*/

window.addEventListener("scroll", function() {
    handleAnimation(sec1)
    // this approach isnt working; need to measure TOTAL scroll progress and apply breakpoints to it for each animation i think

    // let totalProgress = 0;
    // console.log("total prog: " + totalProgress);
    // if (totalProgress <= 1) {
    //     totalProgress += handleAnimation(sec1);
    // } else if (totalProgress <= 2) {
    //     totalProgress += handleAnimation(sec2);
    // }
})

function handleAnimation(section) {
    const start = section.offsetTop;
    const end = start + section.offsetHeight;

    // track progress: scale scrollY by height of section
    // apparently the -1 is necessary by testing
    let progress = window.scrollY / section.offsetHeight - 1;

    // clamp between 0 and 2
    progress = Math.max(0, Math.min(1, progress));

    // console.log("scrollY: " + window.scrollY);
    // console.log("start: " + start);
    console.log("progress: " + progress);

    // Move the box based on scroll progress
    section.children[0].style.transform = `translateX(${progress * 100}vw)`;

    // return progress;
}