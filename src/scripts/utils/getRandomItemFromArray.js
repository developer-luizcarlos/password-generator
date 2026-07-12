export default function getRandomItemFromArray(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Argument must be an array");
  }

  if (!arr.length) {
    throw new Error("Array must not be empty");
  }

  if (arr.length === 1) {
    return arr[0];
  }

  const lastIndex = arr.length - 1;

  // const randomIndex = Math.floor(Math.random() * lastIndex);
  const randomIndex = Math.floor(Math.random() * (lastIndex + 1));
  const randomItem = arr[randomIndex];

  // console.trace(randomIndex);

  return randomItem;
}
