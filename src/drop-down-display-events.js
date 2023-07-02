function bindDropDownClickEvent (element, parentElement, callback){
    document.querySelector(parentElement).addEventListener("click", ()=>{
        callback(element);
    });
};

function dropDownClickAwayEvent (element, parentElement, callback){
    document.addEventListener('click', (e) => {
        if (!document.querySelector(parentElement).contains(e.target)){
            callback(element);
        }; 
    });
};


export { bindDropDownClickEvent, dropDownClickAwayEvent }