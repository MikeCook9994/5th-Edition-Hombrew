const getStatTableColumn = () => {
    const table = document.createElement("table");
    const tableHeader = table.createTHead().insertRow();

    tableHeader.insertCell();
    tableHeader.insertCell();
    tableHeader.insertCell();
    tableHeader.insertCell();

    tableHeader.cells[2].textContent = "MOD";
    tableHeader.cells[3].textContent = "SAVE";

    const tableBody = table.createTBody();
    const stat1Row = tableBody.insertRow();
    stat1Row.insertCell();
    stat1Row.insertCell();
    stat1Row.insertCell();
    stat1Row.insertCell();

    stat1Row.cells[0].textContent = "Str";
    stat1Row.cells[1].textContent = "10";
    stat1Row.cells[2].textContent = "+0";
    stat1Row.cells[3].textContent = "+0";

    const stat2Row = tableBody.insertRow();
    stat2Row.insertCell();
    stat2Row.insertCell();
    stat2Row.insertCell();
    stat2Row.insertCell();

    stat2Row.cells[0].textContent = "Int";
    stat2Row.cells[1].textContent = "14";
    stat2Row.cells[2].textContent = "+2";
    stat2Row.cells[3].textContent = "+6";

    return table;
}

const div = document.createElement("div");
div.class
div.appendChild(getStatTableColumn());
div.appendChild(getStatTableColumn());
div.appendChild(getStatTableColumn());