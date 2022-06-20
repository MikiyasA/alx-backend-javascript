export default function createInt8TypedArray(length, position, value) {
  if (position >= 0 && position < length) {
    const buffer = new ArrayBuffer(length);
    const view = new DataView(buffer, 0);
    view.setInt8(position, value);
    return view;
  }
  throw Error('Position outside range');
}