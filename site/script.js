// script.js
import { DotLottie } from 'https://esm.sh/@lottiefiles/dotlottie-web@0.37.0';

const dotLottie = new DotLottie({
    autoplay: true,
    loop: true,
    canvas: document.querySelector('#display-canvas'), // Targets the canvas element
    src: "https://lottie.host/ea94c1e3-5cea-4846-81ff-395a2d016287/DjCvZcleUA.lottie",
});

const button = document.getElementById('crazy-potato');

const themes = ["day", "sunset", "night", "midnight", "winter"];
let currentThemeIndex = 1;

button.addEventListener('click', () => {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    const newTheme = themes[currentThemeIndex];
    dotLottie.setTheme(newTheme);

    console.log(`Theme set to: ${newTheme}`);
});
