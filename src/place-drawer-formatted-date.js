import { formatDrawerCalendarDate } from "./format-drawer-calendar-date"

const placeDrawerFormattedDate = ()=>{
    document.querySelector(".calendar-dynamic-day").textContent = formatDrawerCalendarDate();
    console.log(formatDrawerCalendarDate())

};


export { placeDrawerFormattedDate }

