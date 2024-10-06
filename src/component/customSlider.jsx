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
    autoplaySpeed: 4000,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentTitle(slides[newIndex].company_name);
      setCompanyTitle(slides[newIndex].title);
    },
    draggable: false,
  };

  const viddeoSettings = {
    dots: true, // Show dots for each slide
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
        <div className="fixed inset-0 w-full h-full bg-black">
          <img
            className="w-full h-full object-cover"
            src="/images/Slide-Show-home-page.png"
            alt="Full screen"
          />
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
              {/* <Slider {...settings}>
                {slides?.map((slide, index) => (
                  <div
                    key={index}
                    className="h-full flex justify-center items-center"
                  >
                    <div className="flex flex-wrap justify-center items-center gap-6 w-full px-4">
                      {slide.cardsContent.map((card, cardIndex) => (
                        <div key={cardIndex} className="!flex">
                          <div
                            style={{
                              backgroundColor: `${
                                card.background_color
                                  ? card.background_color
                                  : "#f2f2f2"
                              }`,
                            }}
                            className="flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                          >
                            <img
                              className="object-cover w-full h-full md:w-48 md:rounded-none md:rounded-s-lg"
                              src={
                                card.image ? card.image : "/images/profile.jpg"
                              }
                              alt="profile image"
                            />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                              <p className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {card.name}
                              </p>
                              <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
                                {card.post}
                              </p>
                              <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
                                {card.rank}
                              </p>
                              <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
                                {card.city}
                              </p>
                              <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
                                {card.code}
                              </p>
                              <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
                                {card.phone}
                              </p>
                              <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
                                {card.email}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </Slider> */}
              <Slider {...settings}>
                {slides?.map((slide, index) => (
                  <div
                    key={index}
                    className="h-full flex justify-center items-center"
                  >
                    <div
                      className={`grid gap-6 px-4 w-full ${
                        slide.cardsContent.length === 1
                          ? "grid-cols-1 justify-center"
                          : slide.cardsContent.length === 2
                          ? "grid-cols-2 justify-center"
                          : "grid-cols-3"
                      }`}
                    >
                      {slide.cardsContent.map((card, cardIndex) => (
                        <div key={cardIndex} className="w-full">
                          <Card card={card} />
                        </div>
                      ))}
                    </div>
                    {/* <div className="flex flex-wrap justify-center items-center gap-6 w-full px-4">
                      {slide.cardsContent.map((card, cardIndex) => (
                        <div
                          key={cardIndex}
                          className="w-full sm:w-1/2 md:w-1/3 px-2"
                        >
                          <Card card={card} />
                        </div>
                      ))}
                    </div> */}
                  </div>
                ))}
              </Slider>
            </div>

            {/* Footer */}
            <footer className="fixed w-full bottom-0 p-4 bg-gray-800 text-white text-2xl">
              <marquee>
                Titas Gas Transmission & Distribution Company Limited
              </marquee>
            </footer>
          </div>

          {/* Video Section (20% width) */}

          {/* <div className="w-1/5 bg-gray-900 text-white h-full flex flex-col justify-between items-center">
            <div className="h-screen w-full">
              <video className="h-full w-full object-cover" autoPlay muted loop>
                <source src="videos/sample_video-1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <Slider {...viddeoSettings}>
              {videoFile.map((item, index) => (
                <div key={item?.id} className="h-screen w-full">
                  <video
                    className="h-full w-full object-cover"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={item?.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </Slider>
          </div> */}

          <div className="w-1/5 bg-gray-900 text-white h-full flex flex-col items-center">
            <div className="w-full h-1/2 py-4 px-2 flex items-center justify-center mt-[100px]">
              <div>
                <h2 className="text-2xl text-center  font-bold mb-2">
                  Notice Board
                </h2>
                <p className="text-lg text-center">{notice?.[0]?.text_en}</p>
              </div>
            </div>

            <div className="w-full h-1/2 mt-[70px]">
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
          </div>
        </div>
      )}
    </div>
  );
}
