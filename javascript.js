// input field for todos 
const newValue = document.getElementById('inputValueId');

// the whole fn after hit enter with list elem
newValue.addEventListener("keyup", function(event) {
if (event.keyCode === 13) {
event.preventDefault();
console.log("The input value is: " + newValue.value);

if(newValue.value === "") {
  alert("Please, add something to list!");
} else {
let liSection = document.getElementById('toDoThingsId');
// create the new element
let liDiv = document.createElement('div');
liSection.append(liDiv);
liDiv.classList.add('liDivClass');
// the new element:
liDiv.innerHTML = `
    <div class="check-svg-div">
      <svg class="check-svg" xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>
    </div>
    <p class="list-item-paragraph">${newValue.value}</p>
    <div class="cross-svg-div">
      <svg class="cross-svg" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
    </div>
      `;


// after enter keypress, empties the input field     
newValue.value = "";


// take list before eachother
var newRow = liSection.insertBefore(liDiv, liSection.childNodes[0]);


// check SVG click marking - change background - and text (paragraph) color
const svgCheckDiv = liDiv.children[0];
const listElParagraph = liDiv.children[1];

  svgCheckDiv.addEventListener('click', () => {
    svgCheckDiv.classList.toggle('check-svg-div-marking');
    listElParagraph.classList.toggle('crossed-paragraph'); // not crossed, the font-color will be gray with this class
  });

//cross SVG click - delete function
const svgCrossDiv = liDiv.children[2];
  svgCrossDiv.addEventListener('click', () => {
    svgCrossDiv.parentNode.remove();
    // this function is below
    showLeftItemsNumber();
  });



// options below Btn
const showLeftItems = document.getElementById('showLeftItemsBtn');
//const clearCompletedBtn = document.getElementById('clearCompletedBtn');   // change this to delete all btn:
const deleteAllBtn = document.getElementById('clearCompletedBtn'); // id is the same

// show Left Items 
function showLeftItemsNumber() {
  var divesLength = liSection.childElementCount -1; // -1 because options div below not relevant
  console.log("the items number is: " + divesLength);
  if(divesLength < 2) {
    showLeftItems.innerHTML = divesLength + " item";
  } else {
    showLeftItems.innerHTML = divesLength + " items";
  }
}
// ALWAYS show Left Items 
showLeftItemsNumber();

deleteAllBtn.addEventListener('click', () => {
    liDiv.remove();
    showLeftItems.innerHTML = "0 item";
});

//------------------------------ NOT FINISHED - TOP -------------------------------------
/*
const allBtn = document.getElementById('allBtn');
const activeBtn = document.getElementById('activeBtn');
const completedBtn = document.getElementById('completedBtn');

allBtn.addEventListener('click', () => {
  allBtn.innerHTML = "doens't work";
  liDiv.style.display = "flex";
});

activeBtn.addEventListener('click', () => {
  activeBtn.innerHTML = "doens't work";
});

completedBtn.addEventListener('click', () => {
  completedBtn.innerHTML = "doens't work";
});

clearCompletedBtn.addEventListener('click', () => {
  clearCompletedBtn.innerHTML = "doens't work";
});
*/
//--------------------------------NOT FINISHED - BOTTOM-------------------------------------

}
  // closing the function:
  }
});





































































