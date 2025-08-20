// reference path
import { RowElement, RowID } from "./interface";
import {insertRow, deleteRow, updateRow }from "./crud";

//Step 1: Create a row object
const row: RowElement = {
    firstName: "Guillanume",
    lastName: "Salva",
};

//Step 2: Insert row, return ID
const newRowID: RowID = insertRow(row);

//Step 3: Update the row with age
const updatedRow: RowElement = { ...row, age: 23};
updateRow(newRowID, updatedRow);

//Step 4:  Delete the row
deleteRow(newRowID);

