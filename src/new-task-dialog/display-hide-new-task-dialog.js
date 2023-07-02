import { showInitialDatePicker } from "./drop-down-menus/duedate-drop-down-events";
import { showInitialProjectBtn } from "./drop-down-menus/project-drop-down-events";
import { showInitialPriorityBtn } from "./drop-down-menus/priority-drop-down-events";

function displayNewTaskDialog(){
    document.querySelector(".new-task-dialog").showModal();
};

function showNewTaskDialogEvent(){
    document.querySelector(".plus-btn.header.icon").addEventListener("click", displayNewTaskDialog);
    document.querySelector(".plus-btn.cta.icon").addEventListener("click", displayNewTaskDialog);
};

function closeNewTaskDialog (){
    document.querySelector("#task-name").value ="";
    document.querySelector("#task-description").value ="";
    showInitialDatePicker();
    showInitialProjectBtn();
    showInitialPriorityBtn();
    document.querySelector(".new-task-dialog").close();
};

export { showNewTaskDialogEvent, closeNewTaskDialog }