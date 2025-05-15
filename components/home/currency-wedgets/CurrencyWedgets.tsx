"use client"
import React, { useState } from 'react'
import HomeCryptoList from './HomeCryptoList';

type SelectedList = "spot" | "newadded" | "topgainer"

const CurrencyWedgets = () => {

 
  const [selectedList, setSelectedList] = useState<SelectedList>("spot");

  const selectListHandler = (data:SelectedList) => {
    console.log("Function clicked and the data is", data )
    setSelectedList(data);
  }

  console.log("SelectedList", selectedList)
  return (
    <div className="w-full pt-14  flex justify-center p-4 sm:p-6 md:p-8 lg:p-10  ">
      {/* container */}
      <div className="w-full flex flex-col md:flex-row gap-2 overflow-x-auto scrollbar-custom overflow-y-hidden ">

        <HomeCryptoList isExpended={selectedList === "spot"} title='Spot' value="spot" onSelect={selectListHandler} />
        <HomeCryptoList isExpended={selectedList === "newadded"} title='New Listed' value="newadded" onSelect={selectListHandler}/>
        <HomeCryptoList isExpended={selectedList === "topgainer"} title='Top Gainer' value="topgainer" onSelect={selectListHandler}/>

      </div>
    </div>
  );
}

export default CurrencyWedgets