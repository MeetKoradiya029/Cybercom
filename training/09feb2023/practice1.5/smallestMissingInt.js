var arr = [1, 2, 0];
var arr2 = [3, 4, -1, 1];
var arr3 = [7, 8, 9, 11, 12];

function smallestMissingPositiveNum(arr) {
  arr.sort();

  let ptr = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == ptr) ptr++;
  }
  return ptr;
}
console.log(smallestMissingPositiveNum(arr));
