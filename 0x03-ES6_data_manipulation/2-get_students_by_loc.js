export default function getStudentsByLocation(students, city) {
  return students.filter((stu) => stu.location === city);
}
