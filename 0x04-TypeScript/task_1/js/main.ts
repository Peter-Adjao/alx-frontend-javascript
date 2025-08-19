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


interface Directors extends Teacher {
    numberOfReports: number;
} 

const director1: Directors = {
    firstName: "John",
    lastName: "Doe",
    location: "London",
    fullTimeEmployee: true,
    numberOfReports: 17,
}

console.log(director1);

//step 3: print teacher2
console.log(teacher2);
