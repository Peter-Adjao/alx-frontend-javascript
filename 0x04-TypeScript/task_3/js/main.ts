// reference path
import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

//Step 1: Create a row object
const row: RowElement = {
    firstName: "Guillanume",
    lastName: "Salva",
};

//Step 2: Insert row, return ID
const newRowID: RowID = CRUD.insertRow(row);

//Step 3: Update the row with age
const updatedRow: RowElement = { ...row, age: 23};
CRUD.updateRow(newRowID, updatedRow);

//Step 4:  Delete the row
CRUD.deleteRow(newRowID);
