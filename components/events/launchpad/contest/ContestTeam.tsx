import { useTranslations } from "next-intl";
import React, { FC } from "react";

type Props = {
  teamHtmlLink: string;
};

const ContestTeam: FC<Props> = ({ teamHtmlLink }) => {
  const t = useTranslations("launchPad.contest.terms");
  return (
    <div className="w-full p-6 space-y-4">
      <h4 className="text-xs">{t("team")}</h4>
      <div className="w-full flex gap-4">
        <div dangerouslySetInnerHTML={{ __html: teamHtmlLink }} />
      </div>
    </div>
  );
};

export default ContestTeam;
