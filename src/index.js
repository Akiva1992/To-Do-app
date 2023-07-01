import "./style.css";
import { drawerEventListener } from "./nav-drawer/nav-drawer";
import { placeHeaderFormattedDate } from "./nav-drawer/place-header-formatted-date";
import { placeDrawerFormattedDate } from "./nav-drawer/place-drawer-formatted-date";
import { priorityDropDownBindEvents, setPrioritySelection } from "./new-task-dialog/drop-down-menus/priority-drop-down-events";
import { projectDropDownBindEvents, setProjectSelection } from "./new-task-dialog/drop-down-menus/project-drop-down-events";
import { getDatepickerInput } from "./new-task-dialog/drop-down-menus/duedate-drop-down-events";
import { formSubmissionEvent, validateTaskNameInput, formCancelEvent } from "./new-task-dialog/submit-cancel-new-task-dialog";
import { showDialogEvent } from "./new-task-dialog/display-hide-new-task-dialog";
import { insertProjectsToDropDown } from "./new-task-dialog/drop-down-menus/insert-projects-to-drop-down";

drawerEventListener();
placeHeaderFormattedDate()
placeDrawerFormattedDate();
priorityDropDownBindEvents();
setPrioritySelection();
projectDropDownBindEvents();
insertProjectsToDropDown();
setProjectSelection();
getDatepickerInput();
formSubmissionEvent(); 
validateTaskNameInput(); 
showDialogEvent();
formCancelEvent();

