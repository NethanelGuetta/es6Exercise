//1.
function triangle(rows) {
  for (let i = 0; i < rows; i++) {
    var output = "";
    for (let j = 0; j < rows - i; j++) output += " ";
    for (let k = 0; k <= i; k++) output += "* ";
    console.log(output);
  }
}
triangle(5);
//2.
function fib(num) {
  if (num == 1) return 0;
  if (num == 2) return 1;
  let num1 = 0;
  let num2 = 1;
  let sum;
  let i = 2;
  while (i < num) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
    i += 1;
  }
  return num2;
}
console.log("Fibonacci(5): " + fib(5));
//3.
function mul(num1, num2) {
  let result = 0;
  let multriplier = 1;
  let check = 0;
  if (num1 === 0 || num2 === 0) {
    return result;
  }
  if (num1 < 0 && num2 > 0) {
    for (let index = 0; index < num2; index++) {
      result += num1;
    }
    return result;
  }
  if (num1 > 0 && num2 < 0) {
    for (let index = 0; index < num1; index++) {
      result += num2;
    }
    return result;
  }
  if (num1 < 0 && num2 < 0) {
    for (let index = 0; index < 0 - num2; index++) {
      result += num1;
    }
    return 0 - result;
  }
  if (num1 > 0 && num2 > 0)
    for (let index = 0; index < num2; index++) {
      result += num1;
    }
  return result;
}
console.log(mul(0, 10));
//4.
const arr = [
  [1, 2],
  [3, 4],
  [2, 6],
  [3, 7],
  [2, 7],
  [1, 10],
  [3, 3],
];
function earthquake() {
  const obj = {};
  for (let index = 0; index < arr.length; index++) {
    let key = arr[index][0];
    let value = arr[index][1];
    if (!obj[key]) {
      obj[key] = 0;
    }
    obj[key] += value;
  }
  console.log(obj);
}
earthquake();
//5.
function checkPrime(numArr) {
  let i,
    flag = true;
  for (let index = 0; index < numArr.length - 1; index++) {
    for (i = 2; i <= (numArr[index] - 1); i++) {
      if (numArr[index] % i == 0) {
        flag = false;
        break;
      }
    }
  }
  if (flag == true) console.log(numArr[index] + " is prime");
  else console.log(numArr[index] + " is not prime");
}
checkPrime([4,5]);

