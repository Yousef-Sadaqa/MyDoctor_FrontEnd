import 'date-fns';
import React from 'react';

import DateFnsUtils from '@date-io/date-fns';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker

} from '@material-ui/pickers';

export default function MaterialUIPickers() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date('2019-10-26T21:11:54'));
  const [selectedDate1, setSelectedDate1] = React.useState(new Date('2019-10-26T21:11:54'));
  const handleDateChange = date => {
    setSelectedDate(date);
  };
  const handleDateChange1 = date1 => {
    setSelectedDate1(date1);
  };
  return (
  
   <div>
   
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    
        <KeyboardTimePicker
         
          id="time-picker"
         
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
       <span style={{fontSize:"19px" ,marginTop:"-20px"}}>TO </span>
         <KeyboardTimePicker
         
        id="time-picker"
      
        value={selectedDate1}
        onChange={handleDateChange1}
        KeyboardButtonProps={{
          'aria-label': 'change time',
        }}
      />

        
    </MuiPickersUtilsProvider>
</div>
  );
}