/**
 * Big O Notation
 * O(1) - Constant time
 * O(n) - Linear time
 * O(n^2) - Quadratic time
 * O(log n) - Logarithmic time
 * O(n log n) - Linearithmic time
 * O(n^3) - Cubic time
 * O(2^n) - Exponential time
 */

// const arr1 = ["nemo"];
// const arr2 = [
//   "larry",
//   "hank",
//   "curly",
//   "moe",
//   "nemo",
//   "shemp",
//   "larry",
//   "hank",
//   "curly",
//   "moe",
// ];
// const arr3 = [
//   "larry",
//   "hank",
//   "curly",
//   "moe",
//   "shemp",
//   "larry",
//   "hank",
//   "curly",
//   "moe",
//   "shemp",
//   "larry",
//   "hank",
//   "curly",
//   "moe",
//   "shemp",
//   "larry",
//   "hank",
//   "curly",
//   "moe",
//   "shemp",
//   "larry",
//   "hank",
//   "curly",
//   "moe",
//   "shemp",
//   "larry",
//   "hank",
//   "curly",
//   "moe",
//   "shemp",
//   "larry",
//   "hank",
//   "curly",
//   "moe",
//   "shemp",
//   "larry",
//   "hank",
//   "curly",
//   "moe",
//   "shemp",
//   "larry",
//   "hank",
//   "curly",
//   "moe",
//   "moe",
//   "nemo",
//   "shemp",
//   "shemp",
//   "shemp",
//   "shemp",
// ];
//
// console.log(arr3.length);
//
// // O(n) -- Linear Time -- The amount of operations is proportional to the size of the input
// const findNemo = (arr) => {
//   const start = performance.now();
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === "nemo") {
//       console.log("Found Nemo!");
//     }
//   }
//   const end = performance.now();
//   console.log(`Time taken #1: ${end - start} milliseconds`);
// };
//
// const findNemo2 = (arr) => {
//   const start = performance.now();
//   arr.forEach((fish) => {
//     if (fish === "nemo") {
//       console.log("Found Nemo!");
//     }
//   });
//   const end = performance.now();
//   console.log(`Time taken #2: ${end - start} milliseconds`);
// };
//
// const findNemo3 = (arr) => {
//   const start = performance.now();
//   for (let fish of arr) {
//     if (fish === "nemo") {
//       console.log("Found Nemo!");
//     }
//   }
//   const end = performance.now();
//   console.log(`Time taken #3: ${end - start} milliseconds`);
// };
//
// findNemo(arr3);
// findNemo2(arr3);
// findNemo3(arr3);

// // O(n^2) -- Quadratic Time -- The amount of operations is proportional to the square of the size of the input
// const compressBoxesTwice = (boxes) => {
//   boxes.forEach((boxes) => {
//     boxes.forEach((box) => {
//       console.log(box);
//     });
//   });
// };
//
// compressBoxesTwice([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [10, 11, 12, 13, 14, 15],
// ]);
