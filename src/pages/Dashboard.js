import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import TabsComponent from '../components/Dashboard/Tabs'
import axios from 'axios';
import Search from '../components/Dashboard/Search';
import PaginationComponent from '../components/Dashboard/Pagination';
import Loader from '../components/Loader';
import BackToTop  from "../components/Common/BackToTop/index"
import { Flag } from '@mui/icons-material';
import { get100Coins } from '../functions/get100Coins';
function Dashboard() {
const [coins, setCoins] = useState([]);
const [paginatedCoins, setPaginatedCoins] = useState([]);
const[search, setSearch] = useState("");

const [page, setPage] = useState(1);
const [isLoading, setIsLoading] = useState(true);

const handlePageChange = (event, value) => {
  setPage(value);
  var previousIndex = (value-1)*10;
  setPaginatedCoins(coins.slice(previousIndex, previousIndex+10))
};

const onSearchChange = (e) =>{
setSearch(e.target.value);

};

var filteredCoins = coins.filter((item)=> 
item.name.toLowerCase().includes(search.toLowerCase()) ||
item.symbol.toLowerCase().includes(search.toLocaleLowerCase()));



useEffect(()=>{
getData();
},[]);


const getData = async () =>{
  const myCoins = await get100Coins();
  if(myCoins){
    setCoins(myCoins);
    setPaginatedCoins(myCoins.slice(0,10));
    setIsLoading(false);
  }
};
  return (
  
    <>
      <Header/>
      <BackToTop/>
    {isLoading ? (<Loader/> ): (
        <div>
      
     
        <Search search={search} onSearchChange={onSearchChange} />
        <TabsComponent coins={search ? filteredCoins : paginatedCoins}/>
        { !search  &&
             (<PaginationComponent page={page} handlePageChange={handlePageChange}/> )
        }
    </div>
    )}</>
    
  )
}

export default Dashboard