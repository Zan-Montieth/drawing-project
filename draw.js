let hexList = [];

function generateHexGrid(gridXdimension, gridYdimension) {
    const gridSize = gridYdimension * gridXdimension - gridYdimension / 2
    const parentContainer = document.getElementById("drawingArea");
    let hexElement = document.createElement("div");
    hexElement.classList.add("hex", "bw-bg-1");
    for (
        numberOfHexes = 0;
        numberOfHexes < gridSize;
        numberOfHexes++
    ) {
        let newHex = hexElement.cloneNode(true);
        newHex.addEventListener("mouseenter", incrementColor);
        parentContainer.appendChild(newHex);
    }
    makeTheGridASquare(gridXdimension);
}

function makeTheGridASquare(hexRowLength) {
    const sizeContainer = document.getElementById("sizeConstraint");
    const hexElement = document.getElementsByClassName("hex")[0];
    let hexWidth = getComputedStyle(hexElement).getPropertyValue("width");
    hexWidth = hexWidth.substring(0, hexWidth.length - 2);
    let hexMargin =
        getComputedStyle(hexElement).getPropertyValue("margin-left");
    hexMargin = hexMargin.substring(0, hexMargin.length - 2);
    let newWidth = hexWidth * hexRowLength + hexMargin * 2 * hexRowLength;
    newWidth = newWidth + "px";
    sizeContainer.style.width = newWidth;
}

function incrementColor() {
    let oldClass = this.classList[1];
    let classTag = this.classList[1].split("", 6);
    let classIndex = ""
    let newClass =""
    if(oldClass.length == 7){
        classIndex = this.classList[1].charAt(6);
    }else if(oldClass.length == 8){
        classIndex = this.classList[1].slice(-2)
    }
    if (classIndex < 4) {
        newClass = (classTag + (+classIndex + 1))
            .toString()
            .replaceAll(",", "");
        this.classList.remove(oldClass);
        this.classList.add(newClass);
    } else {
        return;
    }
}
