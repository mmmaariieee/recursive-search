function recursiveSearch(arr, target) {

  // if array is empty, return false
  if (arr.length === 0) {
    return false;
  }

  // if element equal target, return true
  if (arr[0] === target) {
    return true;
  }

  // call recursive function
  return recursiveSearch(arr.slice(1), target);

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));
}

module.exports = recursiveSearch;

// Please add your pseudocode to this file
// And a written explanation of your solution
