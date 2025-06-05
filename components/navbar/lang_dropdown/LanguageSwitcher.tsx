// components/LanguageSwitcher.tsx
"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { localeObjects } from "@/i18n/routing";
// import {LanguagesIcon} from 'lucide-react'; // optional

export default function LanguageSwitcher() {
  //   const t = useTranslations(); // optional if you want localized language names
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  console.log("The data from routing", localeObjects);

  return (
    <div className=" h-fit static mt-2  rounded z-50 min-w-[120px] flex flex-col gap-2">
      {localeObjects.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => handleLocaleChange(code)}
          className={` w-full cursor-pointer text-left px-4 py-2 text-sm p-3.5 rounded-md dark:hover:bg-[#35354b] hover:bg-slate-200 ${
            code === currentLocale ? "font-bold text-green-600" : ""
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
