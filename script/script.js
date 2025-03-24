const sections = document.querySelectorAll(".scroll-section");
const sec1 = document.getElementById("scroll-1");
const sec2 = document.getElementById("scroll-2");
const sec3 = document.getElementById("scroll-3");
const sec4 = document.getElementById("scroll-4");
const sec5 = document.getElementById("scroll-5");
const sec6 = document.getElementById("scroll-6");
const sec7 = document.getElementById("scroll-7");
const sec8 = document.getElementById("scroll-8");

let progress = window.scrollY / sec1.offsetHeight - 1;;
let lastProgress = progress;

window.addEventListener("scroll", function() {

    // track progress: scale scrollY by height of a section
    progress = window.scrollY / sec1.offsetHeight - 1;
    // scale it so each section starts at 0
    scaledProgress = progress % 2;

    // progress = Math.max(0, Math.min(1, progress));
    console.log("progress: " + progress);
    // console.log("scaledProgress " + (scaledProgress));

    handleInboxAnimation();

    handleSpeedAnimation();



    handleTextAnimation();



    handleDesignAnimation();

    handleSearchAnimation();

    // ----------------------------------------------------------------------

    lastProgress = progress;
})

function handleInboxAnimation() {

    const inboxLine = document.querySelector(".inbox-1 .underline");

    inboxLine.classList.add("inbox-animation");

    // convert progress to a number 1 to 5, clamp it
    let inboxLineProgress = Math.ceil(scaledProgress * 5);
    inboxLineProgress = Math.min(Math.max(inboxLineProgress, 1), 5);

    // use converted number to add the class for each position
    inboxLine.classList.remove("inbox-line-1", "inbox-line-2", "inbox-line-3", "inbox-line-4", "inbox-line-5");
    inboxLine.classList.add(`inbox-line-${inboxLineProgress}`);

}

function handleSpeedAnimation() {

    const speedLines = document.querySelectorAll(".speed-line");

    let speedProgress = 0;

    let numSteps = 11;

    if (window.matchMedia("(min-width: 48em)")) {
        numSteps = 30;
    }

    // if we're focused on the right section, start calculating
    if (progress > 2) {
        // convert progress to a number 1 to 11, clamp it
        speedProgress = Math.ceil(scaledProgress * numSteps);
        // -1 so it can be used as an array index
        speedProgress = Math.min(Math.max(speedProgress, 1), numSteps) - 1;
    }

    speedLines.forEach(line => {
        line.classList.remove("shade1", "shade2", "shade3", "shade4", "shade5" );
    });

    addClassIfObjectExists(speedLines[speedProgress - 4], "shade1");
    addClassIfObjectExists(speedLines[speedProgress - 3], "shade2");
    addClassIfObjectExists(speedLines[speedProgress - 2], "shade3");
    addClassIfObjectExists(speedLines[speedProgress - 1], "shade4");
    addClassIfObjectExists(speedLines[speedProgress], "shade5");
    addClassIfObjectExists(speedLines[speedProgress + 1], "shade4");
    addClassIfObjectExists(speedLines[speedProgress + 2], "shade3");
    addClassIfObjectExists(speedLines[speedProgress + 3], "shade2");
    addClassIfObjectExists(speedLines[speedProgress + 4], "shade1");
}

function addClassIfObjectExists(object, className) {
    if (object) {
        object.classList.add(className);
    }
}

