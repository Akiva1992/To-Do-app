import { showInitialColorSelectBtn } from "./select-color-drop-down/colorSelectDropDown";


function displayNewProjectDialog(){
    document.querySelector(".new-project-dialog").showModal();
};

function showNewProjectDialogBindEvent(){
    document.querySelector(".plus-btn.projects.icon").addEventListener("click", displayNewProjectDialog);
};

function closeNewProjectDialog (){
    document.querySelector("#project-name-input").value ="";
    showInitialColorSelectBtn();
    document.querySelector(".new-project-dialog").close();
};


export { showNewProjectDialogBindEvent, closeNewProjectDialog }