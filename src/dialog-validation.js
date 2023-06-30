import { showInitialDatePicker } from "./duedate-drop-down";
import { showInitialProjectBtn } from "./project-drop-down";
import { showInitialPriorityBtn } from "./priority-drop-down";

function formSubmissionEvent (){
    document.querySelector("#new-task-form").addEventListener("submit", (e)=>{
        if (document.querySelector("#task-name").validity.valid){
            e.preventDefault();
            closeDialog();
        }
    });
};

function formCancelEvent (){
    document.querySelector(".cancel-btn").addEventListener("click", ()=>{
        closeDialog();
    });
};

function validateTaskNameInput (){
    document.querySelector("#task-name").addEventListener("input", ()=>{
        if(document.querySelector("#task-name").validity.valid){
            document.querySelector(".add-task-btn").classList.add("valid");
        } else {
            document.querySelector(".add-task-btn").classList.remove("valid");
        }
    });
};


function closeDialog (){
    document.querySelector("#task-name").value =""; 
    showInitialDatePicker();
    showInitialProjectBtn();
    showInitialPriorityBtn();
    document.querySelector(".new-task-dialog").close();
};


export { formSubmissionEvent, validateTaskNameInput, formCancelEvent }