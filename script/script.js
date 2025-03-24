const sections = document.querySelectorAll(".scroll-section");
const sec1 = document.getElementById("scroll-1");
const sec2 = document.getElementById("scroll-2");
const sec3 = document.getElementById("scroll-3");
const sec4 = document.getElementById("scroll-4");
const sec5 = document.getElementById("scroll-5");
const sec6 = document.getElementById("scroll-6");
const sec7 = document.getElementById("scroll-7");
const sec8 = document.getElementById("scroll-8");

// animated elements

const inboxLine = document.querySelector(".inbox-1 .underline");
const speedLines = document.querySelectorAll(".speed-line");

let progress = window.scrollY / sec1.offsetHeight - 1;;
let lastProgress = progress;

window.addEventListener("scroll", function() {

    // track progress: scale scrollY by height of a section
    progress = window.scrollY / sec1.offsetHeight - 1;
    // scale it so each section starts at 0
    scaledProgress = progress % 2;

    // progress = Math.max(0, Math.min(1, progress));
    // console.log("progress: " + progress);
    // console.log("progress % 2: " + (progress % 2));

    handleInboxAnimation();

    handleSpeedAnimation();

    // ----------------------------------------------------------------------

    lastProgress = progress;
})

function handleInboxAnimation() {

    inboxLine.classList.add("inbox-animation");

    // convert progress to a number 1 to 5, clamp it
    let inboxLineProgress = Math.ceil(scaledProgress * 5);
    inboxLineProgress = Math.min(Math.max(inboxLineProgress, 1), 5);

    // use converted number to add the class for each position
    inboxLine.classList.remove("inbox-line-1", "inbox-line-2", "inbox-line-3", "inbox-line-4", "inbox-line-5");
    inboxLine.classList.add(`inbox-line-${inboxLineProgress}`);

}

function handleSpeedAnimation() {

    let speedProgress = 0;

    // if we're focused on the right section, start calculating
    if (progress > 2) {
        // convert progress to a number 1 to 11, clamp it
        speedProgress = Math.ceil(scaledProgress * 11);
        // -1 so it can be used as an array index
        speedProgress = Math.min(Math.max(speedProgress, 1), 11) - 1;
    }

    console.log(speedProgress - 1);

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