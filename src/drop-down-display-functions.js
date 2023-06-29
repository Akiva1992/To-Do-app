
function toggleDropDown (element) {
    document.querySelector(element).classList.toggle("active");
};


function hideDropDown (element){
    document.querySelector(element).classList.remove("active");
};

export { toggleDropDown, hideDropDown }