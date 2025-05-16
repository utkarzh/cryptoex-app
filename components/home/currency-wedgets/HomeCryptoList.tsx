import CoinCard from "@/components/common/CoinCard";
import { saira } from "@/utils/Font";
import React, { FC } from "react";
import { FaFire } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";
import { VscDiffAdded } from "react-icons/vsc";
// import SplineChart from "@/components/common/SplineChart";



type Value = "spot" | "newadded" | "topgainer"

type Props = {
  title: string,
  value: Value,
  onSelect: (data:Value) => void,
  isExpended: boolean,

}
const HomeCryptoList:FC<Props> = ({isExpended, title, value, onSelect}) => {

  const test = [];
  for (let i = 0; i <= 5; i++) {
    if (i % 3 === 0) {
      test.push({
        cointTitle: "BTC",
        coinName: "Bitcoin",
        coinImgUrl: "/images/coins/btc.png",
      });
    } else if (i % 3 === 1) {
      test.push({
        cointTitle: "ETH",
        coinName: "Ethereum",
        coinImgUrl: "/images/coins/ethereum.png",
      });
    } else {
      test.push({
        cointTitle: "SOL",
        coinName: "Solon",
        coinImgUrl: "/images/coins/sol.png",
      });
    }
  }

  const selectHandler = () => {
    console.log("test Data");
    onSelect(value);
  }
  return (
    <div className={`bg-[#161735]  ${isExpended ? "w-full min-w-none md:min-w-md" : "w-full min-w-none md:w-fit md:min-w-fit px-0 md:px-8 opacoty-100 md:opacity-35"}   max-h-screen overflow-x-auto overflow-y-hidden scrollbar-custom  rounded-md px-2  text-white flex flex-col gap-4 transition-all duration-700 ease-in-out`}>
      <div className={`w-[84%] mx-auto flex px-4 mt-4 ${isExpended ? "justify-between" : " justify-between md:justify-center"} `}>
        {/* heading */}
        <div className="w-fit gap-1 flex items-center justify-center" onClick={ selectHandler}>
          {value === "spot" && <FaFire />}
          {value === "newadded" && <VscDiffAdded />}
          {value === "topgainer" && <IoStatsChart />}
          <h2 className={`text-nowrap font-medium text-[18px] cursor-pointer ${saira.className}`}>{title}</h2>
        </div>
        <MdSearch className={`${isExpended ? "block" : "block md:hidden"} text-2xl cursor-pointer`} />
      </div>

      <div className="w-full  border-b border-slate-500"></div>

      <div className="w-full items-start justify-center flex flex-col gap-6">
        <table className=" w-full table-auto">
          <thead >
            <tr className="text-[12px] text-slate-300 ">
              <th className="font-extralight pb-4">Coins</th>
              <th className={` ${isExpended ? "table-cell" : " table-cell md:hidden"} font-extralight pb-4`}>Last Price</th>
              <th className={` ${isExpended ? "table-cell" : "table-cell md:hidden"} font-extralight pb-4`}>24h change</th>
              <th className={` ${isExpended ? "table-cell" : "table-cell md:hidden"} font-extralight pb-4`}>Markets</th>
              <th className={` ${isExpended ? "table-cell" : "table-cell md:hidden"} font-extralight pb-4`}>24h volume</th>
            </tr>
          </thead>

          <tbody className="w-full text-center ">
            {test.map((val, index) => (
              <tr key={index} className="text-[12px] font-normal " >
                <td className="text-[12px] flex justify-center items-center my-3 ">
                  <div className="min-w-[100px]">
                  <CoinCard
                    cointTitle={val.cointTitle}
                    coinName={val.coinName}
                    coinImgUrl={val.coinImgUrl}
                    key={index}
                  />
                  </div>
                </td>

                
                <td className={` ${isExpended ? "table-cell" : "table-cell md:hidden"}`} >
                  <div className="text-nowrap">$ 2,56,622.53 </div>
                </td>
                <td className={` ${isExpended ? "table-cell" : "table-cell md:hidden"}`} >
                  <div className="text-nowrap"> +1.19%</div>
                </td>

                <td className={` ${isExpended ? "table-cell" : "table-cell md:hidden"}`}>
                  {/* <SplineChart width={100} height={100}/> */}
                  Graph
                   </td>
                <td className={` ${isExpended ? "table-cell" : "table-cell md:hidden"}`}>111154564.15</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomeCryptoList;
