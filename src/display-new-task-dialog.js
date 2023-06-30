
function displayNewTaskDialog(){
    document.querySelector(".new-task-dialog").showModal();
};

function bindShowDialogEvent(){
    document.querySelector(".plus-btn").addEventListener("click", displayNewTaskDialog);
    document.querySelector(".plus-btn.cta.icon").addEventListener("click", displayNewTaskDialog);
};
export { bindShowDialogEvent }