const darkModeSVG = document.getElementById('titleId').children[1].children[0];
const lightModeSVG = document.getElementById('titleId').children[1].children[1];
const imgBG = document.getElementById('bgImage');
const body = document.body;
const placeholderBG = document.getElementById('inputValueId');
const belowOptionsBG = document.getElementById('toDoThingsId');


function togglesForDarkMode() {
  imgBG.classList.toggle('bg-img-dark-mode');
  body.classList.toggle('body-dark-mode');
  placeholderBG.classList.toggle('inputBG-dark-mode');
  belowOptionsBG.classList.toggle('items-dark-mode');
}

//dark mode
darkModeSVG.addEventListener('click', () => {
    togglesForDarkMode();
    darkModeSVG.style.display = "none";
    lightModeSVG.style.display = "flex";
});

//light mode 
lightModeSVG.addEventListener('click', () => {
    togglesForDarkMode();
    darkModeSVG.style.display = "flex";
    lightModeSVG.style.display = "none";
});




