// Interfaces 
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeachertasks(): string
}

//Direct class
class Director {
    workFromHome(): string {;
        return "Working from home";
    }
    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}


//Teacher class
class Teacher {
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}


//Function to creaate employee
function createEmployee(salary: number | string): Director | Teacher  {
    if (typeof salary === "number" && salary < 500 ) {
        return new Teacher();
    }
    return new Director();
}


//Example Usage
console.log(createEmployee(200));   // Teacher {}
console.log(createEmployee(1000));  // Director {}
console.log(createEmployee("$500")); // Director {}
