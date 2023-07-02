
function bindColorSelectionEvent(){
    document.querySelectorAll(".color-option").forEach(option =>{
        option.addEventListener("click", getSelectedColorAttr);
    });
};


function getSelectedColorAttr(e){
    const selectedColor = e.currentTarget.querySelector("svg").getAttribute("fill");
    const selectedColorTxt = e.currentTarget.querySelector(".project-color-txt").innerText;

    placeSelectedColor(selectedColor);
    placeSelectedColorTxt(selectedColorTxt);
};

function placeSelectedColor(selectedColor){
    document.querySelector(".new-project-color-selector-btn").setAttribute("fill", selectedColor)
};

function placeSelectedColorTxt(selectedColorTxt){
    document.querySelector(".new-project-color-selector-btn-txt").innerText = selectedColorTxt;
};


export { bindColorSelectionEvent, placeSelectedColor, placeSelectedColorTxt }