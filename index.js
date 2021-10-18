// input field for items 
const newValue = document.getElementById('inputValueId');

// the whole functionn after hit enter with it's functions
newValue.addEventListener("keyup", function(event) {
  if (event.keyCode == 13) {
    event.preventDefault();
    //console.log("The input value is: " + newValue.value);

    if (newValue.value === "") {
      alert("Please, add something to list!");
    } else {
      let liSection = document.getElementById('toDoThingsId');
      // create the new element
      let liDiv = document.createElement('div');
      liSection.append(liDiv);
      liDiv.classList.add('liDivClass');
      // the new element:
      liDiv.innerHTML = `
      <div class="check-svg-div"></div>
          <label class="checkbox-container">
            <input type="checkbox">
            <span class="checkmark"></span>
          </label>
      </div>
      <p>${newValue.value}</p>
      <div class="cross-svg-div">
        <svg class="cross-svg" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
      </div>
        `;


      // after enter keypress, empties the input field     
      newValue.value = "";


      // take list before eachother
      var newRow = liSection.insertBefore(liDiv, liSection.childNodes[0]);


      //cross SVG click - delete function
      const svgCrossDiv = liDiv.children[3];
      svgCrossDiv.addEventListener('click', () => {
        svgCrossDiv.parentNode.remove();
        // this function is below
        showLeftItemsNumber();
      });


      // show Left Items below
      const showLeftItems = document.getElementById('showLeftItemsBtn');

      function showLeftItemsNumber() {
        var divesLength = liSection.childElementCount - 1; // -1 because options div below not relevant
        //console.log("the items number is: " + divesLength);
        if (divesLength < 2) {
          showLeftItems.innerHTML = divesLength + " item";
        } else {
          showLeftItems.innerHTML = divesLength + " items";
        }
      }
      // ALWAYS show Left Items 
      showLeftItemsNumber();


      // buttons below and their functions
      const allBtn = document.getElementById('allBtn');
      const activeBtn = document.getElementById('activeBtn');
      const completedBtn = document.getElementById('completedBtn');
      const clearCompletedBtn = document.getElementById('clearCompletedBtn');

      const mobileAllBtn = document.getElementById('mobileAllBtn');
      const mobileActiveBtn = document.getElementById('mobileActiveBtn');
      const mobileCompletedBtn = document.getElementById('mobileCompletedBtn');

      let checkboxInLiDiv = liDiv.children[1];
      let theCheckbox = checkboxInLiDiv.children[0];

      function all() {
        liDiv.style.display = "flex";
      }

      function active() {
        if (theCheckbox.checked) {
          liDiv.style.display = "none";
        }
        if (!theCheckbox.checked) {
          liDiv.style.display = "flex";
        }
      }

      function completed() {
        if (theCheckbox.checked) {
          liDiv.style.display = "flex";
        }
        if (!theCheckbox.checked) {
          liDiv.style.display = "none";
        }
      }

      function clearCompleted() {
        if (!theCheckbox.checked) {
          liDiv.style.display = "flex";
        }
        if (theCheckbox.checked) {
          liDiv.remove();
          showLeftItemsNumber();
        }
      }
      allBtn.addEventListener('click', all);
      activeBtn.addEventListener('click', active);
      completedBtn.addEventListener('click', completed);
      clearCompletedBtn.addEventListener('click', clearCompleted);

      mobileAllBtn.addEventListener('click', all);
      mobileActiveBtn.addEventListener('click', active);
      mobileCompletedBtn.addEventListener('click', completed);


      // closing the function:
    }
  }
});
