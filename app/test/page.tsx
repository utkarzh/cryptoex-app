// import PendingPopup from "@/components/withdrawal/withdrawal_form/TransactionStatusPopup";

// import AuthLevel from "@/components/security/AuthLevel";
import SecurityVerificationPopup from "@/components/security/SecurityVerificationPopup";

const Page = () => {
  return (
    <div className="w-[90%] mt-10 mb-10 h-full">
      <SecurityVerificationPopup />
    </div>
  );
};

export default Page;
