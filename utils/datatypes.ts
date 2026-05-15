//Print String 
export function name(n:string):string{
    return n;
}
//Array
export function array(num:Array<number>):Array<number>{
    return num;
}
//Tuple
export function tuple(name:Array<string>,age:Array<number>){
    return [name,age];
}

//boolean
export function conditioncheck(n:number):string{
    if(n==10)
        {
             return `true`;
        }
        else{
              return `flase`;
        }
}
//Any
export function Any(n:any):any{
    return n;
}
//Union
export function union(num:number|string):number|string{
    return num;
}
//Null
export function Null(a:null):null{
    return a;
}

//Undefined
export function Undefined(n:undefined):undefined{
    return n;
}

//Enum
enum status{
    Active="Active",
    Inactive="Inactive"
}
export function e(Status1:status,Status2:status):status[]{
    return[Status1,Status2];
}