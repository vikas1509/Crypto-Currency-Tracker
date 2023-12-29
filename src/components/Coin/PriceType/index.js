import React from 'react';
import { useState } from 'react';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function TogglePriceType({PriceType, handlePriceTypeChange}) {
    // const [PriceType, , setPriceType] = useState('prices');

    // const handlePriceTypeChange = (event, newType) => {
    //     setPriceType(newType);
    // };

    return (
        
       <div className='toggle-prices'>
         <ToggleButtonGroup
        color='primary'
            value={PriceType}
            exclusive
            onChange={handlePriceTypeChange}
            sx={{
                "&.Mui-selected": {

                    color: "var(--blue) !important",
                },
                borderColor: "var(--blue)",
                border: "unset !important",

                "& .MuiToggleButtonGroup-grouped": {

                    border: "1px solid !important",

                    borderColor: "unset",

                    color: "var(--blue)",
                },

                "& .MuiToggleButton-standard": {

                    color: "var(--blue)",



                },



            }}
        >
            <ToggleButton value="price"  className='toggle-btn'>
                price
            </ToggleButton>
            <ToggleButton value="market_caps" className='toggle-btn' >
                Market Cap
            </ToggleButton>
            <ToggleButton value="total_volumes"  className='toggle-btn'>
                Total Volume
            </ToggleButton>



        </ToggleButtonGroup>
       </div>
     
    );
}
