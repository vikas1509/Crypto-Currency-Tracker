// import React, { useState, useEffect } from "react";
// import { get100Coins } from "../../../functions/get100Coins";
// import MenuItem from "@mui/material/MenuItem";
// import Select from "@mui/material/Select";
// import "./styles.css";

// function SelectCoins(cryptol, crypto2, handleCoinChange) {
//     const [allCoins, setAllCoins] = useState([]);

//     const styles = {
//         height: "2.5rem",
//         color: "var(--white)",
//         "& .MuiOutlinedInput-notchedOutline": {
//             borderColor: "var(--white)",
//         },
//         "& MuiSvgIcon-root": {
//             color: "var(--white)",
//         },
//         "&:hover": {
//             "&& fieldset": {
//                 borderColor: "#3a80e9",
//             },
//         },
//     };



//     useEffect(() => {
//         getData();
//     }, []);

//     async function getData() {
//         const myCoins = await get100Coins();
//         setAllCoins(myCoins);
//     }

//     return (
//         <div className="coins-flex">
//             <p>Crypto 1</p>
//             <Select
//                 sx={styles}
//                 value={cryptol}
//                 label="Crypto 1"
//                 onChange={(event) => handleCoinChange(event, false)}
//             >
//                 {allCoins.map((coin, i) => (
//                     <MenuItem key={i} value={coin.id}>
//                         {coin.name}
//                     </MenuItem>
//                 ))}
//             </Select>
//             <p>Crypto 2</p>
//             <Select
//                 sx={styles}
//                 value={crypto2}
//                 label="Crypto 2"
//                 onChange={(event) => handleCoinChange(event, true)}
//             >
//                 {allCoins.map((coin,i) => (
//                     <MenuItem key={i} value={coin.id}>
//                         {coin.name}
//                     </MenuItem>
//                 ))}
//             </Select>
//         </div>
//     );
// }

// export default SelectCoins;





import React, { useState, useEffect } from "react";
import "./styles.css";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { get100Coins } from "../../../functions/get100Coins";
const SelectCoins = ({ crypto1, crypto2, handleCoinChange }) => {
  const styles = {
    height: "2.5rem",
    color: "var(--white)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white)",
    },
    "& .MuiSvgIcon-root": {
      color: "var(--white)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#3a80e9",
      },
    },
  };
  const [allCoins, setAllCoins] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const myCoins = await get100Coins();
    if (myCoins) {
      setAllCoins(myCoins);
    }
  };
  return (
    <div className="coins-flex">
      <p>Crypto 1</p>
      <Select
        sx={styles}
        value={crypto1}
        label="Crypto 1"
        onChange={(event) => handleCoinChange(event, false)}
      >
        {allCoins
          .filter((item) => item.id != crypto2)
          .map((coin,i) => (
            <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>
          ))}
      </Select>

      <p>Crypto 2</p>
      <Select
        sx={styles}
        value={crypto2}
        label="Crypto 2"
        onChange={(event) => handleCoinChange(event, true)}
      >
        {allCoins
        .filter((item) => item.id != crypto1)
        .map((coin, i) => (
          <MenuItem key={i} value={coin.id}>
            {coin.name}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default SelectCoins;
