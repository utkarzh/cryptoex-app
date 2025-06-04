import Image from "next/image";
import Countdown from "./CountDown";
import { LuDownload } from "react-icons/lu";

const agtDetails = [
  { label: "Full Name", value: "AvataGo" },
  { label: "Website", value: "https://avatago.com" },
  { label: "Ticker name", value: "AGT" },
  { label: "Session Supply", value: "50000000 AGT" },
  { label: "Total Supply", value: "8,800,000,000 AGT" },
  { label: "IEO Price", value: "10000 AGT = 59.9805 USDT" },
  { label: "IEO Start Date", value: "19-05-2023" },
  { label: "IEO End Date", value: "26-11-2023" },
  { label: "Bonus", value: "+10%" },
  { label: "Technological foundation", value: "BINANCE SMART CHAIN" },
];

export default function LaunchpadContestInfo() {
  return (
    <div className="w-full mx-auto p-6 pt-0 font-sans space-y-8">
      {/* heading */}
      <div className="flex gap-2 items-center">
        <Image
          src="/images/test/launchpad_contest_img.png"
          alt=""
          width={100}
          height={100}
          className="w-16 h-auto rounded-full"
        />
        <h1 className="text-2xl font-bold text-center ">AvataGo (AGT)</h1>
      </div>

      {/* countdown */}
      <section className="space-y-4 pt-2">
        <h6 className="text-xs font-normal ">Countdown</h6>

        <Countdown />
      </section>

      {/* about agt */}
      <section className="space-y-2 pt-2">
        <h6 className="text-xs font-normal ">IEO sale Price</h6>
        <p className="text-2xl text-green-600 font-semibold">
          1 AGT ≈ 0.1 USDT
        </p>
        <h3 className="text-sm font-bold ">About AGT</h3>
        <div className="w-full">
          <p className="text-[10px] font-normal opacity-80">
            AvataGo is an ecosystem platform for AR-based Metaverse. As we live
            with our friends and pets enjoying various event in real world, user
            can make, grow, and own AI Avatar then enjoy various event with them
            in this ecosystem platform.
          </p>
          <p className="text-[10px] font-normal opacity-80">
            AvataGo is an ecosystem platform for AR-based Metaverse. As we live
            with our friends and pets enjoying various event in real world, user
            can make, grow, and own AI Avatar then enjoy various event with them
            in this ecosystem platform.
          </p>
          <p className="text-[10px] font-normal opacity-80">
            AvataGo is an ecosystem platform for AR-based Metaverse. As we live
            with our friends and pets enjoying various event in real world, user
            can make, grow, and own AI Avatar then enjoy various event with them
            in this ecosystem platform.
          </p>
          <p className="text-[10px] font-normal opacity-80">
            AvataGo is an ecosystem platform for AR-based Metaverse. As we live
            with our friends and pets enjoying various event in real world, user
            can make, grow, and own AI Avatar then enjoy various event with them
            in this ecosystem platform.
          </p>
        </div>
      </section>

      {/* details */}
      <section className="space-y-4 pt-2">
        <h6 className="text-xs font-normal ">Details</h6>
        <div className="w-full border rounded-md p-4  border-slate-500">
          {agtDetails.map((val, index) => (
            <div
              className={`w-full ${index === 0 ? "mt-1" : "mt-3"}  ${
                index === agtDetails.length - 1 ? "pb-1" : "border-b pb-3"
              } flex justify-between  border-slate-500  `}
              key={index}
            >
              <span className="text-[10px] opacity-80">{val.label}</span>
              <span className="text-[11px]">{val.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* documents */}
      <section className="space-y-4 pt-2">
        <h6 className="text-xs font-normal ">Documents</h6>

        {/* button */}
        <button className="w-fit bg-green-500 hover:bg-green-600 text-black font-medium py-1.5 px-3 rounded-full transition text-xs cursor-pointer flex gap-1 items-center">
          White Paper <LuDownload className="text-sm" />
        </button>
      </section>
    </div>
  );
}
