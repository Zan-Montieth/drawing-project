function generateHexGrid(gridXdimension, gridYdimension){
    const parentContainer = document.getElementById("drawingArea");
    let hexElement = document.createElement("div")
    hexElement.classList.add("hex");
    for(row = 0; row < gridYdimension; row++){
        for(hex = 0; hex < gridXdimension; hex++){
            parentContainer.appendChild(hexElement.cloneNode(true));
            console.log(hex, row)
        }
    }
}
