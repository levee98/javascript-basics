// 6th sentence: copy items x 2 of an array into an another array

const copyItems = (arr1, arr2) => {
  for (let i = 0; i < arr2.length; i++) {
    arr1[i] = arr2[i] * 2;
  }
  return arr1;
};

const array1 = [];
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, -1];
console.log(copyItems(array1, array2));
