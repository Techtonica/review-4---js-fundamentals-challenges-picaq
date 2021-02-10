// 1. Create an array of numbers, (ex: [1, 2, 3])
// 2. Without using any math operators, write 5 statements:
//   - Return the first item in the array (ex: 1)
//   - Return the last item in the array (ex: 3)
//   - Add a new item to the end of the array (ex: [1,2,3,4])
//   - Add an array to the beginning of the array. (ex: [["a","b","c"],1,2,3,4])
//   - Return the first item from the first item in the array. (ex: "a")

let numArr = [1, 2, 3, 4, 5, 6];
console.log({numArr});
let first = numArr[0];
console.log({first});
let last = numArr[5];
console.log({last});
numArr.push("new item");
console.log("push new item to end", numArr);
numArr.unshift(["a", "b", "c", "d", "e", "f"]);
console.log("add array to beginning", numArr);
let firstFirst = numArr[0][0];
console.log({firstFirst});



