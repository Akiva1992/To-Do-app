import { showInitialDatePicker } from "./duedate-drop-down";
import { showInitialProjectBtn } from "./project-drop-down";
import { showInitialPriorityBtn } from "./priority-drop-down";

function displayNewTaskDialog(){
    document.querySelector(".new-task-dialog").showModal();
};

function showDialogEvent(){
    document.querySelector(".plus-btn").addEventListener("click", displayNewTaskDialog);
    document.querySelector(".plus-btn.cta.icon").addEventListener("click", displayNewTaskDialog);
};

function closeDialog (){
    document.querySelector("#task-name").value ="";
    document.querySelector("#task-description").value ="";
    showInitialDatePicker();
    document.querySelector(".new-task-dialog").close();
    showInitialProjectBtn();
    showInitialPriorityBtn();
};

export { showDialogEvent, closeDialog }