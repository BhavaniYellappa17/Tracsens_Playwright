import{test,expect} from '@playwright/test';
import{name,array,tuple,conditioncheck,Any,union,Null,Undefined} from '../utils/datatypes';
import testdata from '../testdata.json'; 

//Print String 
test('Print string',async()=>{
    var s=name("Lakshmi");
    console.log(s);

})

//Array
test('Array',async() =>{
    var n=array([10,20,30]);
    console.log(n);
    console.log(n[0]);
})
//Tuple
test('tuple',async() =>{
    var t=tuple(["Lakshmi"],[24]);
    console.log(t);
    var result=tuple(testdata.tuple.name,testdata.tuple.age);
    console.log(result);
})

//boolean
test('check condition',async() =>{
    var b=conditioncheck(7);
    console.log(b);

});
//Any
test('Any data',async() =>{
var a=Any("Lakshmi");
console.log(a);
//a=any("Lakshmi");
//console.log(a);
});

//Union
test('union data', async() =>{
     var n=union("name");
     console.log(n);
})

//Null
test('Null Value',async() =>{
var n=Null(null);
console.log(n);
});

//Undefined
test('Undefined values',async() =>{
    var a=Undefined(undefined);
    console.log(a);
})

//Enum

