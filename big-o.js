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

const findNemo = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "nemo") {
      console.log("Found Nemo!");
    }
  }
};

findNemo(["nemo"]);
