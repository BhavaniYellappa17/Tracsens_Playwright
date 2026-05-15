//palindrome or not 
export function palindromeOrNot(str:string):string{
    let result="";
    if(str===null || str===""){
        return `given string is null`;
    }
    for(let i=str.length-1;i>=0;i--){
        result+=str[i];
    }
    if(str===result){
        return `given string is palindrome`;

    }
    else{
        return ` given string is not palindrome`;
    }
}

//reverse a string 

export function reverseStrings(str:string):string{
    let result="";

    if (str===null || str==="")
    {
        return`given string is null`;
    }
    for(let i=str.length-1;i>=0;i--){
        result+=str[i];
    }
    return result;
}

//split into array
export function splitIntoArray(str:string,splitString:string):string[] | string{
    

    if(str===null || str==="")
        {
          return 'given input is null';
    }
    let r:string[]=str.split(splitString);
    return r;
}
//find a substring in string
 
export function findSubStringInString(sString:string,sSubString:string):boolean | string{
    if(sString===null || sString==="" || sSubString===null || sSubString==="" ){
        return `given string is null or empty `;
    }
      var bResult:boolean = sString.includes(sSubString);
      return bResult;
 
}

//position of substring
export function positionOfSubString(sString:string,sSubString:string):number | string{
    if(sString===null || sString==="" || sSubString===null || sSubString===""){
        return `given substring is null or empty`;
      
    }
      return sString.indexOf(sSubString);
}





    