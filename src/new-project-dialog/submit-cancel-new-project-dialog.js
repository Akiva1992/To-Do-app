import { closeNewProjectDialog } from "./display-hide-new-project-dialog";


function newProjectFormSubmissionEvent (){
    document.querySelector("#new-project-form").addEventListener("submit", (e)=>{
        if (document.querySelector("#project-name").validity.valid){
            e.preventDefault();
            closeNewProjectDialog();
        }
    });
};


function validateProjectNameInput (){
    document.querySelector("#project-name-input").addEventListener("input", ()=>{
        if(document.querySelector("#project-name-input").validity.valid){
            document.querySelector(".add-project-btn").classList.add("valid");
        } else {
            document.querySelector(".add-project-btn").classList.remove("valid");
        }
    });
};


function newProjectFormCancelEvent (){
    document.querySelector(".new-project-cancel-btn").addEventListener("click", ()=>{
        document.querySelector(".add-project-btn").classList.remove("valid");
        closeNewProjectDialog();
    });
};

export { newProjectFormSubmissionEvent, validateProjectNameInput, newProjectFormCancelEvent }