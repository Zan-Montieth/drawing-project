function generateHexGrid(gridXdimension, gridYdimension) {
    const parentContainer = document.getElementById("drawingArea");
    let hexElement = document.createElement("div");
    hexElement.classList.add("hex");
    for (numberOfHexes = 0; numberOfHexes < (gridYdimension * gridXdimension - (gridYdimension/2)); numberOfHexes++) {
        parentContainer.appendChild(hexElement.cloneNode(true));
    }
}