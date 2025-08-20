//task_3/js/crud.d.ts

import { RowElement, RowID } from "./interface";

declare function insertRow(row: RowElement): RowID;
declare function deleteRow(rowId: RowID): void;
declare function updateRow(rowId: RowID, row: RowElement): RowElement;






export { insertRow, deleteRow, updateRow };

