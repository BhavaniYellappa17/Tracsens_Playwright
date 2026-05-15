//Sum of array 2D(array of array)
export function sumOfArrayOfArray(arr:number[][] | null):number[] | string{
    let sum:number[]=[];
    if(arr===null || arr.length===0){
        return `given array is null or empty`;
    }
    if(arr[0].length===arr[1].length ){
       for(let j=0;j<arr[0].length;j++){
            sum[j]=arr[0][j]+arr[1][j];
            console.log(sum[j]);
        }
    }
    else{
            return `the given array lengths are mismatch`;
        }
    
    
        
    return sum;
}

//Difference of Array of Array
export function differenceOfArrayOfArray(arr:number[][] | null):number[] | string{
    let sum:number[]=[];
    if(arr===null || arr.length===0){
        return `given array is null or empty`;
    }
    if(arr[0].length===arr[1].length){
       for(let j=0;j<arr[0].length;j++){
            sum[j]=arr[0][j]-arr[0+1][j];
            console.log(sum[j]);
        }
    }
    else{
            return `the given array lengths are mismatch`;
        }
    
    
        
    return sum;
}

//Sum of two Array
export function sumOfTwoArrayOfArray(arr1:number[],arr2:number[]):number[] | string{
    let sum:number[]=[];
    if(arr1===null || arr1.length===0){
        return `given array is null or empty`;
    }
    if(arr1.length===arr2.length ){
       for(let j=0;j<arr1.length;j++){
            sum[j]=arr1[j]+arr2[j];
            console.log(sum[j]);
        }
    }
    else{
            return `the given array lengths are mismatch`;
        }
    
    
        
    return sum;
}

