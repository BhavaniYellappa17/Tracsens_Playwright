import * as XLSX from 'xlsx';
import {test,expect} from '@playwright/test';
import * as utils from '../utils';
//add numbers
test('add numbers',async()=>{
    const testData=utils.readExcelData("./test-data/testData_String.xlsx","stringInput");
    console.log(testData);
    for(const data of testData){
      var result=utils.add(data.Value1,data.Value2);
        console.log(result);
    }
});
//position of string
test('position Of SubString',async()=>{
    const testData=utils.readExcel("./test-data/testData_String.xlsx","subString");
    console.log(testData);
    for(const data of testData){
      var result=utils.positionOfSubString(data.sString,data.sSubString);
        console.log(result);
    }
});

//fetching directly from excel 
test('add numbers loop', async () => {

  const sheet = utils.readExcelCells(
    './test-data/testData_String.xlsx',
    'stringInput'
  );

  
  const range = sheet['!ref'];


  const decoded = require('xlsx').utils.decode_range(range);
  

  const startRow = decoded.s.r + 1; 
  console.log(startRow);
  const endRow = decoded.e.r;
   console.log(endRow);

  for (let i = startRow + 1; i <= endRow + 1; i++) {

    const v1 = sheet[`B${i}`]?.v;
    console.log(v1);
    const v2 = sheet[`C${i}`]?.v;
    console.log(v2);

    if (v1 !== undefined && v2 !== undefined) {
      const result = utils.add(v1, v2);
      console.log(result);
    }
  }
});

//reverse array
test('reverse array', async () => {

  const sheet = utils.readExcelCells(
    './test-data/testData_String.xlsx',
    'array'
  );

  const range = XLSX.utils.decode_range(sheet['!ref']);

  for (let i = range.s.r + 2; i <= range.e.r + 1; i++) {

    
    const cellValue = sheet[`B${i}`]?.v;

    if (cellValue) {

      
      const arr = cellValue.split(',').map((x: string) => Number(x.trim()));

      
      const result = utils.reverseArray(arr);

      console.log(result);
    }
  }
});

//fetch column names

const sheet = utils.readExcelCells('./test-data/testData_String.xlsx',
    'stringInput');

const range = XLSX.utils.decode_range(sheet['!ref']);

// Read first row (header)
const headers: string[] = [];

for (let c = range.s.c; c <= range.e.c; c++) {
  const cellAddress = XLSX.utils.encode_cell({ r: 0, c: c });
  const cell = sheet[cellAddress];

  headers.push(cell?.v);
}

console.log(headers);


 



