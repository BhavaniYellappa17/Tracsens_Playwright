import {test,expect} from '@playwright/test';
import * as utils from '../utils';
import * as testData from './testdata/allTestData';

//palindrome or not
test('check given string is palindrome or not',async()=>{
var r=utils.palindromeOrNot("");
console.log(r);
});


//Reverse a String
test('Reverse a string',async()=>{
    var result = utils.reverseStrings("");
    console.log(result);
});

//split into array
test('split into array',async()=>{
    for(const data of testData.splitintoarray){
    var result=utils.splitIntoArray(data.str,data.splitString);
    console.log(result);
    }
    
});

//find the substring 
test('find the substring',async()=>{
    //var result=utils.findSubStringInString("Mahalakshmi","");
    //console.log(result);
    for(const data of testData.subString){
      var result=utils.findSubStringInString(data.sString,data.sSubString);
        console.log(result);
    }
    
});

//position of substring
test('position of substring',async()=>{
    //var iSubstringPos=utils.positionOfSubString("matryxsoft","soft");
    //console.log(iSubstringPos);
    for(const data of testData.getPosition){
    var iSubstringPos=utils.positionOfSubString(data.sString,data.sSubString);
    console.log(iSubstringPos);
    }
    
});
