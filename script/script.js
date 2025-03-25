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

    handleKeyboardAnimation();

    handleTextAnimation();



    handleDesignAnimation();

    handleSearchAnimation();
    
    handleUXAnimation()

    // ----------------------------------------------------------------------

    lastProgress = progress;
})

function handleInboxAnimation() {

    const inboxLine = document.querySelector(".inbox-1 .underline");

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

function handleKeyboardAnimation() {
    const shortcuts = document.querySelector(".shortcuts-bar");
    const keyb = document.querySelector(".keyboard");

    const keys = document.querySelectorAll(".key-special");
    const cmd = document.getElementById("key-cmd");
    const k = document.getElementById("key-k");
    const z = document.getElementById("key-z");
    const s = document.getElementById("key-s");
    const r = document.getElementById("key-r");
    const e = document.getElementById("key-e");
    const c = document.getElementById("key-c");
    const del = document.getElementById("key-del");
    // key-on

    let searchProgress = 0;
    let numSteps = 7;


    keys.forEach(key => {
        if (key.classList.contains("key-on")) {
            key.classList.remove("key-on");
        }
    });

    if (progress > 4) {
        keyProgress = Math.ceil(scaledProgress * numSteps);
        keyProgress = Math.min(Math.max(keyProgress, 1), numSteps) - 1;
        // console.log(keyProgress);

        if (keyProgress >= 0 && keyProgress < 1) {
            cmd.classList.add("key-on");
            k.classList.add("key-on");
            shortcuts.style.transform = `translateX(0rem)`;
        } else if (keyProgress >= 1 && keyProgress < 2) {
            cmd.classList.add("key-on");
            z.classList.add("key-on");
            shortcuts.style.transform = `translateX(0rem)`;
        } else if (keyProgress >= 2 && keyProgress < 3) {
            s.classList.add("key-on");
            shortcuts.style.transform = `translateX(-10rem)`;
        } else if (keyProgress >= 3 && keyProgress < 4) {
            r.classList.add("key-on");
            shortcuts.style.transform = `translateX(-10rem)`;
        } else if (keyProgress >= 4 && keyProgress < 5) {
            e.classList.add("key-on");
            shortcuts.style.transform = `translateX(-20rem)`;
        } else if (keyProgress >= 5 && keyProgress < 6) {
            c.classList.add("key-on");
            shortcuts.style.transform = `translateX(-20rem)`;
        } else if (keyProgress >= 6) {
            cmd.classList.add("key-on");
            del.classList.add("key-on");
        }
    }

    // keyboard movement
    keyb.classList.remove("keyb-1", "keyb-2", "keyb-3", "keyb-4", "keyb-5", "keyb-6", "keyb-7");
    keyb.classList.add(`keyb-${keyProgress + 1}`);
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
    let numSteps = 6;

    if (progress > 10) {
        searchProgress = Math.ceil(scaledProgress * numSteps);
        searchProgress = Math.min(Math.max(searchProgress, 1), numSteps) - 1;
        // console.log(searchProgress);

        if (searchProgress >= 1) {rect3.classList.add("move-rect3");}
        else {rect3.classList.remove("move-rect3");}

        if (searchProgress >= 2) {rect1.classList.add("move-rect1");}
        else {rect1.classList.remove("move-rect1");}

        if (searchProgress >= 3) {rect5.classList.add("move-rect5");}
        else {rect5.classList.remove("move-rect5");}

        if (searchProgress >= 4) {rect4.classList.add("move-rect4")}
        else {rect4.classList.remove("move-rect4");}

        if (searchProgress >= 5) {rect2.classList.add("move-rect2");}
        else {rect2.classList.remove("move-rect2");}
    }
}

function handleUXAnimation() {
    const checkboxes = document.querySelectorAll(".ux-checkbox");
    const uxText = document.querySelectorAll(".ux-text");
    const selectedOutput = document.querySelector(".ux-selection p");

    let circleProgress = 0;
    let numSteps = 5;

    uxText.forEach(text => {
        if (!text.classList.contains("selected")) {
            text.style.opacity = "50%";
        }
    });

    uxText[0].style.opacity = "100%";
    if (progress > 12) {
        uxProgress = Math.ceil(scaledProgress * numSteps);
        uxProgress = Math.min(Math.max(uxProgress, 1), numSteps) - 1;
        // console.log(uxProgress);

        if (uxText[uxProgress]) {
            uxText[uxProgress].style.opacity = "100%";
            uxText[uxProgress].classList.add("selected");
        }

        if (uxProgress >= 1) {toggleCheckboxes(1, true);}
        else {
            toggleCheckboxes(1, false);
            uxText[1].classList.remove("selected");
        }

        if (uxProgress >= 2) {toggleCheckboxes(2, true);}
        else {
            toggleCheckboxes(2, false);
            uxText[2].classList.remove("selected");
        }

        if (uxProgress >= 3) {toggleCheckboxes(3, true);}
        else {
            toggleCheckboxes(3, false);
            uxText[3].classList.remove("selected");
        }
    }

    // count selected texts

    let numSelected = 0;

    uxText.forEach(text => {
        if (text.classList.contains("selected")){
            numSelected += 1;
            console.log(numSelected);
        }

        if (numSelected < 1) {
            numSelected = 1;
        }
    });
    
    selectedOutput.innerHTML = `${numSelected} selected`;
}

function toggleCheckboxes(checkboxIndex, on) {
    const checkboxes = document.querySelectorAll(".ux-checkbox");

    if (checkboxes[checkboxIndex]) {
        if (on) {
            checkboxes[checkboxIndex].classList.remove("ux-checkbox-off");
            checkboxes[checkboxIndex].classList.add("ux-checkbox-on");
        } else {
            checkboxes[checkboxIndex].classList.remove("ux-checkbox-on");
            checkboxes[checkboxIndex].classList.add("ux-checkbox-off");
        }
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