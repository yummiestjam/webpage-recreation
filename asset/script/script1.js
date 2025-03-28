window.onload = function () {
    captureBackground();
};
window.onresize = function () {
    captureBackground();
};
function captureBackground() {
    const overlay = document.querySelector(".hero-modal");
    const { left, top, width, height } = overlay.getBoundingClientRect();
    const bgImage = new Image();
    bgImage.src = "asset/image/monet.jpeg";
    bgImage.onload = function () {
        const bgWidth = bgImage.width;
        const bgHeight = bgImage.height;
        const winWidth = document.body.clientWidth;
        const winHeight = document.body.clientHeight;
        const scaleX = bgWidth / winWidth;
        const scaleY = bgHeight / winHeight;
        const cropX = left * scaleX;
        const cropY = top * scaleY;
        const cropW = width * scaleX;
        const cropH = height * scaleY;
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.filter = "blur(8px)";
        ctx.drawImage(bgImage, cropX, cropY, cropW, cropH, 0, 0, width, height);
        ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
        ctx.fillRect(0, 0, width, height);
        const imgURL = canvas.toDataURL("image/png");
        overlay.style.backgroundImage = `url(${imgURL})`;
        overlay.style.backgroundSize = "cover";
        overlay.style.backgroundPosition = "center";
    };
}
const secDiv = document.querySelector(".sec");
const emailInput = document.querySelector(".email-input");
const subBtn = document.querySelector(".submit-button");
function hideSec() {
    secDiv.style.display = "none";
}
function showSec() {
    secDiv.style.display = "block";
}
emailInput.addEventListener("focus", hideSec);
subBtn.addEventListener("click", function (event) {
    event.preventDefault();
    hideSec();
});
document.addEventListener("click", function (event) {
    if (!emailInput.contains(event.target) && !subBtn.contains(event.target)) {
        showSec();
    }
});
subBtn.addEventListener("mouseenter", () => {
    emailInput.setAttribute("placeholder", "Enter your email...");
});
subBtn.addEventListener("mouseleave", () => {
    emailInput.setAttribute("placeholder", "Enter your email...                 Press Enter");
});
const errorMessage = document.getElementById("error-message");
const email = emailInput.value.trim();
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
subBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (!emailPattern.test(email)) {
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
        console.log("Valid email:", email);
    }
});

function updateMenuBackdropPosition() {
    const topBanner = document.querySelector(".top-banner");
    const menuBackdrop = document.querySelector("#mobile-marketing-menu .over");
    if (topBanner && menuBackdrop) {
        if (topBanner.style.display !== "none") {
            menuBackdrop.style.top = "40px"; 
        } else {
            menuBackdrop.style.top = "0px"; 
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const closeButton = document.querySelector(".close-button");
    const targetDiv = document.querySelector(".top-banner");
    if (closeButton && targetDiv) {
        closeButton.addEventListener("click", function () {
            targetDiv.style.display = "none";
            updateMenuBackdropPosition(); 
        });
    }
    updateMenuBackdropPosition(); 
});

function updateHeroSectionSize(p) {
    const heroSection = document.querySelector(".hero-section");
    const originalWidth = heroSection.offsetWidth;
    const originalHeight = heroSection.offsetHeight;
    let t = 3;
    if (p > t) {
        const k = p / t;
        const Q = 12;
        const newHeight = originalHeight + Q * k;
        heroSection.style.height = `${newHeight}px`;
        const newWidth = originalWidth * k * 0.9;
        const newHeightBackground = originalHeight + Q * k;
        heroSection.style.backgroundSize = `${newWidth}px ${newHeightBackground}px`;
        heroSection.style.backgroundPosition = "center center";
    } else {
        heroSection.style.height = "100vh";
        heroSection.style.backgroundSize = "cover";
    }
}
updateHeroSectionSize(1.75);
window.addEventListener("resize", () => {
    const scaling = window.devicePixelRatio || 1;
    updateHeroSectionSize(scaling);
});

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector("button[aria-label='mobile menu button']");
    const mobileMenu = document.getElementById("mobile-marketing-menu");
    const menuBackdrop = mobileMenu.querySelector(".over");
    menuButton.addEventListener("click", function () {
        const isOpen = mobileMenu.classList.contains("open");
        if (isOpen) {
            mobileMenu.classList.remove("open");
            menuBackdrop.classList.remove("open");
        } else {
            mobileMenu.classList.add("open");
            menuBackdrop.classList.add("open");
            updateMenuBackdropPosition(); 
        }
        toggleMenuIcon(menuButton, isOpen);
    });
    function toggleMenuIcon(button, isOpen) {
        const lines = button.querySelectorAll(".line");
        if (isOpen) {
            lines[0].style.transform = "rotate(0) translateY(0px)";
            lines[1].style.transform = "rotate(0) translateY(0px)";
        } else {
            lines[0].style.transform = "rotate(45deg) translateY(6px)";
            lines[1].style.transform = "rotate(-45deg) translateY(-6px)";
        }
    }
});