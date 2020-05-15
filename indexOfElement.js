// 5th sentence: search index Of Element if Array contains, in no, then return -1

const indexOfElement = (element, arr) => {
  let answer = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      answer = i;
    }
  }
  return answer;
};

console.log(indexOfElement(11, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
