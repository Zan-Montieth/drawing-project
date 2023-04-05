function generateHexGrid(gridXdimension, gridYdimension) {
    const parentContainer = document.getElementById("drawingArea");
    let hexElement = document.createElement("div");
    hexElement.classList.add("hex");
    for (
        numberOfHexes = 0;
        numberOfHexes < gridYdimension * gridXdimension - gridYdimension / 2;
        numberOfHexes++
    ) {
        parentContainer.appendChild(hexElement.cloneNode(true));
    }
    makeTheGridASquare(gridXdimension);
}

function makeTheGridASquare(hexRowLength) {
    const sizeContainer = document.getElementById("sizeConstraint");
    const hexElement = document.getElementsByClassName("hex")[0];
    let hexWidth = getComputedStyle(hexElement).getPropertyValue("width");
    hexWidth = hexWidth.substring(0, hexWidth.length - 2);
    let hexMargin = getComputedStyle(hexElement).getPropertyValue("margin-left");
    hexMargin = hexMargin.substring(0, hexMargin.length - 2);
    let newWidth = hexWidth * hexRowLength + hexMargin * 2 * hexRowLength;
    newWidth = newWidth + "px"
    sizeContainer.style.width = newWidth
}
