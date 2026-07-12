export default function getIndexesWithNullValue(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Argument must be an array");
  }

  const indexes = arr.map((_, index) => index);
  const indexesWithNull = indexes.filter((index) => arr[index] === null);

  return indexesWithNull;
}
