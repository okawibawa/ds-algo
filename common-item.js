/**
 * Common Item
 * Given two arrays, find the common item between them.
 * Returns true if a common item is found, otherwise false.
 * Example:
 *   arr1 = [1, 2, 3]
 *   arr2 = [5, 6, 7, 2, 3]
 *   commonItem(arr1, arr2) = 3
 */

// const commonItem = (arr1, arr2) => {
//   if (typeof arr1 !== "object" || typeof arr2 !== "object") return false;
//   if (arr1.length === 0 || arr2.length === 0) return false;
//
//   if (arr2.length < arr1.length) [arr1, arr2] = [arr2, arr1];
//
//   const arrSet = new Set(arr1);
//
//   return arr2.some((item) => arrSet.has(item));
// };
//
// console.log(commonItem([1, 2, 3], [5, 6, 7, 2, 3]));
