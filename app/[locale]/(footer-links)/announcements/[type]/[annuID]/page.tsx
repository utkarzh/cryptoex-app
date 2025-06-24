import AnnouncementsDetails from "@/components/announcements/AnnouncementsDetails";
import React, { FC } from "react";

type Props = {
  params: Promise<{ annuID: string; locale: string }>;
};

const page: FC<Props> = async ({ params }) => {
  const annuId = (await params).annuID;
  return (
    <>
      <AnnouncementsDetails annuId={annuId} />
    </>
  );
};

export default page;
