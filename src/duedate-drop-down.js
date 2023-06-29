import { format } from 'date-fns'


function getDatepickerInput (){
    const datepickerInputElement = document.querySelector(".datepicker-input");
    let datepickerInput;
    datepickerInputElement.addEventListener("change", ()=>{
        console.log(datepickerInputElement.value)
        const formattedDate = formatInputDate(datepickerInputElement.value);
        setSelectedDate(formattedDate);
    });
};

function setSelectedDate (input){
    document.querySelector(".due-date-txt").textContent = input;
};

function formatInputDate(input){
    return format(new Date (input), "iii dd MMM")
};

export { getDatepickerInput }