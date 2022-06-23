export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Mikiyas',
  lastName: 'Adere',
  age: 28,
  location: 'Addis Abeba',
};

const student2: Student = {
  firstName: 'Habtamu',
  lastName: 'KidaneMariyam',
  age: 55,
  location: 'Addis Abeba',
};

const studentsList: Array<Student> = [student1, student2];

function render(students: Array<Student>) {
  const table = document.createElement('TABLE');
  const thead = document.createElement('THEAD');
  const tr = document.createElement('TR');
  const tbody = document.createElement('TBODY');
  Object.keys(students[0]).forEach((s) => {
    const th = document.createElement('TH');
    th.innerText = s;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  students.forEach((student: Student) => {
    const tr = document.createElement('TR');
    Object.values(student).forEach((v) => {
      const td = document.createElement('TD');
      td.innerText = v.toString();
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  document.querySelector('body').appendChild(table);  
}

render(studentsList);