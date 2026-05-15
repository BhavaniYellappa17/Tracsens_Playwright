//split string into a array of string

export function splitStringIntoArray(str:string):string[]{
    var result:string[]= str.split('');
    return result;

}

//split string and number in separate array of string and number

export function separateArrayOfStringANdNumber(str:string):[string[],string[]]{
    let result :string[]= [];
    let result1:string[]=[];

   for(let i=0; i<str.length; i++){

      let ch = str[i];

      if(
         (ch >= 'a' && ch <= 'z')||
         (ch >= 'A' && ch <= 'Z')
        )
      {
         result.push(ch);
      }
      else if (ch>='0' && ch<='9') {

        result1.push(ch);
        
      } else {
        //do nothing
        
      }

      
   }

   return [result,result1];
}
//sum of array
export function sumOfArray(arr:number[]):number{
   let sum:number=0;
   for(let i=0;i<arr.length;i++){
      sum+=arr[i];
   }
   return sum;
}
 
//product of array
 
export function productOfArray(arr:number[]):number{
   let prod:number=1;
   for(let i=0;i<arr.length;i++){
      prod*=arr[i];
   }
   return prod;
}
 
//reverse a array
export function reverseArray(arr: number[]): number[] {
  let reversed: number[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}


 //Remove duplicates number
export function removeDuplicates(nums:number[]):number[]{

   let result:number[] = [];

   for(let i = 0; i < nums.length; i++){

      if(!result.includes(nums[i])){
         result.push(nums[i]);
      }

   }

   return result;
}
//Count Occurrence of Element
export function countOccurrenceOfElement(n:number[],target:number):number{
    let count:number=0;
    for(let i=0;i<n.length;i++){
        if(n[i]===target){
            count++;
        }
    }
    return count;


}

