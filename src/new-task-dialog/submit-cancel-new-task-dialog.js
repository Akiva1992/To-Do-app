import { closeNewTaskDialog } from "./display-hide-new-task-dialog";


function newTaskFormSubmissionEvent (){
    document.querySelector("#new-task-form").addEventListener("submit", (e)=>{
        if (document.querySelector("#task-name").validity.valid){
            e.preventDefault();
            closeNewTaskDialog();
        }
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


function newTaskFormCancelEvent (){
    document.querySelector(".new-task-cancel-btn").addEventListener("click", ()=>{
        closeNewTaskDialog();
    });
};




export { newTaskFormSubmissionEvent, validateTaskNameInput, newTaskFormCancelEvent }