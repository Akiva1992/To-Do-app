import "./style.css";
import { drawerEventListener } from "./nav-drawer/nav-drawer";
import { placeHeaderFormattedDate } from "./nav-drawer/place-header-formatted-date";
import { placeDrawerFormattedDate } from "./nav-drawer/place-drawer-formatted-date";
import { callNewTaskFunctions } from "./new-task-dialog/new-task-main";
import { callNewProjectFunctions } from "./new-project-dialog/new-project-main";

drawerEventListener();
placeHeaderFormattedDate()
placeDrawerFormattedDate();
callNewTaskFunctions();
callNewProjectFunctions();

