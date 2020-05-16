// 10th sentence: union of two arrays

const unionOfArrays = (arr1, arr2) => {
  const union = [];

  for (const element of arr1) {
    union.push(element);
  }
  console.log(union);

  for (let i = 0; i < arr2.length; i++) {
    if (!union.includes(arr2[i])) {
      union.push(arr2[i]);
    }
  }
  return union;
};

const a0 = [1, 2, 3, 4, 5, 6];
const a1 = [2, 4, -6, 6, 7, 110, -1];
console.log(unionOfArrays(a0, a1));

// const unionOfArrays = (src1, src2) => {
//   const out = [];
//   for (const element of src1) { // Másolás tétel feltétel nélkül
//     out.push(element);
//   }
//   for (let i = 0; i < src2.length; i++) {
//     if (!out.includes(src2[i])) {
//       out.push(src2[i]);
//     }
//   }
//   return out;
// };

// console.log('Union', union([1, 2, 3, 4, 5, 6], [7, 8, 1, 2, 5]));
