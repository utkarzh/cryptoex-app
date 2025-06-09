import { useTranslations } from "next-intl";
import Image from "next/image";

const tradingCompetitionRules = [
  "Trading Competition period starts at 20 Dec UTC and closes at 04 Jan UTC.",
  "Final Trading Volume data is collected at 04 Jan UTC. This snapshot time is used to build up the winners list.",
  "One Competition - One Crypto asset rule. Only trades on XRGE markets will be counted towards the competition’s results. All trading pairs for the asset are included.",
  "Only users who apply for the competition by pressing the “Participate” button on the competition page are considered participants and may claim the prize. The applications close 12 hours before the competition ends.",
  "Only one account per person is accepted.",
  "Trading to yourself is not counted towards volume.",
  "Each contestant's trading volume is calculated as total amount of the respective instrument (token or coin) traded in IndoEx starting from the time the user applied to participate in the competition.",
  "Prizes are distributed in the form of crypto assets from the Prize Fund.",
];

const rewards = [
  { label: "1st", value: "110 TDCCP" },
  { label: "2nd", value: "90 TDCCP" },
  { label: "3rd", value: "75 TDCCP" },
  { label: "4th", value: "60 TDCCP" },
  { label: "5th", value: "50 TDCCP" },
  { label: "6th", value: "40 TDCCP" },
  { label: "7th", value: "35 TDCCP" },
  { label: "8th", value: "30 TDCCP" },
  { label: "9th", value: "25 TDCCP" },
  { label: "10th", value: "20 TDCCP" },
  { label: "11th-15th", value: "12 each TDCCP" },
  { label: "16th-20th", value: "20 each TDCCP" },
];

const userVolumes = [
  { user: "DEADPH", volume: "922500 USDT" },
  { user: "Ethan", volume: "53350 USDT" },
  { user: "Noah", volume: "52300 USDT" },
  { user: "James", volume: "27208 USDT" },
  { user: "Noah", volume: "52300 USDT" }, // Duplicate entry (intentional)
  { user: "James", volume: "27208 USDT" }, // Duplicate entry (intentional)
];

export default function TradeCompetitionInfo() {
  const t = useTranslations("tradeContest.contest.terms");
  return (
    <div className="w-full flex flex-col gap-6 p-6 pt-0">
      {/* top section */}
      <section className="space-y-2">
        <div>
          <h2 className="text-2xl font-semibold text-green-500">
            RougeCoin (XRGE) {t("tradingCom")}
          </h2>
          <p className="text-[10px] font-light">
            {t("moreTrade")} XRGE, {t("moreWin")}.
          </p>
        </div>

        {/* img */}
        <Image
          src="/images/test/trade_contest_img.png"
          alt=""
          width={500}
          height={500}
          className="w-full h-auto"
        />

        <ul className="flex flex-col ml-4 gap-1 pt-2">
          {tradingCompetitionRules.map((val, index) => (
            <li
              className="text-[10px] font-normal opacity-80 list-disc"
              key={index}
            >
              {val}
            </li>
          ))}
        </ul>
      </section>

      {/* details */}
      <section className="space-y-4 pt-2">
        <h6 className="text-xs font-normal ">{t("details")}</h6>
        <div className="w-full border rounded-md p-4  border-slate-500">
          {rewards.map((val, index) => (
            <div
              className={`w-full ${index === 0 ? "mt-1" : "mt-3"}  ${
                index === rewards.length - 1 ? "pb-1" : "border-b pb-3"
              } flex justify-between  border-slate-500  `}
              key={index}
            >
              <span className="text-[10px] opacity-70">
                {t(`${val.label}`)}
              </span>
              <span className="text-[11px]">{val.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Participation Overview */}
      <section className="space-y-4 pt-2">
        <h6 className="text-xs font-normal ">{t("pOverview")}</h6>
        <div className="w-full  rounded-md p-4 bg-white dark:bg-[#161735]">
          {/* header */}
          <div
            className={`w-full mt-1 pb-3 flex justify-between text-center  `}
          >
            <span className="w-full text-[10px] opacity-70 text-left">
              {t("position")}
            </span>
            <span className="w-full text-[10px] opacity-70 ">{t("user")}</span>
            <span className="w-full text-[11px] text-right ">{t("vol")}</span>
          </div>
          {userVolumes.map((val, index) => (
            <div
              className={`w-full mt-3  ${
                index === userVolumes.length - 1 ? "pb-1" : "border-b pb-3"
              } flex justify-between  border-slate-500 text-center `}
              key={index}
            >
              <span className="w-full text-left text-[10px] opacity-70">
                {index + 1}
              </span>
              <span className="w-full text-[10px] opacity-70">{val.user}</span>
              <span className="w-full text-[11px] text-right">
                {val.volume}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
