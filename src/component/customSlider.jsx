import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TeamCard from "./teamCard";

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

  const settings = {
    dots: false, // Hide dots
    arrows:false,  // Hide prev/next buttons
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) =>
      setCurrentTitle(slides[newIndex].title),
  };

  return (
    <div className="flex h-screen">
      {/* Main Content Area (80% width) */}
      <div className="w-4/5">
        {/* Header */}
        <header className="fixed w-full top-0 p-4 bg-gray-800 text-white flex justify-between z-10">
          <h1 className="text-2xl">Fixed Title</h1>
          <h2 className="text-xl">{currentTitle}</h2>
        </header>

        {/* Slider Section */}
        <div className="h-full pt-16 pb-16">
        <h2 className="text-xl">{currentTitle}</h2>
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className="h-full flex justify-center items-center"
              >
                <div
                  className={`grid grid-cols-${Math.min(
                    slide.cards,
                    3
                  )} gap-4 w-3/4`}
                >
                  {slide.cardsContent.map((card, cardIndex) => (
                    <div
                      key={cardIndex}
                    >
                      <TeamCard/>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Footer */}
        <footer className="fixed w-full bottom-0 p-4 bg-gray-800 text-white">
          <marquee>Titas Gas Transmission & Distribution Company Limited</marquee>
        </footer>
      </div>

      {/* Video Section (20% width) */}

      <div className="w-1/5 bg-gray-900 text-white p-0 flex flex-col justify-between items-center h-full">
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
  );
}
