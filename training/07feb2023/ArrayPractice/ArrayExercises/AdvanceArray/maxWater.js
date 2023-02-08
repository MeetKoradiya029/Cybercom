// let max = 0;
// for (let i = 0; i < height.length; i++) {
//     for (let j = i + 1; j < height.length; j++) {
//         if (height[i] > height[j]) {
//             value = height[j] * (j - i)
//             if (value > max) {
//                 max = value
//             }
//         } else {
//             value = height[i] * (j - i)
//             if (value > max) {
//                 max = value
//             }
//         }
//     }

// }

result = [];
height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

len = height.length

for (let i = 0; i < height.length; i++) {
  const value = height[i];

  const newArr = height.slice(i+1,len)

  for (let j = 0; j < newArr.length; j++) {
    const value1 = newArr[j];

    let width = Math.abs(j - i+2);
    let height = Math.min(value, value1);

    result.push(width * height);
  }
}

let maximum = result.reduce(function (a, b) {
  if (b > a) return b;
  return a;
});
console.log("OUTPUT : " + maximum);
