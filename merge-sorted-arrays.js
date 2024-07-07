// Given two sorted arrays
// Merge the arrays and keep it sorted

// Less optimal solution
// Creates new array with all datasets which might be unnecessary
// .sort() time complexity is higher due to the fact that is has to iterate through all elements of the array
// O(n log n)
// const mergeSortedArrays = (arr1, arr2) => {
//   return [...arr1, ...arr2].sort((a, b) => a - b);
// };

// More optimal solution
// Taking advantage of the fact that the input arrays are already sorted
// Less demanding in time complexity, the function only runs for the amount of elements in both arrays
// O(n)
const mergeSortedArrays = (arr1, arr2) => {
  const mergedArrays = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      mergedArrays.push(arr1[i]);
      i++;
    } else {
      mergedArrays.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArrays.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArrays.push(arr2[j]);
    j++;
  }

  return mergedArrays;
};

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
