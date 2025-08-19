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

//step 3: print teacher2
console.log(teacher2);
