import React from "react";
import ContentCard from "./ContentCard";
import StakeTable from "./StakeTable";
import Faq from "@/components/common/faq/Faq";

const test = [
  {
    title: "Staking",
    content:
      "Staking lets you earn rewards on your crypto. You can stake or redeem anytime, Most assets have a redemption period with no rewards during that time.",
  },
  {
    title: "Term",
    content:
      "Your holding period for the product determines the yield. Flexible-term products allow you to access your investments as needed.",
  },
  {
    title: "Redemption period",
    content:
      "This is set by the staking protocol. Each cryptocurrency has its own waiting period for unstaking assets. No rewards or yield accrue during this time.",
  },
];

const testFaq = [
  {
    question: "What is crypto staking and how does it work?",
    answer:
      "Staking is the process of locking up your cryptocurrency to support the operations of a blockchain network. In return, you earn rewards—similar to earning interest. By staking your assets, you're helping validate transactions and secure the network. The longer you stake, the more rewards you can accumulate, depending on the token and network conditions.",
  },
  {
    question: "What is crypto staking and how does it work?",
    answer:
      "Staking is the process of locking up your cryptocurrency to support the operations of a blockchain network. In return, you earn rewards—similar to earning interest. By staking your assets, you're helping validate transactions and secure the network. The longer you stake, the more rewards you can accumulate, depending on the token and network conditions.",
  },
  {
    question: "What is crypto staking and how does it work?",
    answer:
      "Staking is the process of locking up your cryptocurrency to support the operations of a blockchain network. In return, you earn rewards—similar to earning interest. By staking your assets, you're helping validate transactions and secure the network. The longer you stake, the more rewards you can accumulate, depending on the token and network conditions.",
  },
  {
    question: "What is crypto staking and how does it work?",
    answer:
      "Staking is the process of locking up your cryptocurrency to support the operations of a blockchain network. In return, you earn rewards—similar to earning interest. By staking your assets, you're helping validate transactions and secure the network. The longer you stake, the more rewards you can accumulate, depending on the token and network conditions.",
  },
  {
    question: "What is crypto staking and how does it work?",
    answer:
      "Staking is the process of locking up your cryptocurrency to support the operations of a blockchain network. In return, you earn rewards—similar to earning interest. By staking your assets, you're helping validate transactions and secure the network. The longer you stake, the more rewards you can accumulate, depending on the token and network conditions.",
  },
];

const StakeMain = () => {
  return (
    <div className="w-[95%] sm:w-[85%] md:w-[80%]  lg:w-[70%] mx-auto py-20 h-full">
      {/* content cards */}
      <div className="w-full flex flex-col sm:flex-row gap-4 justify-center">
        {test.map((val, index) => (
          <ContentCard title={val.title} content={val.content} key={index} />
        ))}
      </div>

      {/* table */}
      <StakeTable />
      {/* faq */}
      <Faq data={testFaq} />
    </div>
  );
};

export default StakeMain;
