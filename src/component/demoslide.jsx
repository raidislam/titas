// import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // custom data
// const slides = [
//   {
//     title: "Deputy Managing Director",
//     cards: 4,
//     cardsContent: ["Card 1", "Card 2", "Card 3", "Card 4"],
//   },
//   {
//     title: "General Manager",
//     cards: 5,
//     cardsContent: ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5"],
//   },
//   {
//     title: "Operations Manager",
//     cards: 7,
//     cardsContent: [
//       "Card 1",
//       "Card 2",
//       "Card 3",
//       "Card 4",
//       "Card 5",
//       "Card 6",
//       "Card 7",
//     ],
//   },
// ];

// export default function CustomSlider() {
//   const [currentTitle, setCurrentTitle] = useState(slides[0].title);
//   const [showFullImage, setShowFullImage] = useState(true);

//   useEffect(() => {
//     // Timer to hide the full-screen image after 5 seconds
//     const timer = setTimeout(() => {
//       setShowFullImage(false);
//     }, 5000);

//     return () => clearTimeout(timer); // Cleanup the timer
//   }, []);

//   const settings = {
//     dots: false,
//     arrows: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true, // Ensure autoplay is active
//     autoplaySpeed: 8000, // Speed for autoplay
//     beforeChange: (oldIndex, newIndex) => setCurrentTitle(slides[newIndex].title),
//   };

//   return (
//     <div>
//       {/* Full screen image display */}
//       {showFullImage ? (
//         <div className="fixed inset-0 w-full h-full bg-black">
//           <img
//             className="w-full h-full object-cover"
//             src="/images/Slide-Show-home-page.png"
//             alt="Full screen"
//           />
//         </div>
//       ) : (
//         <div className="flex h-screen">
//           {/* Main Content Area (80% width) */}
//           <div className="w-4/5">
//             {/* Header */}
//             <header className="w-full p-4 bg-gray-800 text-white flex items-center z-10">
//               <div>
//                 <img className="h-16" src="/images/logo-1.png" alt="logo" />
//               </div>
//               <div className="flex items-center justify-center w-full">
//                 <div className="text-center">
//                   <h2 className="text-4xl mb-2">
//                     Titas Gas Transmission & Distribution Company Limited
//                   </h2>
//                   <h2 className="text-3xl underline">{currentTitle}</h2>
//                 </div>
//               </div>
//             </header>

//             {/* Slider Section */}
//             <div className="h-full pt-6 ">
//               <Slider {...settings}>
//                 {slides.map((slide, index) => (
//                   <div
//                     key={index}
//                     className="h-full flex justify-center items-center"
//                   >
//                     <div className="flex flex-wrap justify-center items-center gap-6">
//                       {slide.cardsContent.map((card, cardIndex) => (
//                         <div key={cardIndex} className="!flex">
//                           <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
//                             <img
//                               className="object-cover w-full rounded-t-lg h-full md:w-48 md:rounded-none md:rounded-s-lg"
//                               src="/images/profile.jpg"
//                               alt=""
//                             />
//                             <div className="flex flex-col justify-between p-4 leading-normal">
//                               <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                                 Noteworthy technology acquisitions 2021
//                               </h5>
//                               <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                                 Here are the biggest enterprise technology
//                                 acquisitions of 2021 so far, in reverse
//                                 chronological order.
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </Slider>
//             </div>

//             {/* Footer */}
//             <footer className="fixed w-full bottom-0 p-8 bg-gray-800 text-white text-2xl">
//               <marquee>
//                 Titas Gas Transmission & Distribution Company Limited
//               </marquee>
//             </footer>
//           </div>

//           {/* Video Section (20% width) */}
//           <div className="w-1/5 bg-gray-900 text-white p-0 flex flex-col justify-between items-center h-full">
//             <div className="h-1/2 w-full">
//               <video className="h-full w-full object-cover" autoPlay muted loop>
//                 <source src="videos/sample_video-1.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//             <div className="h-1/2 w-full">
//               <video className="h-full w-full object-cover" autoPlay muted loop>
//                 <source src="videos/sample_video-2.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// custom data
const slides = [
  {
    title: "Deputy Managing Director",
    cards: 4,
    cardsContent: ["Card 1", "Card 2", "Card 3", "Card 4"],
  },
  {
    title: "General Manager",
    cards: 5,
    cardsContent: ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5"],
  },
  {
    title: "Operations Manager",
    cards: 7,
    cardsContent: [
      "Card 1",
      "Card 2",
      "Card 3",
      "Card 4",
      "Card 5",
      "Card 6",
      "Card 7",
    ],
  },
];

export default function CustomSlider() {
  const [currentTitle, setCurrentTitle] = useState(slides[0].title);
  const [showFullImage, setShowFullImage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFullImage(false);
    }, 5000);

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
    autoplaySpeed: 8000,
    beforeChange: (oldIndex, newIndex) => setCurrentTitle(slides[newIndex].title),
    draggable: false, 
  };

  return (
    <div className="overflow-hidden"> {/* Prevent overflow */}
      {showFullImage ? (
        <div className="fixed inset-0 w-full h-full bg-black">
          <img
            className="w-full h-full object-cover"
            src="/images/Slide-Show-home-page.png"
            alt="Full screen"
          />
        </div>
      ) : (
        <div className="flex h-screen overflow-hidden"> {/* Full height and no scroll */}
          {/* Main Content Area (80% width) */}
          <div className="w-4/5 h-full">
            {/* Header */}
            <header className="w-full p-4 bg-gray-800 text-white flex items-center z-10">
              <div>
                <img className="h-16" src="/images/logo-1.png" alt="logo" />
              </div>
              <div className="flex items-center justify-center w-full">
                <div className="text-center">
                  <h2 className="text-4xl mb-2">
                    Titas Gas Transmission & Distribution Company Limited
                  </h2>
                  <h2 className="text-3xl underline">{currentTitle}</h2>
                </div>
              </div>
            </header>

            {/* Slider Section */}
            <div className="h-full py-8">
              <Slider {...settings}>
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className="h-full flex justify-center items-center"
                  >
                    <div className="flex flex-wrap justify-center items-center gap-6 w-full px-4">
                      {slide.cardsContent.map((card, cardIndex) => (
                        <div key={cardIndex} className="!flex">
                          <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img
                              className="object-cover w-full h-48 md:w-48 md:rounded-none md:rounded-s-lg"
                              src="/images/profile.jpg"
                              alt=""
                            />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Noteworthy technology acquisitions 2021
                              </h5>
                              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Here are the biggest enterprise technology acquisitions of 2021 so far.
                              </p>
                            </div>
                          </div>
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
          <div className="w-1/5 bg-gray-900 text-white h-full flex flex-col justify-between items-center">
            <div className="h-1/2 w-full">
              <video className="h-full w-full object-cover" autoPlay muted loop>
                <source src="videos/sample_video-1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="h-1/2 w-full">
              <video className="h-full w-full object-cover" autoPlay muted loop>
                <source src="videos/sample_video-2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
