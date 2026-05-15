
//convert number to string using tostring
export function numberToString(n:number):string{
    return n.toString();

}
//using string 
export function usingStringMethod(num:number):string{
    let str:string=String(num);
    return str;
}
//Convert string to number
export function stringToNumber(str:string):number{
    let num:number=Number(str);
    return num;
}
//convert string to integer Using Parse
export function usingParseMethod(str:string):number{
    return parseInt(str);
   
}
//convert string to float using parse
export function StringToFloat(str:string):number{
    return parseFloat(str);
}