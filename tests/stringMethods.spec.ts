import {test,expect} from '@playwright/test';
import * as utils from '../utils';

//String Length
test('String Length',async()=>{
    var strresult=utils.methodLength("Typescript");
    console.log(strresult);

});

//toUpperCase
test('touppercase',async()=>{
    var upperletter=utils.upperCase("matryxsoft");
    console.log(upperletter);

});


//toLowerCase
test('tolowercase',async()=>{
    var upperletter=utils.lowerCase("");
    console.log(upperletter);

});

//indexOf
test('get first position',async()=>{
    var getPosition=utils.getFirstPosition("HelloWorld","World");
    console.log(getPosition);

});

//lastIndexOf
test('get last position ',async()=>{
    var getLastPos=utils.getLastPosition("javascript","a");
    console.log(getLastPos);

});

//includes
test('includes method',async()=>{
    var result=utils.includesMethod("Playwright","wright");
    console.log(result);

});

//startsWith
test('startswith',async()=>{
    var subStringStartsWith=utils.startsWith("hello","he");
    console.log(subStringStartsWith);

});

//EndsWith
test('Endswith',async()=>{
    var subStringEndsWith=utils.endsWith("hello","he");
    console.log(subStringEndsWith);

});

//slice
test('slice',async()=>{
    var extractString=utils. extractPartOfString("ExtractString",0,7);
    console.log(extractString);

});

//substring
test('substring',async()=>{
    var extractString=utils.subStringMethod("ExtractString",-7,-13);
    console.log(extractString);

});

