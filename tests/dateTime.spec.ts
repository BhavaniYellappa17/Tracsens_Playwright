import {test,expect} from '@playwright/test';
import * as utils from '../utils';

test('get date and time', async () => {

  const dateTime = utils.getCurrentDateTime();
  const date = utils.getFormattedDate('/');
  const time = utils.getFormattedTime();

  console.log('DateTime:', dateTime);
  console.log('Date:', date);
  console.log('Time:', time);

  
});

test('converts a single into double digit by adding zero', async () => {

 
  const date = utils.getFormattedDatewithpad('/');
  const time = utils.getFormattedTimeWithPad();

 
  console.log('Date:', date);
  console.log('Time:', time);

  
});

test('getFormattedDateTimeWithPad', async () => {

    const dateAndTime=utils.getFormattedDateTimeWithPad('/');
    console.log(dateAndTime);
});

 


