//1.
function getDirectiion(times, direction) {
  let result = "";
  for (let index = 0; index < times; index++) {
    result += "-";
  }
  if (direction === true) {
    result += ">";
  } else if (direction === false) {
    result.slice(0, 0, "<");
  }
}
//2.

//3.
function triangle(num) {
  for (let i = 0; i < num; i++) {
    let line = "";
    for (let j = 0; j <= num; j++) {
      if (j <= i) {
        line += "*";
      }
    }
    console.log(line);
  }
}
triangle(4);
//4.
function reversed_triangle(num) {
  for (let i = num - 1; i >= 0; i--) {
    let line = "";
    for (let j = 0; j <= num; j++) {
      if (j <= i) {
        line += "*";
      }
    }
    console.log(line);
  }
}
reversed_triangle(4);
//5.
function multi_table(num) {
  for (let index = 1; index <= num; index++) {
    console.log(num + " * " + index + " = " + num * index);
  }
}
multi_table(10);
//6.
function reverseNum(num) {
  let numStr = num.toString();
  let reversedStr = "";
  for (let i = numStr.length - 1; i >= 0; i--) {
    reversedStr += numStr[i];
  }
  return parseInt(reversedStr);
}
console.log(reverseNum(12345));
//7.
function checkSpaces(str) {
  let check = 0;
  if (str.length === 0) {
    return ""; //7.1
  }
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
    } else if (str[i] !== " ") {
      check++;
    }
  }
  if (check === 0) {
    return " "; //7.2
  } else {
    return str.trim(); //7.3
  }
}
console.log(checkSpaces(""));
//8.
const list1 = [1, 2, 3, 4];
const list2 = [5, 6, 7, 8];
const list3 = [];
function thirdList(params) {
  for (let i = 0; i < list1.length; i++) {
    let total2 = 0;
    let multy1 = 1;
    for (let j = 0; j < list1.length; j++) {
      if (i !== j) {
        multy1 *= list1[j];
      }
      total2 += list2[j];
      
    }
    list3.push( multy1 * total2)
  }
  console.log(list3); 
}
thirdList()