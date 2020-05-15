// third sentence: Min/Max Element of an Array
const min = (arr) => {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

console.log(min([1, 2, 3, 4, -1, -13, 5]));
