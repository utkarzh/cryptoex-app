import { useTranslations } from "next-intl";
import { FC } from "react";
import { BiTrendingDown, BiTrendingUp } from "react-icons/bi";
import { Analytics_int } from "../home/types";
import { formatDecimalNumber } from "@/utils/formatDecimalNumber";
import CoinCard from "../common/CoinCard";
import Link from "next/link";

type Props = {
  listData: Analytics_int[];
};

const NewListings: FC<Props> = ({ listData }) => {
  const t = useTranslations("marketPage.quickViewTable");
  return (
    <div className="rounded-xl border border-slate-300 dark:border-[#1c1f3a] p-4 w-full ">
      <h3 className="text-sm mb-2 border-b border-slate-300 dark:border-[#1c1f3a] pb-3">
        {t("newListing")}
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
          {listData.map((coin, index) => (
            <tr key={index} className="text-xs">
              <td className="py-2">
                <Link href={`/trade/${coin.pair}`} className="">
                  <CoinCard
                    isSmall={true}
                    cointTitle={coin.pair}
                    coinName={coin.pair}
                    coinImgUrl={coin.logopath}
                  />
                </Link>
              </td>
              <td className="py-2">{formatDecimalNumber(coin.last)}</td>
              <td className="py-2 flex gap-2 justify-center">
                <div
                  className={`flex items-center justify-end gap-1 ${
                    Number(coin.rate) > 0
                      ? "text-green-500"
                      : coin.rate < 0
                      ? "text-red-600"
                      : ""
                  } `}
                >
                  {coin.rate.toFixed(2)} %
                  {coin.rate > 0 ? (
                    <BiTrendingUp className="text-xs" />
                  ) : coin.rate < 0 ? (
                    <BiTrendingDown className="text-xs" />
                  ) : (
                    ""
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewListings;
