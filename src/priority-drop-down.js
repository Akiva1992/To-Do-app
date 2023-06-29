import { bindClickEvent, clickAwayEvent } from "./drop-down-display-events";
import { toggleDropDown, hideDropDown } from "./drop-down-display-functions";


function priorityDropDownBindEvents(){
    const dropDownContainer = ".priority-container";
    const dropDownElement = "#priority-drop-down";
    bindClickEvent(dropDownElement, dropDownContainer, toggleDropDown);
    clickAwayEvent(dropDownElement, dropDownContainer, hideDropDown)
};

function setPrioritySelection(){
    function bindSelectionEvent() {
        Array.from(document.querySelectorAll(".priority-option")).forEach(option => {
          option.addEventListener("click", handleSelection);
        });
    }
      
    function handleSelection(event) {
    const selectedSvg = getSelectedSVG(event.currentTarget);
    const selectedPriorityTxt = getSelectedPriorityText(event.currentTarget);
    console.log(selectedSvg);
    updateSelectionButton(selectedSvg, selectedPriorityTxt);
    }
    
    function getSelectedSVG(option) {
    return option.querySelector(".priority-flag").outerHTML;
    }
    
    function getSelectedPriorityText(option) {
    return option.querySelector(".priority-txt").outerHTML;
    }
    
    function updateSelectionButton(svg, priorityTxt) {
    document.querySelector(".priority.selection-btn").innerHTML = svg + priorityTxt;
    }

    bindSelectionEvent();
      
};

export { priorityDropDownBindEvents, setPrioritySelection }

