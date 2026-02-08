export function generateSequenceArray(from, to) {
  if (typeof from !== "number") {
    throw new TypeError(`Expect a number for "from" argument`);
  }

  if (typeof to !== "number") {
    throw new TypeError(`Expect a number for "to" argument`);
  }

  if (from >= to) {
    throw new Error(`"from" cannot be greater or equal to "to" argument`);
  }

  const sequence = new Array(to - from).fill(0).map((_, index) => {
    return from + index;
  });

  return sequence;
}
