import { formatProjectHeaderDate } from "./format-project-header-date";

const placeHeaderFormattedDate = ()=>{
    document.querySelector(".current-project-header-date").textContent = formatProjectHeaderDate();
};


export { placeHeaderFormattedDate }