 //Add Two Numbers
export function add(a:number,b:number): number{
    return a+b;
}
//Subtraction of two numbers
export function subtract(a:number,b:number):number{
    return a-b;
}
//Multiplication of two numbers 
export function product(a:number,b:number):number{
    return a*b;
}
//Division
export function division(a:number,b:number):number{
    return a/b;
}

//Check whether the number is even or odd
export function isevenorodd(num:number):string{
    if(num%2==0){
        return `${num} is even`;
    }
    else
    {
        return `${num} is odd`;
    }
}
//Finding the largest number 
export function largest(a:number,b:number,c:number):number{
    if(a>b && a>c){
        return a;
    }
    else if(b>c){
        return b;
    }
    {
        return c;
    }
}
//string
//Bhavani
//export function firstRepeatingandNonRepeatingChar(str: string): string | null {
  //const charCount: { [key: string]: number } = {};
 
  // Step 1: Count characters
//   for (const char of str) {
//     charCount[char] = (charCount[char] || 0) + 1;
//   }
 
  // Step 2: Find first non-repeating
//   for (const char of str) {
//     if (charCount[char] ===1) {
//       return char;
//     }
//     else if(charCount[char] ===2) {}
//   }
//   //Step 3: Find first repeating
//   for (const char of str) {
//     if (charCount[char] ===2) {
//       return char;
//     }
//   }
 
//   return null;
// }
export function getChars(str: string): [string | null, string | null] {
    // Store how many times each character appears
    const charCount: { [key: string]: number } = {};

    // Count each character
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let firstNonRepeating: string | null = null;
    let firstRepeating: string | null = null;

    // Find first non-repeating and first repeating
    for (const char of str) {

        // First character appearing only once
        if (charCount[char] === 1 && firstNonRepeating === null) {
            firstNonRepeating = char;
        }

        // First character appearing more than once
        if (charCount[char] > 1 && firstRepeating === null) {
            firstRepeating = char;
        }

        
    }

    return [firstNonRepeating, firstRepeating];
}
//Array
 export function getCharsArray(str: string): [string[] | null ] {
 
     let arr: string[] | null  = [];
     var firstnonrepeatcount=0;
     var firstrepeatcount=0;
    const chars=str;

     if(str===null || str==='')
        {
            console.log("exit");
           return [null];
           
 }
    

    for (let i = 0; i < chars.length; i++) {

        let count = 0;

        for (let j = 0; j < chars.length; j++) {

            if (chars[i] === chars[j]) {
                count++;
            }
        }

        if (count === 1 && arr.length<2 && firstnonrepeatcount<1) {
            firstnonrepeatcount++;
           arr.push(chars[i]);
           console.log('firstnonrepeatcharacter: '+ chars[i]);
           
        }

        if (count > 1 && arr.length<2 && firstrepeatcount<1 ) {
            firstrepeatcount++;
             arr.push(chars[i]);
             console.log('firstrepeatcharacter: '+ chars[i]);
            
        }
        

        
    }
    if(firstrepeatcount==0){
            arr.push("");
        }

    return [arr];
}
//firstrepeated and firstnonrepeated character
export function getCharsString(str: string): string {

    if (str === null || str === '') {
        console.log("exit");
        return "null";
    }

    let firstNonRepeat: string = "";
    let firstRepeat: string = "";

    for (let i = 0; i < str.length; i++) {

        let count = 0;

        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j]) {
                count++;
            }
        }

        if (count === 1 && firstNonRepeat === "") {
            firstNonRepeat = str[i];
            console.log("First Non-Repeat Character: " + firstNonRepeat);
        }

        if (count > 1 && firstRepeat === "") {
            firstRepeat = str[i];
            console.log("First Repeat Character: " + firstRepeat);
        }
    }

    if (firstRepeat === "") {
        firstRepeat = "No repeat found";
    }

    if (firstNonRepeat === "") {
        firstNonRepeat = "No non-repeat found";
    }

    return "FirstNonRepeat: " + firstNonRepeat + " | " + "FirstRepeat: " + firstRepeat;
}


//count vowels in a string 
export function vowelstring(str:string):{vowelcount:number,consonantscount:number}{
    let vowelcount=0;
    let consonantscount=0;
    let vowelchars="";
    let consonantschars="";
    const vowels="aeiouAEIOU";
    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
            vowelcount++;
            vowelchars+=str[i];
            
        }
        
        if(!vowels.includes(str[i])){
            consonantscount++;
            consonantschars+=str[i];
            
        }


    }
    console.log('Vowelcharacter:',vowelchars);
    console.log("Consonantscharacter:",consonantschars);
    return {vowelcount,consonantscount};
     
}

//Count Uppercase and lowercase letter in  a given string 
export function upperandlowercase(str:string):{uppercount:number,lowercount:number}{
     let uppercount=0;
     let lowercount=0;
     let uppercharacter="";
     let lowercharacter="";
     for(let i=0;i<str.length;i++)
        {
         if(str[i]>="A" && str[i]<="Z")
            {
               uppercount++;
               lowercharacter+=str[i];
         }
         else if(str[i]>="a" && str[i]<="z")
         {
              lowercount++;
              uppercharacter+=str[i];
         }

     }
     console.log("uppercase letter:",uppercharacter);
     console.log("lowercase:",lowercharacter);
     return{uppercount,lowercount};
     
}
//getnumbers from string
export function getNumbers(str:string):string{
 return str.replace(/\D/g, '');

}

//substring
export function findSubstring(str1:string,str2:string):boolean{
    return str1.includes(str2);
    
}

//Position
export function positionOfString(str1:string,str2:string):number{
    //return str1.indexOf(str2);
    return str1.indexOf(str2)+1;

}
//count substring in a string
export function countSubString(str1:string,str2:string):number{
     
  return str1.split(str2).length - 1;
}
//String Sorting  
export function stringSorting(str:string[]):string[]{
    return str.sort();
}

//reverse a string
export function reverseString(str:string):string{
    let result:string="";
    for(let i=str.length-1;i>=0;i--){
        result+=str[i];
    }
    return result;

}
//palindrome or not

export function stringPalindrome(str:string):string{
    let result:string="";
    for(let i=str.length-1;i>=0;i--){
        result+=str[i];
    }
    if(str===result){
        return ('given string is palindrome');
    }
    else{
           return('given string is not a palindrome');
    }
    

}
//Find the string with the smallest length
export function findMinString(arr:string[]):string{
   let min = arr[0];
 
   for(let i = 1; i < arr.length; i++){
      if(arr[i].length < min.length){
         min = arr[i];
      }
   }
 
   return min;
}
 
//Find the string with the largest length
 
export function findMaxString(arr:string[]):string{
   let max= arr[0];
 
   for(let i = 1; i < arr.length; i++){
      if(arr[i].length > max.length){
         max= arr[i];
      }
   }
 
   return max;
}





