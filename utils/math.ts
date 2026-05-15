//Add Two Numbers
export function addTwoNumber(a:number,b:number):number{
    return a+b;
}

//Add Two Numbers
export function addNumbers(a:number,b:number):number{
    let c:number=a+b;
    return c;
}

//Swap two Numbers
export function swapNumbers(a:number,b:number):[number,number]{
    let temp:number=a;
    a=b;
    b=temp;
    return[a,b];
}

//Swap two numbers without using third  variable
export function swapTwoNumbersWithoutThirdVar(a:number,b:number):[number,number]{
    a=a+b;
    b=a-b;
    a=a-b;
    return[a,b];
}

//Add Two Numbers Roundoff Two DecimalDigit
export function addTwoNumbersRoundoffTwoDecimalDigit(a:number,b:number):number{
     let c:number=a+b;
     let d:string= c.toFixed(2);
     console.log(d);
     let result:number=Math.round((c)*100/100);
     console.log(result);
     return result;
     
}
//fibonanci series 
export function fibonanci(num:number):number[]{
 let m:number=0;
 let n:number=1;
 let result:number[]=[0,1];
for(let i=2;i<=num;i++)
{
    result.push(m+n);
    m=n;
    n=result[i];
    
}
  //console.log(result);
  return result;
  
}

//Number Sorting 
export function numberSorting(num:number[]):number[]{
    return num.sort((a,b)=> a-b);
}

//Ascending order
export function ascNumberSorting(num:number[]):number[]{
    let temp:number;
    //let k:number=0;
    let m:number=0;
    for(let i=0;i<num.length;i++){
        
        m=0;
        for(let j=1;j<num.length;j++){
            if(num[m]>num[j]){
                temp=num[m];
                num[m]=num[j];
                num[j]=temp;
               
               

            }
             m=j;
            //console.log(num);
        }
        
    }

    return num;
}

//Descending order
export function descNumberSorting(num:number[]):number[]{
    let temp:number;
    //let k:number=0;
    let m:number=0;
    for(let i=0;i<num.length;i++){
     
        m=0;
        for(let j=1;j<num.length;j++){
            if(num[m]<num[j]){
                temp=num[m];
                num[m]=num[j];
                num[j]=temp;
             
                

            }
            m=j;
        }
    }
    return num;
}
//Find the maximum number in an array
export function findMax(nums:number[]):number{
   let max = nums[0];

   for(let i=1; i<nums.length; i++){
      if(nums[i] > max){
         max = nums[i];
      }
   }

   return max;
}

//find the minimum number in an array
export function findMin(n:number[]):number{
    let min=n[0];
    for(let i=0;i<n.length;i++){
        if(n[i]<min){
            min=n[i];
        }
    }
    return min;
}

//getSpecialCharactersFromString

export function getSpecialCharactersFromString(str:string):string{
   let result = "";

   for(let i=0; i<str.length; i++){

      let ch = str[i];

      if(
         !(ch >= 'a' && ch <= 'z') &&
         !(ch >= 'A' && ch <= 'Z') &&
         !(ch >= '0' && ch <= '9'))
         {
           result += ch;
      }
   }

   return result;
}

//getDigitFromString

export function getNumberFromString(str:string):string{
    let result = "";

   for(let i=0; i<str.length; i++){

      let ch = str[i];

      if(
         (ch >= '0' && ch <= '9')
      ){
         result += ch;
      }
   }
   return result;
}

//Get only the alphabet
export function getAlphabetsfromString(str:string):string{
   let result = "";

   for(let i=0; i<str.length; i++){

      let ch = str[i];

      if(
         (ch >= 'a' && ch <= 'z') ||
         (ch >= 'A' && ch <= 'Z')  
      )
      {
         result += ch;
      }
   }

   return result;
}
//Factorial of a Number
export function factorial(n:number):number{
    let result:number=1;
    for(var i=1;i<=n;i++){
        result*=i;
    
    }
    return result;
}

