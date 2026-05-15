
// 👉 Get current date-time (full)
export function getCurrentDateTime(): string {
  const now = new Date();
  return now.toLocaleString();
}

// 👉 Get formatted date (DD-MM-YYYY)
export function getFormattedDate(separator:string): string {
  const now = new Date();
  return `${now.getDate()}${separator}${now.getMonth() + 1}${separator}${now.getFullYear()}`;
}

// 👉 Get formatted time (HH:MM:SS) 
export function getFormattedTime(): string {
  const now = new Date();
  return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
}
//converts a single into double digit by adding zero
export function pad(n: number): string {
  return n.toString().padStart(2, '0');

}
//formats date and time with pad
export function getFormattedDatewithpad(separator:string): string {
  const now = new Date();
  return `${pad(now.getDate())}${separator}${pad(now.getMonth()+1) }${separator}${pad(now.getFullYear())}`;
}
//👉 Get formatted time with pad (HH:MM:SS) 
export function getFormattedTimeWithPad(): string {
  const now = new Date();
  return `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
}

export function getFormattedDateTimeWithPad(separator:string): string {

      let sTime:string=getFormattedTimeWithPad();
       let sDate:string=getFormattedDatewithpad(separator);
       return sDate+"_"+sTime;
       

 
}

