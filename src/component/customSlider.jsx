import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { getMembers } from "../services/api";
import Card from "./Card";

export default function CustomSlider() {
  const [slides, setSlides] = useState([]);
  const [notice, setNotice] = useState([]);
  const [tvcList, setTvcList] = useState([]);
  const [currentTitle, setCurrentTitle] = useState("");
  const [companyTitle, setCompanyTitle] = useState("");
  const [showFullImage, setShowFullImage] = useState(true);

  console.log(slides);

  useEffect(() => {
    // Fetch users when the component mounts
    getMembers()
      .then((response) => {
        setSlides(response.data.slides);
        setNotice(response.data.notices);
        setTvcList(response.data.custom_screens);

        setCurrentTitle(slides[0]?.company_name);
        setCompanyTitle(slides[0]?.title);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, [showFullImage]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFullImage(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 800,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentTitle(slides[newIndex].company_name);
      setCompanyTitle(slides[newIndex].title);
    },
    draggable: false,
  };

  const viddeoSettings = {
    dots: false, // Show dots for each slide
    fade: true, // Enable fade effect between slides
    infinite: true, // Enable infinite scrolling of slides
    speed: 500, // Slide transition speed (0.5s)
    slidesToShow: 1, // Only show 1 slide at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay slide every 3 seconds
    pauseOnHover: false, // Don't stop autoplay when hovering over the slider
    waitForAnimate: false, // Don't wait for animation to finish before next slide
    arrows: false, // Hide navigation arrows if not needed
  };

  return (
    <div className="">
      {showFullImage ? (
        <div className="fixed inset-0 w-full h-full bg-[#00a3e8]">
          <div className="relative">
            <img
              className="w-full h-full object-cover"
              src="/images/titasRound.png"
              alt="Full screen"
            />
            <h2 className="absolute z-10 text-white font-bold text-5xl bottom-20 left-96">
              তিতাস গ্যাস ট্রান্সমিসন অ্যান্ড ডিস্ট্রিবিউশন পিএলসি
            </h2>
          </div>
        </div>
      ) : (
        <div className="flex h-screen overflow-hidden">
          {/* Main Content Area (80% width) */}
          <div className="w-4/5 h-full">
            {/* Header */}
            <header className="w-full p-4 bg-gray-800 text-white flex items-center z-10">
              <div>
                <img className="h-16" src="/images/logo-1.png" alt="logo" />
              </div>
              <div className="flex items-center justify-center w-full">
                <div className="text-center">
                  <h2 className="text-4xl mb-2">{currentTitle}</h2>
                  <h2 className="text-3xl underline">{companyTitle}</h2>
                </div>
              </div>
            </header>

            {/* Slider Section */}
            <div className="h-full py-8">
              <Slider {...settings}>
                {slides?.map((slide, index) => (
                  <div
                    key={index}
                    className="h-full flex justify-center items-center"
                  >
                    {/*<div className="grid grid-cols-3 gap-2 justify-center divosvai">
                      {slide.cardsContent.map((card, cardIndex) => (
                        <div key={cardIndex} className="w-full flex justify-center items-center">
                          <Card card={card} />
                        </div>
                      ))}
                    </div>*/}
                    {slide.cardsContent.length === 6 && (
                      <div className="grid grid-cols-3 gap-1 justify-center">
                        {slide.cardsContent.map((card, cardIndex) => (
                          <div
                            key={cardIndex}
                            className="w-full flex justify-center items-center"
                          >
                            <Card card={card} />
                          </div>
                        ))}
                      </div>
                    )}
                    {slide.cardsContent.length === 5 && (
                      <>
                        <div className="grid grid-cols-3 gap-1 justify-center">
                          {slide.cardsContent
                            .slice(0, 3)
                            .map((card, cardIndex) => (
                              <div
                                key={cardIndex}
                                className="w-full flex justify-center items-center"
                              >
                                <Card card={card} />
                              </div>
                            ))}
                        </div>
                        <div className="grid grid-cols-2 gap-1 justify-center mt-1">
                          {slide.cardsContent
                            .slice(3)
                            .map((card, cardIndex) => (
                              <div
                                key={cardIndex}
                                className="w-full flex justify-center items-center"
                              >
                                <Card card={card} />
                              </div>
                            ))}
                        </div>
                      </>
                    )}
                    {slide.cardsContent.length === 4 && (
                      <div className="grid grid-cols-2 gap-3 justify-center">
                        {slide.cardsContent.map((card, cardIndex) => (
                          <div
                            key={cardIndex}
                            className="w-full flex justify-center items-center"
                          >
                            <Card card={card} />
                          </div>
                        ))}
                      </div>
                    )}
                    {slide.cardsContent.length === 3 && (
                      <div className="grid grid-cols-3 gap-1 justify-center">
                        {slide.cardsContent.map((card, cardIndex) => (
                          <div
                            key={cardIndex}
                            className="w-full flex justify-center items-center"
                          >
                            <Card card={card} />
                          </div>
                        ))}
                      </div>
                    )}
                    {slide.cardsContent.length === 2 && (
                      <div className="grid grid-cols-2 gap-1 justify-center">
                        {slide.cardsContent.map((card, cardIndex) => (
                          <div
                            key={cardIndex}
                            className="w-full flex justify-center items-center"
                          >
                            <Card card={card} />
                          </div>
                        ))}
                      </div>
                    )}
                    {slide.cardsContent.length === 1 && (
                      <div className="grid grid-cols-1 gap-1 justify-center">
                        {slide.cardsContent.map((card, cardIndex) => (
                          <div
                            key={cardIndex}
                            className="w-full flex justify-center items-center"
                          >
                            <Card card={card} />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </Slider>
            </div>

            {/* Footer */}
            <footer className="fixed w-full bottom-0 p-4 bg-gray-800 text-white text-2xl">
              <marquee>{notice?.[0]?.text_en}</marquee>
            </footer>
          </div>

          <div className="w-1/5 bg-gray-900 text-white h-full flex flex-col items-center ">
            <div className="w-full h-1/2  mt-[20px]">
              <Slider {...viddeoSettings} className="h-full">
                {tvcList?.map((item) => (
                  <div key={item?.id} className="h-full w-full">
                    <video
                      className="h-full w-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                    >
                      <source src={item?.url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="w-full flex-1  mt-[10px]">
              <Slider {...viddeoSettings} className="h-full">
                {tvcList?.map((item) => (
                  <div key={item?.id} className="h-full w-full">
                    <video
                      className="h-full w-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                    >
                      <source src={item?.url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ))}
              </Slider>
            </div>

            {/* <div className="w-full py-4 px-2 flex items-center justify-center">
              <div>
                <h2 className="text-2xl text-center  font-bold mb-2">
                  Notice Board
                </h2>
                <p className="text-sm text-center">{notice?.[0]?.text_en}</p>
              </div>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}
