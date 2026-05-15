import {test,expect} from '@playwright/test';
import * as utils from '../utils';
import * as testData from './testdata/allTestData';
//import testData from './testdata/countOccurrenceOfElement.json';
//import testData1 from './testdata/removeDuplicates.json';


test('SeparateArrayOfStringANdNum',async()=>{
    var result=utils.separateArrayOfStringANdNumber("User@123");
    console.log(result);
});

//sum of array
test('sum of array',async()=>{
var result=utils.sumOfArray([10,20,60,1,9]);
console.log(result);
});
 
//product of array
test('product of array',async()=>{
var result=utils.productOfArray([1,3,8,5,9]);
console.log(result);
});
 
//reverse array
 test('reverse array without reverse method', async () => {
  var result = utils.reverseArray([10, 20, 30, 40, 50]);
  console.log(result);
});

//Remove duplicates 
test('Remove duplicates number',async()=>{
   for (const data of testData.removeDuplicates) { 
  var result=utils.removeDuplicates(data.nums);
  console.log(result);
   }
});


//count Occurrence Of Element
test('countOccurrenceOfElement',async()=>{
    for (const data of testData.countOccurrence) {
    var c=utils.countOccurrenceOfElement(data.n, data.target);
    console.log(c);
    }
});

//Sum of Array of Array
test('Sum of 2D Array',async()=>{
    var result=utils.sumOfArrayOfArray([[10,20,30,40],[50,40,60,70]]);
    console.log(result);

});

//Difference of Array
test('Difference of 2D Array',async()=>{
    var result=utils.differenceOfArrayOfArray([[10,20,30,40],[50,40,60,70]]);
    console.log(result);

});

//Sum of two Array
test('sum of two array',async()=>{
    var result=utils.sumOfTwoArrayOfArray([10,20,30,40],[50,40,60,70]);
    console.log(result);

});