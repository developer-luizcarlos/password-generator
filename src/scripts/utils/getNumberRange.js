export default function getNumberRange(to, from) {
  if (isNaN(to) || isNaN(from)) {
    throw new TypeError("Arguments must be numbers");
  }

  if (!Number.isInteger(to) || !Number.isInteger(from)) {
    throw new Error("Arguments must be integers");
  }

  if (to < 0 || from < 0) {
    throw new Error("Arguments must be positive numbers");
  }

  if (to === from) {
    return [to];
  }

  const range = [];

  if (to > from) {
    for (let i = to; i >= from; i--) {
      range.push(i);
    }
  } else {
    for (let i = to; i <= from; i++) {
      range.push(i);
    }
  }

  return range;
}
