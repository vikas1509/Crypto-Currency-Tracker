// import React, { useEffect, useState } from 'react'
// import {useParams} from "react-router-dom";
// import Header from '../components/Common/Header';
// import { coinObject } from '../functions/convertObject';
// import axios from 'axios';
// import List from '../components/Dashboard/List';
// import Loader from '../components/Loader';
// function CoinPage() {
//  const {id} = useParams();
//  const [isLoading, setIsLoading]  =useState(true);
//  const [coinData, setCoinData] = useParams();

//   useEffect(()=>{
//     if(id){
//         axios.get(`https://api.coingecko.com/v3/coins/${id}`)
//         .then((response)=>{
//             console.log("RESPONSE>>>", response);


//     coinObject(setCoinData, response.data);
//     setIsLoading(false);

//         })
//         .catch((error)=>{
//             console.log("ERROR>>>",error);
//             setIsLoading(false);
//         });
//     }
//   },[id])

//   return (
//     <div> <Header/>
//     {isLoading ?( <Loader/> ):(
//     <>
//     <List coin={coinData}/></>) }
//     </div>
//   )
// }

// export default CoinPage
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Common/Header';
import { coinObject } from '../functions/convertObject';
import axios from 'axios';
import List from '../components/Dashboard/List';
import Loader from '../components/Loader';
import CoinInfo from '../components/Coin/CoinInfo';
import { getCoinData } from '../functions/getCoinData';
import { getCoinPrices } from '../functions/getCoinPrices';
import LineChart from '../components/Coin/LineChart';
import {convertDate} from "../functions/convertDate"
import SelectDays from '../components/Coin/SelectDays';
import { settingChartData } from '../functions/settingChartData';
import TogglePriceType from '../components/Coin/PriceType';
function CoinPage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState(); // Updated initialization
  const [days, setDays] = useState(120);
  const [chartData, setChartData] = useState({labels:[], datasets:[],});
  const [PriceType, setPriceType] = useState('prices');

  useEffect(() => {
    if (id) {

      getData();
    }
  }, [id]); // Updated dependency array

  async function getData() {

    const data = await getCoinData(id);
    if (data) {
      coinObject(setCoinData, data);
      const prices = await getCoinPrices(id, days,PriceType);
      if (prices.length > 0) {
        settingChartData(setChartData, prices);
        setIsLoading(false);
      }
    }


  }

 const handleDaysChange = async (event)=>{
  setIsLoading(true);

  setDays(event.target.value); 

  const prices = await getCoinPrices(id, event.target.value, PriceType);
  if (prices.length > 0) {
    

settingChartData(setChartData, prices);

    
    setIsLoading(false);
  }

 };

 
 
    //  const handlePriceTypeChange = async (event, newType) => {
    //   setIsLoading(true);
    //      setPriceType(newType);

    //      const prices = await getCoinPrices(id, days, newType);
    //      if (prices.length > 0) {
         
       
    //    settingChartData(setChartData, prices);
       
           
    //        setIsLoading(false);
    //      }

    //  };
    const handlePriceTypeChange = async (event, newType) => {
      setIsLoading(true);
      setPriceType(newType);
    
      try {
        const prices = await getCoinPrices(id, days, newType);
        if (prices && prices.length > 0) {
          settingChartData(setChartData, prices);
          setIsLoading(false);
        } else {
          // Handle the case where prices are undefined or have no length
          console.error('Prices are undefined or empty.');
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Error fetching prices:', error);
        // Handle the error appropriately, such as setting isLoading to false or showing an error message
        setIsLoading(false);
      }
    };
    

  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className='grey-wapper' style={{padding: "0rem 1rem"}}>
            <List coin={coinData}  />
          </div>
          <div className='grey-wapper'>
            <SelectDays days={days} handleDaysChange={handleDaysChange}/>

            <TogglePriceType PriceType={PriceType} 
            handlePriceTypeChange={handlePriceTypeChange} />


            <LineChart chartData={chartData} PriceType={PriceType}  />
          </div>
          <CoinInfo heading={coinData.name}
            desc={coinData.desc} />
        </>
      )}
    </div>
  );
}

export default CoinPage;
