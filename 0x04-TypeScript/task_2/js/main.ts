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


// createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number") {
    if (salary < 500) {
      return new Teacher();
    }
  }
  return new Director();
}


// Type predicate to check if employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
    return employee instanceof Director;
}


//excutework function
function executeWork(employee: Director | Teacher): string {
    if  (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();

    }
}


// Define the string literal
type Subjects = "Math" | "History";

// Function that takes the subject and returns the correct string
export function teachClass(todayClass:Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math'
  } else if (todayClass === 'History') {
    return 'Teaching History'
  }
}


// Example usage
console.log(teachClass("Math"));     // Teaching Math
console.log(teachClass("History"));  // Teaching 





// Example usage
console.log(executeWork(createEmployee(200)));   // Getting to work
console.log(executeWork(createEmployee(1000))); // Getting to director tasks



//Example Usage
console.log(createEmployee(200));   // Teacher {}
console.log(createEmployee(1000));  // Director {}
console.log(createEmployee("$500")); // Director {}
