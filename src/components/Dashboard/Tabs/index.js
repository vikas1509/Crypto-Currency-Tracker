import React,{useState} from 'react';

import { createTheme, ThemeProvider } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from '../Grid/index';
import List from  "../List/index"
 import "./styles.css";
 export default function TabsComponent({ coins }) {
  const [value, setValue] = useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = createTheme({
    palette:{
      primary:{
        main:"#3a80e9",
       },
    
    },
  })
  const style={
    color :"var(--whiite)",
    width:"50vw",
    fontSize:"1.2rem",
    fontWeight:600,
    fontFamily:"Inter",
    textTransform:"capitalize",
  };

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <div>
          <TabList onChange={handleChange} variant='fullWidth'>
            <Tab label='Grid' value='grid' sx={style} />
            <Tab label='List' value='list' sx={style} />
          </TabList>
        </div>
        <TabPanel value='grid'>
          <div className='grid-flex'>
            {coins.map((coin, i) => (
              <Grid coin={coin} key={i} />
            ))}
          </div>
        </TabPanel  >
        <TabPanel value='list'>
         <table className='list-table'>
          {coins.map((item,i)=>{
            return <List coin={item} key={i}/>;
            
          })}
         </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}

