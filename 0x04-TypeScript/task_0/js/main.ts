   interface Student {
    firstName: string;
    lastName: string;
    location: string;
    age: number;
}
// Step 1 Define two students

const student1: Student = {
    firstName: "Kojo",
    location: "Ghana",
    lastName: "",
    age: 0
};
const student2: Student = {
    firstName: "Ama",
    location: "Ghana",
    lastName: "",
    age: 0
};

//step 2 create an array with two students
const studentsList: Student[] =[student1, student2];

//Step 3: Create the table element
const table = document.createElement("table");
table.border = "1"; //Adds border for visibility

// Add header row
const header: HTMLTableRowElement = document.createElement("tr");

const headerName:  HTMLTableCellElement = document.createElement("th");
headerName.textContent = "FirstName";
header.appendChild(headerName);

// step 4 Loop through studentList and add rows
studentsList.forEach(Student =>{
    const row = document.createElement("tr");

    //First name cell
    const nameCell = document.createElement("td");
    nameCell.textContent = Student.firstName;
    row.appendChild(nameCell);

    //loction cell;
    const locationCell = document.createElement("td");
    locationCell.textContent = Student.location;
    row.appendChild(locationCell);

    // Add row to the table
    table.appendChild(row); 
});

document.body.appendChild(table);
