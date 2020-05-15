// 9th: section of both arrays

const sectionOfBoth = (arr1, arr2) => {
  const partOfBoth = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        partOfBoth.push(arr1[i]);
      }
    }
  }
  return partOfBoth;
};

const a0 = [1, 2, 3, 4, 5, 6, 1, 7, 8, 9, 10];
const a1 = [2, 4, 6, 7, 10, 1];
console.log(sectionOfBoth(a0, a1));
