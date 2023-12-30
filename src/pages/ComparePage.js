import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import { useScroll } from 'framer-motion'
import { getCoinPrices } from '../functions/getCoinPrices';
import { getCoinData } from '../functions/getCoinData';
import { coinObject } from '../functions/convertObject';
import SelectCoins from '../components/Compare/SelectCoins';
import SelectDays from '../components/Coin/SelectDays';
import Loader from '../components/Loader';
function ComparePage() {
    const [crypto1, setCrypto1] = useState("bitcoin");
    const [crypto2, setCrypto2] = useState("ethereum");
    const[crypto1Data, setCrypto1Data] = useState({});
    const[crypto2Data, setCrypto2Data] = useState({});
  const [isLoading, setIsLoading] = useState(true);
    const [days, setDays] = useState(30);
const [priceType, setPriceType] = useState("prices");


function handleDaysChange(event){
    setDays(event.target.value);

}


useEffect(()=>{
    getData();
},[]);
async function getData() {
    try {
        const data1 = await getCoinData(crypto1);
        const data2 = await getCoinData(crypto2);

        if (data1) {
            coinObject(setCrypto1Data, data1);
        }

        if (data2) {
            coinObject(setCrypto2Data, data2);
        }

        if (data1 && data2) {
            const prices1 = await getCoinPrices(crypto1, days, priceType);
            const prices2 = await getCoinPrices(crypto2, days, priceType);

            if (prices1.length > 0 && prices2.length > 0) {
                // Update state or perform necessary actions with prices1 and prices2
            }

            setIsLoading(false);
        }
    } catch (error) {
        // Handle errors
        setIsLoading(false); // Set loading to false on error
        console.error("Error fetching data:", error);
    }
}


const handleCoinChange = async (event, isCoin2) => {
    setIsLoading(true);
    const selectedCrypto = event.target.value;
    
    try {
        if (isCoin2) {
            setCrypto2(selectedCrypto);
            const data = await getCoinData(selectedCrypto);
            coinObject(setCrypto2Data, data);
        } else {
            setCrypto1(selectedCrypto);
            const data = await getCoinData(selectedCrypto);
            coinObject(setCrypto1Data, data);
        }

        const prices1 = await getCoinPrices(crypto1, days, priceType);
        const prices2 = await getCoinPrices(crypto2, days, priceType);

        // Update state or perform necessary actions with prices1 and prices2

        setIsLoading(false);
    } catch (error) {
        // Handle errors
        setIsLoading(false); // Set loading to false on error
        console.error("Error handling coin change:", error);
    }
};

  return (
    <div>

        <Header/>
        {isLoading ? (<Loader/>) :(
            <>
            <div className='coins-days-flex'>
    <SelectCoins crypto1={crypto1} 
    handleCoinChange={handleCoinChange}
     crypto2={crypto2} /> 

     <SelectDays days={days} 
     handleDaysChange={handleDaysChange}
      noPTag={true}/>

    </div>
            </>
        )}
    
    </div>
  )
}

export default ComparePage