import { useTranslations } from "next-intl";
import { BiTrendingUp } from "react-icons/bi";

const topGainers = [
  {
    symbol: "AAVE",
    price: "$45.56",
    change: +8.88,
    color: "bg-purple-400",
  },
  { symbol: "ANT", price: "$302.74", change: +7.23, color: "bg-cyan-400" },
  {
    symbol: "ECA",
    price: "$0.24",
    change: -6.59,
    color: "bg-fuchsia-400",
  },
  { symbol: "GAS", price: "$1.81", change: -4.63, color: "bg-green-400" },
];

export default function TopTranding() {
  const t = useTranslations("marketPage.quickViewTable");
  return (
    <div className="rounded-xl border border-slate-300 dark:border-[#1c1f3a] p-4 w-full  ">
      <h3 className="text-sm mb-2 border-b border-slate-300 dark:border-[#1c1f3a] pb-3">
        {t("tranding")}
      </h3>

      <table className="w-full text-sm text-left">
        <thead className="text-xs dark:text-slate-500 text-slate-600">
          <tr>
            <th className="font-light py-2">{t("tHead.pairs")}</th>
            <th className="font-light py-2">{t("tHead.price")}</th>
            <th className="font-light py-2 text-center ">
              {t("tHead.24hChange")}
            </th>
          </tr>
        </thead>
        <tbody>
          {topGainers.map((coin, index) => (
            <tr key={index} className="text-xs">
              <td className="py-2">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-5 h-5 rounded-full bg-opacity-20 ${coin.color} flex items-center justify-center`}
                  >
                    {/* <span className={`w-2 h-2 rounded-full bg-current`} /> */}
                  </span>
                  <span>{coin.symbol}</span>
                </div>
              </td>
              <td className="py-2">{coin.price}</td>
              <td className="py-2 flex gap-2 justify-center">
                <div
                  className={`flex items-center justify-end gap-1 ${
                    Number(coin.change) > 0 ? "text-green-500" : "text-red-600"
                  } `}
                >
                  {coin.change} %
                  <BiTrendingUp className="text-xs" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
