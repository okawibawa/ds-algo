// // Arrays in JavaScript are dynamic
// // They expand, in terms of space, whenever we add things to it
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// // Getting an element from an array using index
// // This will be O(1) because we are only getting a single element based on its index
// console.log(arr[0]); // O(1)
//
// // Push
// // This is O(1) because we are only adding a single element to the end of the array
// console.log(arr.push(11)); // O(1)
//
// // Pop
// // This is O(1) because we are only removing a single element from the end of the array
// console.log(arr.pop()); // O(1)
//
// // Shift
// // This is O(n) becase were are removing the first element from the array,
// // which means the position of the rest of the elements in the array needs to be adjsuted
// console.log(arr.shift()); // O(n)
//
// // Unshift
// // This is O(n) because we are adding an element to the first index of the array,
// // which means the position of the rest of the elements in the array needs to be adjsuted
// console.log(arr.unshift(0)); // O(n)
//
// // Splice
// // This is could potentially be O(n/2) depending on the process, or simplified to only O(n)
// // The process of mutating the elements of the array could happend anywhere in the array
// // But with Big O, we are only calculating the worst case scenario
// console.log(arr.splice(2, 0, 8)); // O(n)

// Re-creating Array's basic functions
// By re-creating these basic functions, we can have a better understanding of how they work under the hood
// Which also gives us better judgment of their Big Os
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // O(1)
  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  // O(1)
  pop() {
    const lastItem = this.data[this.length - 1];

    delete this.data[this.length - 1];

    this.length--;

    return lastItem;
  }

  // O(n)
  shift() {
    const firstItem = this.data[0];

    delete this.data[0];

    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];

    this.length--;

    return firstItem;
  }

  // O(n)
  unshift(...item) {
    for (let i = this.length - 1; i >= 0; i--) {
      this.data[item.length + i] = this.data[i];
    }

    for (let i = 0; i < item.length; i++) {
      this.data[i] = item[i];
      this.length++;
    }

    return this.length;
  }
}

const newArray = new MyArray();

newArray.push("Hello");
newArray.push("JS");
newArray.push("TS");
newArray.push("Python");

newArray.unshift("Go", "CPP", "Java");

console.log(newArray);
