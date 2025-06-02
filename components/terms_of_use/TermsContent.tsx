"use client";
export const termsOfUse = [
  {
    title: "Article 1 Scope of application of Terms of Use",
    points: [
      "These Terms of Use apply to us and the Members (including persons who were Members in the past) and prescribe all matters concerning the rights and obligations of the Company and the Members in relation to the Services.",
      "It is a condition precedent of using the Services that each Member understands the content of the full text of the Explanation on Important Matters and these Terms of Use and agrees that these Terms of Use prescribe all matters concerning the rights and obligations of the Company and the Members in relation to the Services.",
      "If the Member is a minor, the Member must obtain the consent of his or her legal guardian before using the Services.",
      "If the Member uses the Services, it will be deemed that the Member has agreed that these Terms of Use prescribe all matters concerning the rights and obligations of the Company and the Member in relation to the Services.",
    ],
  },
  {
    title: "Article 2 Members",
    points: [
      "A person who wishes to become a Member must submit a membership registration application in accordance with our prescribed procedures. We may decide to refuse a membership registration application at our discretion, and only a person who has been accepted by us may become a Member.",
      "After a Member completes registration for the Services, we may ask the Member to again submit necessary documents designated by us if it is necessary to perform identity verification at the time of a transaction as prescribed by relevant law and ordinance or we otherwise deem it necessary...",
      "If the Member wishes to cancel his or her registration as a Member, the Member may cancel his or her Member registration in accordance with our prescribed procedures.",
    ],
  },
  {
    title: "Article 3 Management of login ID and password",
    points: [
      "The Member must manage his or her registered login ID and password at his or her own responsibility, and must not lend, assign, sell, or otherwise dispose of such information to a third party.",
      "We will verify the identity of the Member by confirming that the login ID and password entered when the user logs in to our website or uses the Services matches the pre-set login ID and password. If we treat the user as a genuine user as a result of such verification, transactions executed on the basis of such verification will be treated as valid unless the misidentification of the Member is due to reasons attributable to us.",
      "The Member bears all liability for damage caused by (i) leakage ID or password due to the reason attributable to the Member and (ii) unauthorized use or the like of his/her account by a third party using such leaked login ID and we will not bear any liability for such damage.",
      "If the Member becomes aware that the login ID or password has been stolen or is being used by a third party, the Member must immediately notify us to that effect and follow our instructions.",
    ],
  },
  {
    title: "Article 4 Change of registration information",
    points: [
      "If there is any change to the registration information of a Member, the Member must notify us by our prescribed method without delay regarding the changed information, and submit the necessary documents requested by us.",
    ],
  },
  {
    title: "Article 1 Scope of application of Terms of Use",
    points: [
      "These Terms of Use apply to us and the Members (including persons who were Members in the past) and prescribe all matters concerning the rights and obligations of the Company and the Members in relation to the Services.",
      "It is a condition precedent of using the Services that each Member understands the content of the full text of the Explanation on Important Matters and these Terms of Use and agrees that these Terms of Use prescribe all matters concerning the rights and obligations of the Company and the Members in relation to the Services.",
      "If the Member is a minor, the Member must obtain the consent of his or her legal guardian before using the Services.",
      "If the Member uses the Services, it will be deemed that the Member has agreed that these Terms of Use prescribe all matters concerning the rights and obligations of the Company and the Member in relation to the Services.",
    ],
  },
  {
    title: "Article 2 Members",
    points: [
      "A person who wishes to become a Member must submit a membership registration application in accordance with our prescribed procedures. We may decide to refuse a membership registration application at our discretion, and only a person who has been accepted by us may become a Member.",
      "After a Member completes registration for the Services, we may ask the Member to again submit necessary documents designated by us if it is necessary to perform identity verification at the time of a transaction as prescribed by relevant law and ordinance or we otherwise deem it necessary...",
      "If the Member wishes to cancel his or her registration as a Member, the Member may cancel his or her Member registration in accordance with our prescribed procedures.",
    ],
  },
  {
    title: "Article 3 Management of login ID and password",
    points: [
      "The Member must manage his or her registered login ID and password at his or her own responsibility, and must not lend, assign, sell, or otherwise dispose of such information to a third party.",
      "We will verify the identity of the Member by confirming that the login ID and password entered when the user logs in to our website or uses the Services matches the pre-set login ID and password. If we treat the user as a genuine user as a result of such verification, transactions executed on the basis of such verification will be treated as valid unless the misidentification of the Member is due to reasons attributable to us.",
      "The Member bears all liability for damage caused by (i) leakage ID or password due to the reason attributable to the Member and (ii) unauthorized use or the like of his/her account by a third party using such leaked login ID and we will not bear any liability for such damage.",
      "If the Member becomes aware that the login ID or password has been stolen or is being used by a third party, the Member must immediately notify us to that effect and follow our instructions.",
    ],
  },
  {
    title: "Article 4 Change of registration information",
    points: [
      "If there is any change to the registration information of a Member, the Member must notify us by our prescribed method without delay regarding the changed information, and submit the necessary documents requested by us.",
    ],
  },
];

export default function TermsContent() {
  return (
    <section className="px-6 py-10 mb-10 max-w-4xl mx-auto bg-white dark:bg-[#161735] rounded-md">
      <h1 className="text-sm font-semibold">IndoEx Exchange Terms of Use</h1>
      <p className="mt-2 text-[11px] font-light ">
        These Terms of Use prescribe the rights and obligations between Members
        (as described in Article 2, and including persons who were Members in
        the past) and Fisco Cryptocurrency Exchange Inc. (“we” or the “Company”)
        in connection with the online services “IndoEx Exchange” and “IndoEx
        Instant Exchange” that we provide (at the domain https: //Indoex.io/;
        the “Services”). Before using the Services, please read the “Explanation
        on Important Matters” and the full text of these Terms of Use (which
        includes all rules, explanatory documents, and other various
        regulations, etc. relating to the Services and posted from time to time
        on our website; the same hereinafter).
      </p>

      {termsOfUse.map((section, index) => (
        <div key={index} className="mb-4 mt-6">
          <h2 className="text-sm font-semibold">{section.title}</h2>
          <ol className="list-decimal list-inside space-y-1 mt-2 text-[11px] font-light">
            {section.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ol>
        </div>
      ))}
    </section>
  );
}
