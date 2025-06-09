"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FC, useState } from "react";
const predefinedAvatars = [
  "/images/avatar/avatar1.png",
  "/images/avatar/avatar1.png",
  "/images/avatar/avatar1.png",
  "/images/avatar/avatar1.png",
  "/images/avatar/avatar1.png",
  "/images/avatar/avatar1.png",
  "/images/avatar/avatar1.png",
  "/images/avatar/avatar1.png",
  "/images/avatar/avatar1.png",
  "/images/avatar/avatar2.png",
  "/images/avatar/avatar2.png",
  "/images/avatar/avatar2.png",
  "/images/avatar/avatar2.png",
  "/images/avatar/avatar2.png",
  "/images/avatar/avatar2.png",
  "/images/avatar/avatar2.png",
  "/images/avatar/avatar2.png",
  "/images/avatar/avatar2.png",
  "/images/avatar/avatar2.png",
  "/images/avatar/avatar2.png",
  "/images/avatar/avatar2.png",
  "/images/avatar/avatar2.png",
  "/images/avatar/avatar2.png",
  "/images/avatar/avatar2.png",
  "/images/avatar/avatar2.png",
];

type Props = {
  onUpload: (data: string) => void;
};

const ChangeImagePicker: FC<Props> = ({ onUpload }) => {
  const t = useTranslations("dashboard.profile.profile.photo.popUp");
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [tab, setTab] = useState<"avatar" | "system_upload">("avatar");

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
      setSelectedAvatar(null); // unselect predefined
      onUpload(imageUrl);
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center space-x-4 mb-4 cursor-pointer">
        {["avatar", "system_upload"].map((val) => (
          <div
            key={val}
            onClick={() => setTab(val as typeof tab)}
            className={`border-b-2 ${
              tab === val
                ? "text-green-500  border-green-500"
                : "border-transparent text-inherit"
            } pb-1 text-[10px] font-normal`}
          >
            {/* {val === "avatar" ? "Avatar" : "Upload from this device"} */}
            {t(`${val}`)}
          </div>
        ))}
      </div>

      {tab === "avatar" ? (
        <div className="grid grid-cols-6 gap-3">
          {predefinedAvatars.map((src, i) => (
            <div
              key={i}
              className={`w-6 h-6 rounded-full overflow-hidden border-2 ${
                selectedAvatar === src
                  ? "border-green-400"
                  : "border-transparent"
              } cursor-pointer`}
              onClick={() => {
                setSelectedAvatar(src);
                setUploadedImage(null); // unselect uploaded
                onUpload(src);
              }}
            >
              <Image
                src={src}
                alt={`Avatar ${i + 1}`}
                className="w-full h-full object-cover"
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center">
          {uploadedImage && (
            <div className="w-full py-3  flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-green-400">
                <Image
                  src={uploadedImage}
                  alt="Uploaded"
                  className="w-full h-full object-cover"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          )}
          <label className="cursor-pointer text-gray-300 hover:text-white ">
            <span className=" text-xs font-normal">{t("clickSelect")}</span>
            <input
              type="file"
              accept="image/*"
              onChange={handleUpload}
              className="hidden"
            />
          </label>
        </div>
      )}
    </div>
  );
};

export default ChangeImagePicker;
