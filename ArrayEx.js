const nums = [1,2,3,4,5,6,7,8,9]

//1.a
const total1 = 0;
for (let index = 0; index < nums.length; index++) {
    total1 += array[index]; 
    return total1  
}

//1.b
const total2 = 0;
for (let index = 0; index < nums.length; index++) {
    total2 *= array[index];   
    return total2
}
//1.c
const total3 = 0;
for (let index = 0; index < nums.length; index++) {
    total3 += array[index]; 
    return total3 / nums.length 
}
//1.d
let first = nums[0];
let last = nums[-1];
nums[0] = last;
nums[-1] = first;
//1.e
const newArray = [];
for (let index = 0; index < nums.length; index++) {
    newArray.push(nums[index])
}
//1.f
const reversedArray = [];
for (let index = nums.length-1; nums >=0 ; index--) {
    newArray.push(nums[index]) 
}
//1.g
let maxNum = nums[0];
for (let index = 1; index < nums.length; index++) {
    if(nums[index]> maxNum)
    {maxNum = nums[index]} 
    return maxNum; 
}
//1.h
const evenArray = [];
for (let index = 0; index < nums.length; index++) {
    if ((nums[index] /2) ==0) 
    {
        evenArray.push(nums[index])
    }
    return evenArray
}
//2
const words = ["a", "b", "c"];
//2.a
let phrase = ""
for (let index = 0; index < words.length; index++) {
    if(index == 0)
    {phrase += words[index]}
    phrase += " ";
    phrase += words[index];
}
//2.b
for (let index = 0; index < words.length; index++) {
    if(index == 0)
        {phrase += words[index]}
        phrase += ",";
        phrase += words[index];
}
//2.c
let totalLength = 0;
for (let index = 0; index < words.length; index++) {
    totalLength += words[index].length;
}
//2.d
const upperCaseWords = [];
for (let index = 0; index < words.length; index++) {
    upperCaseWords.push(words[index].toUpperCase)
}
//2.e
const minSix = [];
for (let index = 0; index < words.length; index++) {
    if(words[index].length >= 6)
    {
        minSix.push(words[index])
    }
    
}
//2.f
let longest = words[0];
for (let index = 1; index < words.length; index++) {
    if (words[index] > longest) {
        longest = words[index]
    }
    
}
//2.g
let totalFour = 0;
for (let index = 0; index < words.length; index++) {
    if (words[index].length == 4) {
       totalFour ++;
    }
    return totalFour
    
}
//3
let t = 0;
let totals = 0;
const biggerthanfive = [];
const mat = [[2,3,4], [4,6,8], [10,13,15]];
for (let i = 0; i < mat.length; i++) {
    //3.a
    console.log(mat[i]);
    
    //3.b
    console.log(mat[i].length);
    //3.c
    t += mat[i].length
    for (let j = 0; j < i.length; j++) {
        //3.d
        console.log(mat[i][j]);
        //3.f
        totals += mat[i][j];
        //3.e
        if (mat[i][j] > 5) {
          biggerthanfive.push(mat[i][j])  
        }
    }
    //3.c
    console.log(t); 
    //3.e
    console.log(biggerthanfive);
    //3.f
    console.log(totals);

}
//4
for (let index = 1; index < 101; index++) {
    if (index % 3 ===0 ) {
        console.log("Fizz");
 
    }
    else if (i % 5 === 0) arr.push("Buzz") 
    console.log(index);
    
    
}