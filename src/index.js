import "./style.css";
import { drawerEventListener } from "./nav-drawer";
import { placeHeaderFormattedDate } from "./place-header-formatted-date";
import { placeDrawerFormattedDate } from "./place-drawer-formatted-date";
import { priorityDropDownBindEvents, setPrioritySelection } from "./priority-drop-down";
import { projectDropDownBindEvents, insertProjectsToDropDown, setProjectSelection, showInitialProjectBtn } from "./project-drop-down";
import { getDatepickerInput } from "./duedate-drop-down";
import { formSubmissionEvent, validateTaskNameInput, formCancelEvent } from "./dialog-validation";
import { bindShowDialogEvent } from "./display-new-task-dialog";

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
bindShowDialogEvent();
formCancelEvent();
// togglePriorityMenu();

