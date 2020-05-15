// 7th sentence: is any elements of an array even?

const isEven = (arr) => {
  const even = [];
  for (element of arr) {
    if (element % 2 === 0) {
      even.push(element);
    }
  }
  return even;
};

const array = [1, 2, 3, 4, 5, 6, 7, -8, 9, 10];
console.log(isEven(array));
