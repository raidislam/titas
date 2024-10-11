import { useEffect, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function SplashSlider({ setting }) {
  const [showFullImage, setShowFullImage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFullImage(false);
    }, 5 * 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!showFullImage) return null;

  return (
    <div
      className="z-50 fixed inset-0 w-full h-full "
      style={{
        backgroundColor: setting?.home_page ? setting?.home_page : "#00a2e8",
      }}
    >
      <div className="relative">
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col items-center gap-[1.04vw] absolute w-full">
            <div className="h-[15vw]">
              <img
                className="w-[15vw] object-cover"
                src={setting?.logo || "/images/updatedlogo.png"}
                alt="Full screen"
              />
            </div>
            <h2 className="font-poppins text-white font-bold text-[2.25vw]">
              {setting?.company_name || "তিতাস গ্যাস ট্রান্সমিসন অ্যান্ড ডিস্ট্রিবিউশন পিএলসি"}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
