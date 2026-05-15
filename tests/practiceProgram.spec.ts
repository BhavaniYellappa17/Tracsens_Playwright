import {test,expect} from '@playwright/test';
import * as utils from '../utils';

//sum of array 
test('sum of array',async()=>{
var r=utils.sumOfArrayElement([10,20],[50,40]);
console.log(r);
});

//sum of array of array 
test('sum of array of array',async()=>{
//var r=utils.addTwoArrays([200,3,5],[4,800,0]);
var r=utils.addTwoArrays([],[4,800,0]);
console.log(r);
});

//difference  of array of array 
test('difference of array of array',async()=>{
var r=utils.subOfTwoArray([-6,3],[-2,4]);
console.log(r);
});

//product of array element
test('product of array',async()=>{
var r=utils.productOfArrayElement([-1,4],[3,2]);
console.log(r);
});

//factorial of number
test('factorial of a number',async()=>{
var result=utils.factorialOfNumber(4);
console.log(result);
});

//fibonanci
test('fibonanci series',async()=>{
var fibo=utils.fibonancciseries(5);
console.log(fibo);
});

//maximum number of array
test('maximum number of array',async()=>{
var m=utils.findMaximumNumber([10,30,20,1,-3]);
console.log(m);
});
