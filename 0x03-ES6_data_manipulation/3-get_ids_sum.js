import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum(studentId) {
  const stuIdList = getListStudentIds(studentId);
  const sum = stuIdList.reduce((prev, curr) => prev + curr);
  return sum;
}
