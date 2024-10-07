import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { getMembers } from "../services/api";
import Card from "./Card";

// custom data
// const slides = [
//   {
//     title: "Deputy Managing Director",
//     cards: 3,
//     cardsContent: [
//       {
//         image: "/images/profile.jpg",
//         post: "Deputy Managing Director",
//         name: "Engr.Sattyajit Ghosh",
//         rank: "Regional Marketing Division-",
//         city: "Mymensingh",
//         phone: ["9155258", "01939921164"],
//         email: "dmd.mymensingh@titasgas.org.bd",
//         bgColor: "blue",
//       },
//       {
//         image: "/images/profile.jpg",
//         post: "Deputy Managing Director",
//         name: "Engr.Kazi Mohammad Saidul Hasan",
//         rank: "Regional Marketing Division-",
//         city: "Gazipur",
//         phone: ["9262118", "01939921166"],
//         email: "dmd.gazipur@titasgas.org.bd",
//         bgColor: "#FFB0B0",
//       },
//       {
//         image: "/images/profile.jpg",
//         post: "Deputy Managing Director",
//         name: "Engr.Md.Anisur Rahman",
//         rank: "Regional Marketing Division-",
//         city: "N.Gong",
//         phone: ["9750018", "01939921165"],
//         email: "dmd.gazipur@titasgas.org.bd",
//         bgColor: "#BF2EF0",
//       },
//     ],
//   },
//   {
//     title: "General Manager",
//     cards: 9,
//     cardsContent: [
//       {
//         image: "/images/profile.jpg",
//         post: "General Manager",
//         name: "Md.Faizul Bari",
//         rank: "Engineering Services",
//         city: "Division",
//         code: "41010000-04/309",
//         phone: "01939921162",
//         email: "gm.esd@titasgas.org.bd",
//         bgColor: "#BF2EF0",
//       },
//       {
//         image: "/images/profile.jpg",
//         post: "General Manager",
//         name: "S. M. Alinur Rahman",
//         rank: "Engineering Services",
//         city: "Division",
//         code: "41010000-04/309",
//         phone: "01939921162",
//         email: "gm.esd@titasgas.org.bd",
//         bgColor: "#BF2EF0",
//       },
//       {
//         image: "/images/profile.jpg",
//         post: "General Manager",
//         name: "Md. Motahar Hossain",
//         rank: "Engineering Services",
//         city: "Division",
//         code: "41010000-04/309",
//         phone: "01939921162",
//         email: "gm.esd@titasgas.org.bd",
//         bgColor: "#BF2EF0",
//       },
//       {
//         image: "/images/profile.jpg",
//         post: "General Manager",
//         name: "Md. Tariq Anis Khan",
//         rank: "Engineering Services",
//         city: "Division",
//         code: "41010000-04/309",
//         phone: "01939921162",
//         email: "gm.esd@titasgas.org.bd",
//         bgColor: "#BF2EF0",
//       },
//       {
//         image: "/images/profile.jpg",
//         post: "General Manager",
//         name: "Rifat Karim",
//         rank: "Engineering Services",
//         city: "Division",
//         code: "41010000-04/309",
//         phone: "01939921162",
//         email: "gm.esd@titasgas.org.bd",
//         bgColor: "#BF2EF0",
//       },
//       {
//         image: "/images/profile.jpg",
//         post: "General Manager",
//         name: "Engr.Md.Salim Miah",
//         rank: "Engineering Services",
//         city: "Division",
//         code: "41010000-04/309",
//         phone: "01939921162",
//         email: "gm.esd@titasgas.org.bd",
//         bgColor: "#BF2EF0",
//       },
//       {
//         image: "/images/profile.jpg",
//         post: "General Manager",
//         name: "Md. Emam Uddin Sheikh",
//         rank: "Engineering Services",
//         city: "Division",
//         code: "41010000-04/309",
//         phone: "01939921162",
//         email: "gm.esd@titasgas.org.bd",
//         bgColor: "#181C14",
//       },
//       {
//         image: "/images/profile.jpg",
//         post: "General Manager",
//         name: "Akond Md.Mahbubul Islam",
//         rank: "Engineering Services",
//         city: "Division",
//         code: "41010000-04/309",
//         phone: "01939921162",
//         email: "gm.esd@titasgas.org.bd",
//         bgColor: "#3C3D37",
//       },
//       {
//         image: "/images/profile.jpg",
//         post: "General Manager",
//         name: "Arpana Islam",
//         rank: "Engineering Services",
//         city: "Division",
//         code: "41010000-04/309",
//         phone: "01939921162",
//         email: "gm.esd@titasgas.org.bd",
//       },
//     ],
//   },
//   {
//     title: "Operations Manager",
//     cards: 1,
//     cardsContent: [
//       {
//         image: "/images/profile.jpg",
//         post: "General Manager",
//         name: "Arpana Islam",
//         rank: "Engineering Services",
//         city: "Division",
//         code: "41010000-04/309",
//         phone: "01939921162",
//         email: "gm.esd@titasgas.org.bd",
//       },
//     ],
//   },
// ];

