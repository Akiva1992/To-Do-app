
function getTaskName (){
    return document.querySelector("#task-name").value;
}

function getTaskDescription (){
    return document.querySelector("#task-description").value;
}

export { getTaskName, getTaskDescription }