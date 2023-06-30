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
        updateSelectionButton(selectedSvg, selectedPriorityTxt);
    }
    
    function getSelectedSVG(option) {
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

function showInitialProjectBtn (){
    console.log("Hello from show init project btn")
    document.querySelector(".project.selection-btn").innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="project-bullet-icon" viewBox="0 0 16 16">
    <circle cx="8" cy="8" r="8"/>
    </svg>
    <span class="select-project-txt">Project</span>`
};


export { projectDropDownBindEvents, insertProjectsToDropDown, setProjectSelection, showInitialProjectBtn }