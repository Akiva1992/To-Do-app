import { bindClickEvent, clickAwayEvent } from "./drop-down-display-events";
import { toggleDropDown, hideDropDown } from "./drop-down-display-functions";


function projectDropDownBindEvents(){
    const dropDownContainer = ".project-container";
    const dropDownElement = "#project-drop-down";
    bindClickEvent(dropDownElement, dropDownContainer, toggleDropDown);
    clickAwayEvent(dropDownElement, dropDownContainer, hideDropDown)
};


function insertProjectsToDropDown (){
    const projectDropDown = document.querySelector("#project-drop-down");
    const projects = document.querySelectorAll(".projects-item > div");
    projects.forEach(project =>{
        const div = document.createElement("div");
        div.classList.add("project-option","options");
        div.innerHTML= project.innerHTML;
        projectDropDown.append(div);
    });
}

function setProjectSelection(){
    function bindSelectionEvent() {
        Array.from(document.querySelectorAll(".project-option")).forEach(option => {
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
        console.log(option.querySelector(".bullet-icon").outerHTML)
    return option.querySelector(".bullet-icon").outerHTML;
    }
    
    function getSelectedPriorityText(option) {
    return option.querySelector(".projects-item-txt").outerHTML;
    }
    
    function updateSelectionButton(svg, priorityTxt) {
    document.querySelector(".project.selection-btn").innerHTML = svg + priorityTxt;
    }

    bindSelectionEvent();
};


export { projectDropDownBindEvents, insertProjectsToDropDown, setProjectSelection }