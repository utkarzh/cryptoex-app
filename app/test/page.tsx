// import Auth from "@/components/auth/Auth";
// import CryptoConvert from "@/components/convert/ConvertTest1";
// import LoginForm from "@/components/auth/LoginForm";

import AirdropJoinCard from "@/components/airdrop/contest/AirdropJoinCard";
import ParticipantCard from "@/components/common/ParticipantCard";

const Page = () => {
  return (
    <div className="w-[90%] mx-auto h-full">
      {/* <LoginForm /> */}
      {/* <Auth /> */}
      {/* <CryptoConvert /> */}
      {/* <TopGainers /> */}
      {/* <TradeTable /> */}
      <AirdropJoinCard />
      <ParticipantCard Participants={6} />
    </div>
  );
};

export default Page;