// const videoFile = [
//   {
//     id: 1,
//     videoUrl: "videos/sample_video-1.mp4",
//   },
//   {
//     id: 2,
//     videoUrl: "videos/sample_video-2.mp4",
//   },
//   {
//     id: 3,
//     videoUrl: "videos/sample_video-3.mp4",
//   },
//   {
//     id: 4,
//     videoUrl: "videos/sample_video-4.mp4",
//   },
//   {
//     id: 5,
//     videoUrl: "videos/sample_video-5.mp4",
//   },
// ];

export default function CustomSlider() {
  const [slides, setSlides] = useState([]);
  const [notice, setNotice] = useState([]);
  const [tvcList, setTvcList] = useState([]);
  const [currentTitle, setCurrentTitle] = useState(slides[0]?.company_name);
  const [companyTitle, setCompanyTitle] = useState(slides[0]?.title);
  const [showFullImage, setShowFullImage] = useState(true);

  useEffect(() => {
    // Fetch users when the component mounts
    getMembers()
      .then((response) => {
        setSlides(response.data.slides);
        setNotice(response.data.notices);
        setTvcList(response.data.custom_screens);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, [showFullImage]);
  console.log("slides", { notice, slides, tvcList, companyTitle });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFullImage(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
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
            <div className="h-full py-3">
              {/* <Slider {...settings}>
                {slides?.map((slide, index) => (
                  <div
                    key={index}
                    className="h-full flex justify-center items-center"
                  >
                    <div
                      className={`grid gap-6 px-4 w-full ${
                        slide.cardsContent.length === 1
                          ? "grid-cols-1"
                          : slide.cardsContent.length === 2
                          ? "grid-cols-2"
                          : "grid-cols-3"
                      }`}
                    >
                      {slide.cardsContent.map((card, cardIndex) => (
                        <div key={cardIndex} className="w-full">
                          <Card card={card} />
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
                    className="h-full !flex justify-center items-center"
                  >
                    <div
                      // className={`grid gap-6 px-4 w-full mx-auto ${
                      //   slide.cardsContent.length === 1
                      //     ? "grid-cols-1 place-items-center"
                      //     : slide.cardsContent.length === 2
                      //     ? "grid-cols-2"
                      //     : "grid-cols-3 col-start-1 col-end-4"
                      // }`}

                      style={{
                        height: " calc(100vh - 300px)",
                      }}
                      className={`${
                        slide.cardsContent.length === 1 ||
                        slide.cardsContent.length === 2 ||
                        slide.cardsContent.length === 4
                          ? "flex gap-4 flex-wrap justify-center  items-center"
                          : "grid grid-rows-2 gap-4 px-4 w-full mx-auto"
                      } ${
                        slide.cardsContent.length === 1
                          ? "grid-cols-1 place-items-center"
                          : slide.cardsContent.length === 2
                          ? "grid-cols-2"
                          : slide.cardsContent.length === 3 ||
                            slide.cardsContent.length === 6 ||
                            slide.cardsContent.length === 5
                          ? "grid-cols-3 grid-rows-2"
                          : ""
                      }`}

                      // className="flex gap-5 flex-grow flex-wrap justify-center"
                    >
                      {slide.cardsContent.map((card, cardIndex) => (
                        <div key={cardIndex}>
                          <Card card={card} />
                        </div>
                      ))}
                    </div>
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
