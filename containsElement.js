// 4th sentence: do containing an Array a specially Element?
const containsElement = (num, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return true;
    }
  }
  return false;
};

console.log(containsElement(9, [1, 2, 3, 4, 5, 6, 7, 8]));
