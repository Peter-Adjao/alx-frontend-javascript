 interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any    // extra property
};

// step2: create some teachers
const teacher1: Teacher = {
    firstName: "Mary",
    lastName: "Smith",
    fullTimeEmployee: true,
    location: "Accra"
};

const teacher2: Teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: false,
    location: "London",
    contract: false
};


interface Director extends Teacher {
    numberOfReports: number;
} 

const director1: Director = {
    firstName: "John",
    lastName: "Doe",
    location: "London",
    fullTimeEmployee: true,
    numberOfReports: 17,
}


interface Name {
    firstName: string;
    lastName: string
}

//Define the interface
interface printTeacherFunction {
    (name: Name): string;
}

// Implement the function using the interface

function printTeacher({ firstName, lastName }: Name): string {
    return `${firstName}. ${lastName}`;
};

//Interface for constructor
interface StuentConstructor {
    new (firstName: string, lastName: string): StudentClassInterface; 
} 

//interface for the class
interface StudentClassInterface {
    workOnHomeWork(): string;
    displayName(): string;
}

//class implementation
class StudentClass implements StudentClassInterface {
    private firstName: string;
    private lastName: string;


    constructor(firstName: string, lastName: string) {
        this.firstName;
        this.lastName;
    }

    workOnHomeWork(): string {
        return "currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

//Usage
const student = new StudentClass("John", "Doe");
console.log(student.displayName());  //John
console.log(student.workOnHomeWork());   // Currently working



console.log(printTeacher({ firstName: "John", lastName: "Doe" } )); //output: J.Doe

console.log(director1);

//step 3: print teacher2
console.log(teacher2);
