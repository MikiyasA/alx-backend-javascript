interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [objAttr: string]: any; 
}

// for task 2

interface Directors extends Teacher {
  numberOfReports: number;	  
}

// for task 3

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
  
}

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`; 
}

// for task 4

interface StuClsInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
