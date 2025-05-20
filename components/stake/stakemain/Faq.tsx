import React from "react";
import FaqCard from "./FaqCard";

// type Props = {}

const Faq = () => {
  const test = [
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
  return (
    <>
      <section className="w-full mt-20 flex flex-col gap-6">
        {/* heading */}
        <h1 className="text-xl">FAQ</h1>

        <div className="flex flex-col gap-4">
          {test.map((val, index) => (
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
