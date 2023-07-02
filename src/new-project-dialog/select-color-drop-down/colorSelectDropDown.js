import { bindDropDownClickEvent, dropDownClickAwayEvent } from "../../drop-down-display-events";
import { toggleDropDown, hideDropDown } from "../../drop-down-display-functions";
import { placeSelectedColor, placeSelectedColorTxt } from "./place-color-selection";

function colorSelectDropDownBindEvents(){
    const dropDownContainer = ".new-project-selection-btn";
    const dropDownElement = "#project-color-select-drop-down";
    bindDropDownClickEvent(dropDownElement, dropDownContainer, toggleDropDown);
    dropDownClickAwayEvent(dropDownElement, dropDownContainer, hideDropDown)
};

function showInitialColorSelectBtn (){
    placeSelectedColor("#ee4f33ef");
    placeSelectedColorTxt("Default"); 
};

 
export { colorSelectDropDownBindEvents, showInitialColorSelectBtn }