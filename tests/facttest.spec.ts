import { test,expect } from "@playwright/test";
//import { factorial,fibonanci } from "../utils/factorial";
import * as utils from '../utils/factorial';
test('factorial of number',async() =>{
     var f=utils.factorial(5);
     console.log(f);
})
//fibonanci
test('fibonanci series',async() =>{
     var f=utils.fibonanci(0,1,10);
     console.log(f);
});

//check whether the string is polindrome or not 
test("Polindrome or not",async() =>{
     var result=utils.polindrome("hello");
     console.log(result);

});
//Reverse a string
test("Reverse a string",async()=>{
     var reversestring=utils.reverse("lakshmi");
     console.log(reversestring);
})