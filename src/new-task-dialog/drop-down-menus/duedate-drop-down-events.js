import { format } from 'date-fns'


function getDatepickerInput (){
    const datepickerInputElement = document.querySelector(".datepicker-input");
    datepickerInputElement.addEventListener("change", ()=>{
        console.log(datepickerInputElement.value)
        if (datepickerInputElement.value===""){
            showInitialDatePicker();
        }else{
            const formattedDate = formatInputDate(datepickerInputElement.value);
            setSelectedDate(formattedDate);
        }
    });
};

function setSelectedDate (input){
    document.querySelector(".due-date-txt").textContent = input;
};

function showInitialDatePicker(){
    console.log("hello from show init date")
    document.querySelector(".due-date-txt").textContent = "Due Date"
};

function formatInputDate(input){
    return format(new Date (input), "iii dd MMM")
};

export { getDatepickerInput, showInitialDatePicker }