import { priorityDropDownBindEvents, setPrioritySelection } from "./drop-down-menus/priority-drop-down-events";
import { projectDropDownBindEvents, setProjectSelection } from "./drop-down-menus/project-drop-down-events";
import { getDatepickerInput } from "./drop-down-menus/duedate-drop-down-events";
import { newTaskFormSubmissionEvent, validateTaskNameInput, newTaskFormCancelEvent } from "./submit-cancel-new-task-dialog";
import { showNewTaskDialogEvent } from "./display-hide-new-task-dialog";
import { insertProjectsToDropDown } from "./drop-down-menus/insert-projects-to-drop-down";





function callNewTaskFunctions(){
    priorityDropDownBindEvents();
    setPrioritySelection();
    projectDropDownBindEvents();
    insertProjectsToDropDown();
    setProjectSelection();
    getDatepickerInput();
    newTaskFormSubmissionEvent(); 
    validateTaskNameInput(); 
    showNewTaskDialogEvent();
    newTaskFormCancelEvent();
};

export { callNewTaskFunctions }