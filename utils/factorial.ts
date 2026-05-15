export function factorial(n:number):number{
    let result:number=1;
    for(var i=1;i<=n;i++){
        result*=i;
    
    }
    return result;
}
//fibonanci series 
export function fibonanci(m:number,n:number,num:number):number{
 //let num:number=10;
 let result:number=n;
for(let i=1;i<=num;i++)
{
    result=m+n;
    m=n;
    n=result;
    
  }
  return result;
}
//Check whether the string is polindrome or not 
export function polindrome(str:string):string{
    let reverse:string="";
    for(let i=str.length-1;i>=0;i--){
        reverse+=str[i];
    }
    if(str===reverse){
        return("Given string is polindrome");
    }
    else{
        return("given string is not an polindrome");
    }
}
//Reverse a string 
export function reverse(str:string):string{
    let r:string="";
    for(let i=str.length-1;i>=0;i--){
        r+=str[i];
    }
    return r;
}