import { bindColorSelectionEvent } from "./select-color-drop-down/place-color-selection";
import { colorSelectDropDownBindEvents } from "./select-color-drop-down/colorSelectDropDown"
import { newProjectFormCancelEvent, newProjectFormSubmissionEvent, validateProjectNameInput } from "./submit-cancel-new-project-dialog";
import { showNewProjectDialogBindEvent } from "./display-hide-new-project-dialog";

function callNewProjectFunctions(){
    bindColorSelectionEvent();
    colorSelectDropDownBindEvents();
    validateProjectNameInput();
    newProjectFormCancelEvent();
    newProjectFormSubmissionEvent();
    showNewProjectDialogBindEvent();
};


export { callNewProjectFunctions }