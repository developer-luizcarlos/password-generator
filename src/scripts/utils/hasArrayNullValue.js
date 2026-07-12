export default function hasArrayNullValue(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Argument must be an array");
  }

  return arr.some((value) => value === null);
}
