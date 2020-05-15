// 8th sentence: separate arrays

const separateArrays = (arr) => {
  const odd = [];
  for (element of arr) {
    if (element % 2 !== 0) {
      odd.push(element);
    }
  }
  return odd;
};

const array = [1, 2, 3, 4, 5, 6, 7, -8, 9, 10];
console.log(separateArrays(array));
