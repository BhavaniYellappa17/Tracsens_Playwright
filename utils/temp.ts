//sum of array
export function sumOfArrayElement(arr1:number[],arr2:number[]):number[] | string{
    let sum:number;
    let result:number[]=[];
    if(arr1===null || arr1.length===0 || arr2===null||arr2.length===0){
        return `given array is null or empty`;
    }
    if(arr1.length===arr2.length){
        for(let j=0;j<arr1.length;j++){
           sum=arr1[j]+arr2[j];
           result.push(sum);
        }
    }
        
     else{
        return `given array lengths are mismatch`;
    }
     return result;
    
}

//sum of array of array 
export function addTwoArrays(arr1:number[],arr2:number[]):number[] | string{
    let sum:number[]=[];
    if(arr1===null || arr1.length===0 || arr2===null || arr2.length===0){
        return `given array is null or empty`;
    }
    if(arr1.length===arr2.length){
        for(let j=0;j<arr1.length;j++){
            sum[j]=arr1[j]+arr2[j];
        }

    }
    else{
        return `Given array lengths are mismatch`;
    }
    return sum;

}

//Difference of array 
export function subOfTwoArray(arr1:number[],arr2:number[]):number[] | string{
let sum:number[]=[];
if(arr1===null || arr1.length===0){
    return 'given array is null or empty';
}
if(arr1.length===arr2.length){
    for(let j=0;j<arr1.length;j++){
        sum[j]=arr1[j]-arr2[j];
        
    }

}
else{
    return 'given array lengths are mismatch';
}
return sum;

}

//product of array
export function productOfArrayElement(arr1:number[],arr2:number[]):number[] | string{
    let sum:number[]=[];
    if(arr1===null || arr1.length===0 || arr2===null || arr2.length===0){
        return `given array is null or empty`;
    }
    if(arr1.length===arr2.length){
        for(let i=0;i<arr1.length;i++){
            sum[i]=arr1[i]*arr2[i];

        }
    }
    else{
        return `given arrays lengths are mismatch`;
    }
    return sum;
   
}
//factorial of number 
export function factorialOfNumber(n:number):number{
    let fact:number=1;
    for(let i=1;i<=n;i++){
        fact*=i;
    }
    return fact;

}
//fibonancci 
export function fibonancciseries(num:number):number[]{
    let m:number=0;
    let n:number=1;
    let result:number[]=[0,1];
    for(let i=2;i<=num;i++){
        result.push(m+n);
        m=n;
        n=result[i];
    }
    return result;
}

//maximum number of array
export function findMaximumNumber(arr:number[]):number{
    let max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }

    }
    return max;

}
//find minimum number in an array
export function findMinimumNumber(n:number[]):number{
    let min=n[0];
    for(let i=0;i<n.length;i++){
        if(n[i]<min){
            min=n[i];
        }
    }
    return min;
}
    