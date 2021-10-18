const darkModeSVG = document.getElementById('titleId').children[1].children[0];
const lightModeSVG = document.getElementById('titleId').children[1].children[1];
const imgBG = document.getElementById('bgImage');
const body = document.body;
const placeholderBG = document.getElementById('inputValueId');
const emptyCircleBG = document.getElementById('emptyCircle');
const belowOptionsBG = document.getElementById('toDoThingsId');
const mobileButtonsBelowBG = document.getElementById('optionsBelowDivId');

function togglesForDarkMode() {
  imgBG.classList.toggle('bg-img-dark-mode');
  body.classList.toggle('body-dark-mode');
  placeholderBG.classList.toggle('inputBG-dark-mode');
  emptyCircleBG.classList.toggle('empty-circle-dark-mode');
  belowOptionsBG.classList.toggle('items-dark-mode');
  mobileButtonsBelowBG.classList.toggle('mobile-options-dark-mode');
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




