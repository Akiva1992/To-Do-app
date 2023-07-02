
function getTaskName (){
    return document.querySelector("#task-name").innerText;
};

function getTaskDescription (){
    return document.querySelector("#task-description").innerText;
};

function getInputtedDate (){
    return document.querySelector(".due-date-txt").innerText;
};

function getInputtedProject(){
    return document.querySelector(".projects-item-txt").innerText;
};

function getInputtedPriority(){
    return document.querySelector(".due-date-txt").innerText;
};



export { getTaskName, getTaskDescription }