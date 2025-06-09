import React, { FC } from "react";
import FaqCard from "./FaqCard";
import { saira } from "@/utils/Font";
import { useTranslations } from "next-intl";

type FaqData = {
  question: string;
  answer: string;
};

type Props = {
  data: FaqData[];
};

const Faq: FC<Props> = ({ data }) => {
  const t = useTranslations("stakingPage");
  return (
    <>
      <section className="w-full mt-10 flex flex-col gap-6">
        {/* heading */}
        <h1 className={` ${saira.className} text-xl`}>{t("faq.label")}</h1>

        <div className="flex flex-col gap-4">
          {data.map((val, index) => (
            <FaqCard
              question={val.question}
              answer={val.answer}
              key={index}
              defaultVisibility={index === 0 ? true : false}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Faq;
