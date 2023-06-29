function bindClickEvent (element, parentElement, callback){
    document.querySelector(parentElement).addEventListener("click", ()=>{
        callback(element);
    });
};

function clickAwayEvent (element, parentElement, callback){
    document.addEventListener('click', (e) => {
        if (!document.querySelector(parentElement).contains(e.target)){
            callback(element);
        }; 
    });
};


export { bindClickEvent, clickAwayEvent }