export function getRandomItemFromArray(array) {
  if (!Array.isArray(array)) {
    throw new TypeError("Expect an array as argument");
  }

  const randomIndex = Math.floor(Math.random() * array.length);
  const randomItem = array[randomIndex];

  return randomItem;
}
