import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// custom data
const slides = [
  {
    title: "Deputy Managing Director",
    cards: 3,
    cardsContent: [
      {
        image:'/images/profile.jpg',
        post:'Deputy Managing Director',
        name:'Engr.Sattyajit Ghosh',
        rank:'Regional Marketing Division-',
        city:'Mymensingh',
        phone:['9155258','01939921164'],
        email:'dmd.mymensingh@titasgas.org.bd'
      },
      {
        image:'/images/profile.jpg',
        post:'Deputy Managing Director',
        name:'Engr.Kazi Mohammad Saidul Hasan',
        rank:'Regional Marketing Division-',
        city:'Gazipur',
        phone:['9262118','01939921166'],
        email:'dmd.gazipur@titasgas.org.bd'
      },
      {
        image:'/images/profile.jpg',
        post:'Deputy Managing Director',
        name:'Engr.Md.Anisur Rahman',
        rank:'Regional Marketing Division-',
        city:'N.Gong',
        phone:['9750018','01939921165'],
        email:'dmd.gazipur@titasgas.org.bd'
      }
    ],
  },
  {
    title: "General Manager",
    cards: 9,
    cardsContent: [
      {
        image:'/images/profile.jpg',
        post:'General Manager',
        name:'Md.Faizul Bari',
        rank:'Engineering Services',
        city:'Division',
        code:'41010000-04/309',
        phone:'01939921162',
        email:'gm.esd@titasgas.org.bd'
      },
      {
        image:'/images/profile.jpg',
        post:'General Manager',
        name:'S. M. Alinur Rahman',
        rank:'Engineering Services',
        city:'Division',
        code:'41010000-04/309',
        phone:'01939921162',
        email:'gm.esd@titasgas.org.bd'
      },
      {
        image:'/images/profile.jpg',
        post:'General Manager',
        name:'Md. Motahar Hossain',
        rank:'Engineering Services',
        city:'Division',
        code:'41010000-04/309',
        phone:'01939921162',
        email:'gm.esd@titasgas.org.bd'
      },
      {
        image:'/images/profile.jpg',
        post:'General Manager',
        name:'Md. Tariq Anis Khan',
        rank:'Engineering Services',
        city:'Division',
        code:'41010000-04/309',
        phone:'01939921162',
        email:'gm.esd@titasgas.org.bd'
      },
      {
        image:'/images/profile.jpg',
        post:'General Manager',
        name:'Rifat Karim',
        rank:'Engineering Services',
        city:'Division',
        code:'41010000-04/309',
        phone:'01939921162',
        email:'gm.esd@titasgas.org.bd'
      },
      {
        image:'/images/profile.jpg',
        post:'General Manager',
        name:'Engr.Md.Salim Miah',
        rank:'Engineering Services',
        city:'Division',
        code:'41010000-04/309',
        phone:'01939921162',
        email:'gm.esd@titasgas.org.bd'
      },
      {
        image:'/images/profile.jpg',
        post:'General Manager',
        name:'Md. Emam Uddin Sheikh',
        rank:'Engineering Services',
        city:'Division',
        code:'41010000-04/309',
        phone:'01939921162',
        email:'gm.esd@titasgas.org.bd'
      },
      {
        image:'/images/profile.jpg',
        post:'General Manager',
        name:'Akond Md.Mahbubul Islam',
        rank:'Engineering Services',
        city:'Division',
        code:'41010000-04/309',
        phone:'01939921162',
        email:'gm.esd@titasgas.org.bd'
      },
      {
        image:'/images/profile.jpg',
        post:'General Manager',
        name:'Arpana Islam',
        rank:'Engineering Services',
        city:'Division',
        code:'41010000-04/309',
        phone:'01939921162',
        email:'gm.esd@titasgas.org.bd'
      },
    ],
  },
  {
    title: "Operations Manager",
    cards: 1,
    cardsContent: [
      {
        image:'/images/profile.jpg',
        post:'General Manager',
        name:'Arpana Islam',
        rank:'Engineering Services',
        city:'Division',
        code:'41010000-04/309',
        phone:'01939921162',
        email:'gm.esd@titasgas.org.bd'
      },
      
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
        <div className="flex h-screen"> 
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
                              className="object-cover w-full h-full md:w-48 md:rounded-none md:rounded-s-lg"
                              src={card.image}
                              alt=""
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
            <div className="h-screen w-full">
              <video className="h-full w-full object-cover" autoPlay muted loop>
                <source src="videos/sample_video-1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="h-screen w-full">
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
