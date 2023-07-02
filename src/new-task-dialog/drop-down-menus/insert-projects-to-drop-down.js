
function insertProjectsToDropDown (){
    const projectDropDown = document.querySelector("#project-drop-down");
    const projects = document.querySelectorAll(".projects-item > div");
    projects.forEach(project =>{
        const div = document.createElement("div");
        div.classList.add("project-option","options");
        div.innerHTML = project.innerHTML;
        projectDropDown.append(div);
    });
};

export { insertProjectsToDropDown }