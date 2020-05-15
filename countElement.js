// Second sentence: countElement
const countElement = (arr, element) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      count++;
    }
  }
  return count;
};

console.log(countElement([1, 2, 3, 4, 5, 4, 6, 2, 4, 4, 3, 1], 4));
