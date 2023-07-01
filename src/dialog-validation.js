import { closeDialog } from "./display-hide-new-task-dialog";


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





export { formSubmissionEvent, validateTaskNameInput, formCancelEvent }