function handleTextAnimation() {
    const tryTatem = document.getElementById("try-tatem");
    const textOptions = document.querySelectorAll(".text-option");
    const dot = document.querySelector(".dot");

    let textProgress = 0;

    if (progress > 6) {
        textProgress = Math.ceil(scaledProgress * 4);
        textProgress = Math.min(Math.max(textProgress, 1), 4) - 1;
        // console.log(textProgress);
    }

    textOptions.forEach(option => {
        option.style.color = "#B7B7B7";
        option.style.backgroundColor = "#E9E9E9";
    });

    textOptions[textProgress].style.color = "#ffffff";
    textOptions[textProgress].style.backgroundColor = "#181818";

    // console.log(textOptions[textProgress].id);
    switch (textOptions[textProgress].id) {
        case "orange":
            tryTatem.style.color = "#ff6e40";
            tryTatem.style.backgroundColor = "#00000000";
            dot.style.display = "none";
            break;
        case "highlight":
            tryTatem.style.fontStyle = "normal";
            tryTatem.style.color = "#181818";
            tryTatem.style.backgroundColor = "#ffeeab";
            dot.style.display = "none";
            break;
        case "italicize":
            tryTatem.style.fontStyle = "italic";
            tryTatem.style.backgroundColor = "#00000000";
            dot.style.display = "none";
            break;
        case "bullet":
            tryTatem.style.fontStyle = "normal";
            tryTatem.style.backgroundColor = "#00000000";
            dot.style.display = "block";
            break;
    }
}

function handleDesignAnimation() {

    const circles = document.querySelectorAll(".design-circle");
    const bg = document.querySelector("#scroll-5 .feature-bg");
    const desText = document.querySelectorAll(".design-text p");

    circles.forEach(circle => {
        circle.style.width = "2rem";
        circle.style.height = "2rem";
    });

    if (window.matchMedia("(min-width: 48em)")) {
        numSteps = 5;
    }

    let circleProgress = 0;

    if (progress > 8) {
        circleProgress = Math.ceil(scaledProgress * numSteps);
        circleProgress = Math.min(Math.max(circleProgress, 1), numSteps) - 1;
        // console.log(circleProgress);
    }

    circles[circleProgress].style.width = "2.5rem";
    circles[circleProgress].style.height = "2.5rem";

    // console.log(bg);
    bg.classList.remove("shade1", "shade2", "shade3", "shade4", "shade5", )
    bg.classList.add(`shade${circleProgress}`)

    // console.log(desText);
    if (circleProgress > (numSteps / 2)) {
        desText.forEach(p => {
            p.style.color = "#ffffff";
        })
    } else {
        desText.forEach(p => {
            p.style.color = "#000000";
        })
    }
}

function handleSearchAnimation() {
    const rects = document.querySelectorAll("search-rect");
    const rect1 = document.getElementById("rect1");
    const rect2 = document.getElementById("rect2");
    const rect3 = document.getElementById("rect3");
    const rect4 = document.getElementById("rect4");
    const rect5 = document.getElementById("rect5");

    let searchProgress = 0;
    let numSteps = 5;

    if (progress > 10) {
        searchProgress = Math.ceil(scaledProgress * numSteps);
        searchProgress = Math.min(Math.max(searchProgress, 1), numSteps) - 1;
        // console.log(searchProgress);

        if (searchProgress === 0) {
            rect3.classList.add("move-rect3");
        } else if (searchProgress === 1) {
            rect1.classList.add("move-rect1");
        } else if (searchProgress === 2) {
            rect5.classList.add("move-rect5");
        } else if (searchProgress === 3) {
            rect4.classList.add("move-rect4");
        } else if (searchProgress === 4) {
            rect2.classList.add("move-rect2");
        }
    } else {
        // rects.forEach(rect => {
        //     rect.classList.remove("move-rect1", "move-rect2", "move-rect3", "move-rect4", "move-rect5");
        // });
        // rect.style.transition = "transform 0.3s ease";
        // rect.style.transform = "none";
    }
        
}

// initial test animation / figuring out how to scale animation with the progress variable
// function handleAnimation(section) {
//     const start = section.offsetTop;
//     const end = start + section.offsetHeight;

//     // console.log("scrollY: " + window.scrollY);
//     // console.log("start: " + start);
//     // console.log("progress: " + progress);

//     // Move the box based on scroll progress
//     section.children[0].style.transform = `translateX(${(progress % 2) * 100}vw)`;
// }