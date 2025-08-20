// A type RowID is just a number
export  type RowID = number;

// An interface RowElement with required firstName, lastName and optional age
export interface RowElement {
    firstName: string;
    lastName: string;
    age?: number;
}