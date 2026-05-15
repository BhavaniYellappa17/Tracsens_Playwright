import { test, expect } from '@playwright/test';
import * as utils from '../utils/commonstring';
//Add Two Numbers
test('Add two numbers', async () => {
    var result=utils.add(5,8);
    console.log(result);
});
//Subtraction of two numbers
test('subtract two numbers' ,async() =>{
    var sub=utils.subtract(9,6);
    console.log(sub);
})
//Multiplication of two numbers 
test ('multiple of two numbers',async() =>{
    var prod=utils.product(6,3);
    console.log(prod);
});
//Division
test('Division of two number',async() =>{
    var div=utils.division(8,4);
    console.log(div);
})
//check whether the number is even or odd
test('even or odd',async() =>{
    var r=utils.isevenorodd(9);
    console.log(r);

});
//Largest number
test('largest number',async() =>{
    var l=utils.largest(10,20,30);
    console.log(l);

});
//Firstnonrepeated and firstrepeated String array
test('Repeatedandnonrepeated',async() =>{
    var s=utils.getCharsArray("malayalam");
    console.log(s)
});
//firstnonrepeated and repeated character using string
test('firstrepeated and non repeated',async()=>{
     var r=utils.getCharsString("malayalam");
     console.log(r);
});


//Count vowels in a string
test("Vowels in a string",async() =>{
  var v=utils.vowelstring("typescript");
  console.log(v);

})
//Count Uppercase and lowercase letter in  a given string 
test("upper and lowercase character",async()=>{
    var result=utils.upperandlowercase("MahalaKShmI");
    console.log(result);
})




