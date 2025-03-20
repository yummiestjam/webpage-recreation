const sections = document.querySelectorAll(".scroll-section");
const box = document.querySelector(".box");

// heres the plan:
/*
    - make a single scroll event listener, track scroll progress, scale it 0 to 1
    - for each section, have a function that handles animations based on progress
*/


window.addEventListener("scroll", function() {
    sections.forEach((section) => {
        // define start and end of animations using position and height of section
        const start = section.offsetTop;
        const end = start + section.offsetHeight;
        // console.log(start);
    
        // track progress within the section, and normalize it to 0 to 1. i don't fully understand the formula but it works
        let progress = (window.scrollY - start)/(end - start);
        console.log("scrollY: " + window.scrollY);
        console.log("start: " + start);
        console.log("progress: " + progress);
        // clamp progress between 0 and 1
        progress = Math.max(0, Math.min(1, progress));

        // disable sticky behavior once animation is done
        // if (progress < 1) {
        //     section.style.position = "sticky";
        //     section.style.top = "0";
        // } else {
        //     console.log
        //     section.style.position = "fixed";
        //     section.style.top = "-10000";
        // }
        
        // test box
        box.style.transform = `translateX(${progress * 100}vw)`;
    })
})