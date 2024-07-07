// Create a function that returns a reversed a given string
// Input: "Hi, my name is Oka."
// Output: ".akO si eman ym, iH"

const reverseString = (str) => {
  if (!str || str.length < 2 || typeof str !== "string")
    return "Invalid string provided.";

  return str.split("").reduce((result, char) => {
    return char + result;
  }, "");
};

console.log(reverseString("Golang Golang Golang."));
