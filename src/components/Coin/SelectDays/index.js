import React from 'react';
import { useState } from 'react';

import "./styles.css";
import MenuItem from '@mui/material/MenuItem';

import Select from '@mui/material/Select';

export default function SelectDays({days,handleDaysChange}) {
//  const [days, setDays] = useState(30);

//   const handleChange = (event) => {
//     setDays(event.target.value);
//   };

  return (
  
    <div className='select-days'> 
    <p>price change In </p>
          <Select sx={{
        height:"2.5rem",
         color:"var(--white)",
         "& .MuiOutlinedInput-notchedOutline":{
            borderColor:"var(--white)",
        },
        "& .MuiSvgIcon-root":{
            color:"var(--white)",
        },
        "&:hover":{
            "&& fieldset":{
                borderColor:"#3a80e9",
            },
        }, 
    }}
    
    
    
      
      
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days} 
          label="days"
          onChange={handleDaysChange}
        >
          <MenuItem value={7}> 7</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={90}>90</MenuItem>
          <MenuItem value={90}>90</MenuItem>
        </Select>
  
    </div>
  );
}