//get total number of character in a string
export function methodLength(str:string):number|string{
    let stringLength:number=str.length;
    if(str===null || str===""){
        return ` given string is null `;
    }
    return stringLength;

}

//convert all the characters into uppercase
export function upperCase(str:string):string{
    let stringUpperCase:string=str.toUpperCase();
    if(str===null || str===""){
        return 'given string is null ';
    }
    return stringUpperCase;

}

//convert all the characters into lowercase
export function lowerCase(str:string):string{
    let strLowerCase:string=str.toLowerCase();
    if(str===null || str===""){
        return 'given string is null ';
    }
    return strLowerCase;

}

//find the first position of substring
export function getFirstPosition(sString:string,sSubString:string):number|string{
    let firstPosition:number=sString.indexOf(sSubString);
    if(sString===null || sString===""|| sSubString===null || sSubString===""){
        return 'given string is null';
    }
    return firstPosition;

}

//find last position of the substring
export function getLastPosition(sString:string,sSubString:string):number|string{
    let lastPosition:number=sString.lastIndexOf(sSubString);
    if(sString===null || sString==="" || sSubString===null || sSubString===""){
        return 'given string is empty';
    }
    return lastPosition;

}

//check whether the substring exists
export function includesMethod(sString:String,sSubString:string):boolean | string{
    let str:boolean=sString.includes(sSubString);
    if(sString===null || sSubString==="" || sString===null || sSubString===""){
        return 'given string is null';
    }
    return str;

}

//Check if string starts with given substring. 
export function startsWith(sString:string,sSubString:string):boolean|string{
    let stringStartsWith:boolean=sString.startsWith(sSubString);
    if(sString===null || sString==="" || sSubString===null || sSubString===""){
        return 'given string is null';
    }
    return stringStartsWith;

}

//Check if string ends with given substring
export function endsWith(sString:string,sSubString:string):boolean|string{
    let stringStartsWith:boolean=sString.endsWith(sSubString);
    if(sString===null || sString==="" || sSubString===null || sSubString===""){
        return 'given string is null';
    }
    return stringStartsWith;

}

//Extract part of string 
export function  extractPartOfString(str:string,start:number,end:number):string{
    let startAndEndOfString:string=str.slice(start,end);
    if(str===null || str===""){
        return 'given string is null';
    }
    return startAndEndOfString;

}

//Extract part of string using substring
export function subStringMethod(str:string,start:number,end:number):string{
    let subString:string=str.substring(start,end);
    if(str===null || str===""){
         return'given string is null';
    }
    else if (start < 0 || end < 0) 
        {
               return 'negative values are not allowed';
        }

    
     return subString;  

}

