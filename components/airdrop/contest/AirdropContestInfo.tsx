import Image from "next/image";

export default function AirdropContestInfo() {
  return (
    <div className=" flex flex-col gap-6 p-6 pt-0">
      {/* heading */}
      <div className="flex gap-2 items-center">
        <Image
          src="/images/test/airdrop_contest_img.png"
          alt=""
          width={100}
          height={100}
          className="w-16 h-auto rounded-full"
        />
        <h1 className="text-2xl font-bold text-center ">MyTurnCrypto (MTCS)</h1>
      </div>

      <section className="space-y-2">
        <h2 className="text-2xl font-semibold text-green-500">
          MyTurnCrypto Solutions (MTCS) Completed
        </h2>

        <h4 className="text-lg">About MyTurnCrypto Solutions</h4>
        <p className="text-[10px] font-normal opacity-80">
          awkit is a next-generation meme cryptocurrency designed to address the
          challenges of scalability, security, and user adoption in the Ethereum
          blockchain ecosystem. By leveraging advanced consensus mechanisms,
          innovative tokenomics, and a community-centric approach, Rawkit aims
          to redefine digital transactions and decentralized finance (DeFi)
        </p>
        <p className="text-[10px] font-normal opacity-80">
          awkit is a next-generation meme cryptocurrency designed to address the
          challenges of scalability, security, and user adoption in the Ethereum
          blockchain ecosystem. By leveraging advanced consensus mechanisms,
          innovative tokenomics, and a community-centric approach, Rawkit aims
          to redefine digital transactions and decentralized finance (DeFi)
        </p>

        <p className="text-[10px] font-normal opacity-80">
          awkit is a next-generation meme cryptocurrency designed to address the
          challenges of scalability, security, and user adoption in the Ethereum
          blockchain ecosystem. By leveraging advanced consensus mechanisms,
          innovative tokenomics, and a community-centric approach, Rawkit aims
          to redefine digital transactions and decentralized finance (DeFi)
        </p>
      </section>

      {/* how to join */}
      <section className="space-y-4 pt-2">
        <h3 className="text-xs font-normal ">
          How to join the MyTurnCrypto Solutions Airdrop?
        </h3>

        <div className="w-full border rounded-md p-4  border-slate-500">
          <div className="w-full flex justify-between border-b border-slate-500 pb-3 mt-1">
            <span className="text-[10px] opacity-80">Token Per Airdrop</span>
            <span className="text-[11px]">up to 100000000 MTCS</span>
          </div>

          <div className="w-full flex justify-between border-b border-slate-500 pb-3 mt-3">
            <span className="text-[10px] opacity-80">Referral</span>
            <span className="text-[11px]">10000 MTCS</span>
          </div>

          <div className="w-full flex justify-between  pb-0 mt-3">
            <span className="text-[10px] opacity-80">KYC</span>
            <span className="text-[11px]">KYC is not a requirement</span>
          </div>
        </div>
      </section>

      {/* guide */}
      <section className="space-y-4 pt-2">
        <h3 className="text-xs font-normal ">
          Step-by-step Guide for MyTurnCrypto Solutions Airdrop
        </h3>

        <div className="w-full">
          <p className="text-[10px] font-normal opacity-80">
            awkit is a next-generation meme cryptocurrency designed to address
            the challenges of scalability, security, and user adoption in the
            Ethereum blockchain ecosystem. By leveraging advanced consensus
            mechanisms, innovative tokenomics, and a community-centric approach,
            Rawkit aims to redefine digital transactions and decentralized
            finance (DeFi)
          </p>
          <p className="text-[10px] font-normal opacity-80">
            Don&apos;t forgot to join our Telegram Channel, follow us on Twitter
            and subscribe our newsletter to receive new airdrops!
          </p>
        </div>
      </section>

      {/* overview */}
      <section className="space-y-4 pt-2">
        <h3 className="text-xs font-normal ">Overview</h3>

        <div className="w-full space-y-1">
          <p className="text-[10px] font-normal opacity-80">
            <span>Website: </span>
            <a
              href="https://mtcs.myturncrypto.com"
              target="_blank"
              className="text-green-600 underline hover:scale-105 transition-all duration-200"
            >
              https://mtcs.myturncrypto.com/
            </a>
          </p>
          <p className="text-[10px] font-normal opacity-80">
            <span>Explorer: </span>
            <a
              href="https://bscscan.com/token/0xDeD23b0C81E2a08D07f26E33347590adA801dc53"
              target="_blank"
              className="text-green-600 underline hover:scale-105 transition-all duration-200"
            >
              https://bscscan.com/token/0xDeD23b0C81E2a08D07f26E33347590adA801dc53
            </a>
          </p>
          <p className="text-[10px] font-normal opacity-80">
            <span>Github: </span>
            <a
              href="#"
              target="_blank"
              className="text-green-600 underline hover:scale-105 transition-all duration-200"
            ></a>
          </p>
          <p className="text-[10px] font-normal opacity-80">
            <span>White Paper: </span>
            <a
              href="https://rawkit.xyz/whitepaper"
              target="_blank"
              className="text-green-600 underline hover:scale-105 transition-all duration-200"
            >
              https://rawkit.xyz/whitepaper
            </a>
          </p>
          <p className="text-[10px] font-normal opacity-80">
            <span>Announcement: </span>
            <a
              href="https://rawkit.xyz/"
              target="_blank"
              className="text-green-600 underline hover:scale-105 transition-all duration-200"
            >
              https://rawkit.xyz/
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
