export default function updateStudentGradeByCity(stuArray, city, newGrades) {
  return stuArray
    .filter((stu) => stu.location === city)
    .map((student) => {
      const gradeI = newGrades
        .filter((stu) => stu.studentId === student.id)
        .map((x) => x.grade)[0];
      const grade = gradeI || 'N/A';
      return { ...student, grade };
    });
}
