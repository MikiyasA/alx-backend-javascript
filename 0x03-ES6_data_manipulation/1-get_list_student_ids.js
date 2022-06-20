export default function getListStudentIds(array) {
  if (Array.isArray(array)) {
    const mArray = array.map((a) => (a.id));
    return mArray;
  }
  const mArray = [];
  return mArray;
}
