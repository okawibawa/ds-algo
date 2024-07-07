/**
 * Measure the time it takes to find a target element in an array
 * and a set.
 *
 * Generally, set with has() is faster.
 * Array with includes() potentionally has to iterate over the whole array.
 * While set with has() can use a hash table lookup.
 */

const measureTime = (fn) => {
  const start = performance.now();
  fn();
  return performance.now() - start;
};

const sizes = [10, 100, 1000, 10000, 100000, 1000000, 10000000];

sizes.forEach((size) => {
  const arr = Array.from({ length: size }, (_, i) => i);
  const set = new Set(arr);
  const target = size - 1;

  const arrayTime = measureTime(() => arr.includes(target));
  const setTime = measureTime(() => set.has(target));

  console.log(`Size: ${size}, array: ${arrayTime}, set: ${setTime}`);
});
