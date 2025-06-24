import Announcements from "@/components/announcements/Announcements";

import React, { FC } from "react";

type Props = {
  params: Promise<{ type: string; locale: string }>;
};

const page: FC<Props> = async ({ params }) => {
  const type = (await params).type;

  return (
    <>
      <Announcements type={type} />
    </>
  );
};

export default page;
