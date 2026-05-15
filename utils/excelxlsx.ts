import * as XLSX from 'xlsx';
//import * as path from 'path';

export function readExcelData(filePath: string, sheetName: string):any[]{
  // Read workbook
  const workbook = XLSX.readFile(filePath);

  // Get sheet
  const sheet = workbook.Sheets[sheetName];

  // Convert sheet to JSON
  const data = XLSX.utils.sheet_to_json(sheet);

  return data;  
}

export function readExcel(filePath: string, sheetName: string):any[]{
  // Read workbook
  const workbook = XLSX.readFile(filePath);

  // Get sheet
  const sheet = workbook.Sheets[sheetName];

  // Convert sheet to JSON
  const data = XLSX.utils.sheet_to_json(sheet);

  return data;  
}

//fetching directly from excel 
export function readExcelCells(filePath: string, sheetName: string) {
  const workbook = XLSX.readFile(filePath);
  const sheet = workbook.Sheets[sheetName];

  return sheet; 
}

//fetch column names
export function fetchColumnNames(filePath: string, sheetName: string): string[] {
  const workbook = XLSX.readFile(filePath);
  const sheet = workbook.Sheets[sheetName];

  const data = XLSX.utils.sheet_to_json<any>(sheet);

  return Object.keys(data[0]);
}

// //get column index using column names
// export function fetchColumnName(filePath: string, sheetName: string): string[] {
//   const workbook = XLSX.readFile(filePath);
//   const sheet = workbook.Sheets[sheetName];

//   const range = XLSX.utils.decode_range(sheet['!ref']);

//   const headers: string[] = [];

//   // 👉 Loop through columns (first row only)
//   for (let c = range.s.c; c <= range.e.c; c++) {

//     const cellAddress = XLSX.utils.encode_cell({ r: 0, c: c }); // Row 1
//     const cell = sheet[cellAddress];

//     headers.push(cell?.v); // push column name
//   }

//   return headers;
// }

//fetch particular column values
export function fetchColumnValues(filePath: string, sheetName: string,columnname:string): any[] {
  const workbook = XLSX.readFile(filePath);
  const sheet = workbook.Sheets[sheetName];


  const data = XLSX.utils.sheet_to_json(sheet);

   return data.map((row: any) => row[columnname]);
}

//fetch multiple column values 
export function fetchColumnValue(filePath: string, sheetName: string,columnnames:string[]): any[][] {
  let arr:any[][]=[];
  const workbook = XLSX.readFile(filePath);
  const sheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(sheet);
  for(let i=0;i<columnnames.length;i++){
    console.log(i);
     arr.push(data.map((row: any) => row[columnnames[i]]));

     console.log(arr);

  }
  return arr; 
   
}

//1)Fetch a row from Excel by matching column value
export function fetchRowByColumnValue(filePath: string,sheetName: string,columnName1: string,columnName2: string,value1: string,value2: string):any {
 
  // Step 1: Read the Excel file
  const workbook = XLSX.readFile(filePath);
 
  // Step 2: Get the required sheet
  const sheet = workbook.Sheets[sheetName];
 
  // Step 3: Convert sheet data into JSON array
  const data = XLSX.utils.sheet_to_json(sheet);
 
  // Step 4: Find the row where column value matches
  const row = data.find((row: any) =>row[columnName1] === value1 && row[columnName2] === value2);
 
  // Step 5: Return the matched row
  return row;
};
 
 
//2)Fetch a row from Excel by matching column value using key value pairs
export function getRowByColumnValue(filePath: string,sheetName: string,filters: { [key: string]: string }): any {
const workbook = XLSX.readFile(filePath);
const sheet = workbook.Sheets[sheetName];
const data = XLSX.utils.sheet_to_json(sheet);
const row = data.filter((row: any) =>Object.entries(filters).every(([key, value]) => row[key] === value));
return row;
}

