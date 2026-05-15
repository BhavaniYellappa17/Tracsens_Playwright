import * as XLSX from 'xlsx';
import {test,expect} from '@playwright/test';
import * as utils from '../utils';

//fetch column names
test('fetch column names', async () => {

  const sheet = utils.fetchColumnNames(
    './test-data/testData_String.xlsx',
    'stringInput');
    console.log(sheet);
});

//fetch particular column values
test('fetch column values', async () => {

  const sheet = utils.fetchColumnValues(
    './test-data/testData_String.xlsx',
    'stringInput','Value1');
    console.log(sheet);
});


//fetch multiple column values
test('fetch column value', async () => {

  const sheet = utils.fetchColumnValue(
    './test-data/testData_String.xlsx',
    'stringInput',["Value1","Value2"]);
    console.log(sheet);
});

//1)Fetch a row from Excel by matching column value
test('fetch row value', async () => {
const sheet = utils.fetchRowByColumnValue('./test-data/testData_String.xlsx','getRowValues','name','address','Lakshmi','Banglore');
console.log(sheet);
});

// //2)Fetch a row from Excel by matching column value using key value pairs
// test('get row value', async () => {
 
//   const sheet = utils.getRowByColumnValue('./test-data/testData_String.xlsx','getRowValues',{ name: 'Lakshmi'});
//     console.log(sheet);
// });
