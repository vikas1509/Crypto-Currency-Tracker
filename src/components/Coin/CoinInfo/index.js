import React, { useState } from 'react'
import "./styles.css";
import { color, useScroll } from 'framer-motion';

function CoinInfo({heading, desc}) {
    const shortDesc = desc.slice(0,350) +"<p style='color:var(--gery)'> Read More... </p>";
    const longDesc = desc+"<p style='color:var(--gery)'> Read Less... </p>";


    const[flag, setFlag]  = useState(false);


  return (
    <div className='grey-wapper'>
     <h2 className='coin-info-heading'>{heading}</h2>
    {desc.length>350 ?( <p 
     onClick={()=>setFlag(!flag)}
     className='coin-info-desc'
      dangerouslySetInnerHTML={{__html: !flag ? shortDesc:longDesc}}
      />):
  (
    <p dangerouslySetInnerHTML={{__html: desc}}/>
  )}
      </div>
  );
}

export default CoinInfo