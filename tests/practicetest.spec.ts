import {test,expect} from '@playwright/test';

//import { addTwoNumber,addNumbers, swapNumbers,swapTwoNumbersWithoutThirdVar,addTwoNumbersRoundoffTwoDecimalDigit } from '../utils';
import * as utils from '../utils';

test('addtwonumbers',async()=>{
    var result=utils.addTwoNumber(-45.5,-20.3);
    console.log(result);
});

test('addNumbers',async()=>{
 var r=utils.addNumbers(30,50);
 console.log(r);
});

test('swap two numbers',async()=>{
var result=utils.swapNumbers(30,40);
console.log(result);
});

test('swapWithoutthridNumber',async()=>{
    var result = utils.swapTwoNumbersWithoutThirdVar(10,20);
    console.log(result)
});

test('addTwoNumbersRoundoffTwoDecimalDigit',async()=>{
var digit=utils.addTwoNumbersRoundoffTwoDecimalDigit(30.4,50.3);
console.log(digit);
});
//convert number to string using tostring
test('convert number to string',async()=>{
    var num=utils.numberToString(20);
    console.log(num);
});  
//using String 
test('using string method',async()=>{
    var n=utils.usingStringMethod(30);
    console.log(n);
});
//Convert string to number
test('string to number',async()=>{
    var n=utils.stringToNumber("1234");
    console.log(n);
}); 
//conver string to integer Using Parse
test('convert string to number using parse',async()=>{
    var result=utils.usingParseMethod("781.67");
    console.log(result);
});
//convert string to float Using Parse
test('convert string to float using parse',async()=>{
    var result=utils.StringToFloat("781.67");
    console.log(result);
});
//getnumbers from string
test('getnumber',async()=>{
    var result=utils.getNumbers("typ$e11script456");
    console.log(result);
});

//substring
test('substring',async()=>{
    var result=utils.findSubstring("Mahalakshmi","lakshmi");
    console.log(result);
});

//Position
test('positon',async()=>{
    var result = utils.positionOfString("Mahalakshmi","lakshmi");
    console.log(result)

});

//count substring in a string
test('count substring',async()=>{
    var result=utils.countSubString("lakshmiMahalakshmiBhagyalakshmi","lakshmi");
    console.log(result);
});

// string Sorting  
test('Sorting the string',async()=>{
var result=utils.stringSorting(["lakshmi","bhavani","gayathri"]);
console.log(result);
});

//number sorting  
test('Sorting the number',async()=>{
    var result=utils.numberSorting([50,30,1,9,1.5]);
    console.log(result);
});

//fibonanci
test('fibonanci series',async() =>{
     var f=utils.fibonanci(10);
     console.log(f);
});

//Find the maximum number in an array
test('Maximum',async()=>{
    var result=utils.findMax([-10,250,40,2,65]);
    console.log(result);
});

//Find the minimum number in an array
test('Manimum',async()=>{
    var result=utils.findMin([100,250,40,2,65]);
    console.log(result);
});

//Ascending order
test('asc number',async()=>{
    var result=utils.ascNumberSorting([50,30,1,9,1.5]);
    console.log(result);
});

//Descending order
test('desc number',async()=>{
    var result=utils.descNumberSorting([50,30,1,9,1.5]);
    console.log(result);
});

//Reverse a string
test('reverse string',async()=>{
    let result=utils.reverseString("lakshmi");
    console.log(result);

});

//Palindrome or not 
test('palindrome',async()=>{
    var result=utils.stringPalindrome("madam");
    console.log(result);
});

test('GetnumberFromString',async()=>{
    var result = utils.getNumberFromString("user@123/*");
    console.log(result);
});

test('getTheAlphabetFromString',async()=>{
    var result = utils.getAlphabetsfromString("user@123/*");
    console.log(result);
});

test('splitStringIntoArray',async()=>{
   var result = utils.splitStringIntoArray("TypeScript");
    console.log(result); 
});
//Factorial of a Number
test('factorial of number',async() =>{
     var f=utils.factorial(5);
     console.log(f);
});

//Find the string with the smallest length
test('Find the string with the smallest length',async()=>{
 var result=utils.findMinString(["lakshmi","Bhavani","Mahalakshmi","hi"]);
 console.log(result);
});
 
//Find the string with the largest length
test('Find the string with the largest length',async()=>{
 var result=utils.findMaxString(["lakshmi","Bhavani","Mahalakshmi","hi"]);
 console.log(result);
});

