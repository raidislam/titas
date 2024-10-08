import { useEffect, useState } from "react"
import Card2 from "./component/Card2"
import SplashSlider from "./component/SplashSlider"
import Header from "./component/header"
import { getMembers } from "./services/api"
import { cn } from "./utils"

function App() {
  const [setting, setSetting] = useState([])
  const [slides, setSlides] = useState([])
  const [index, setIndex] = useState(0)
  const [notice, setNotice] = useState([])
  const [video, setVideo] = useState([])
  const total = slides[index]?.cards || 0

  useEffect(() => {
    // Fetch users when the component mounts
    getMembers()
      .then(response => {
          setSetting(response.data.setting)
        setSlides(response.data.slides)
        setNotice(response.data.notices)
        setVideo(response.data.custom_screens)
      })
      .catch(error => console.error("Error fetching users:", error))
  }, [])

  useEffect(() => {
    // make a slider change index every 5 seconds
    const timer = setInterval(() => {
      setIndex(index => (index >= slides.length - 1 ? 0 : index + 1))
    }, setting?.interval_seconds * 1000)

    return () => clearInterval(timer)
  }, [slides])
  // console.log("slides", slides[index])

  return (
    <div className="overflow-hidden relative h-screen font-roboto flex flex-col">
       <SplashSlider />
      <div className="flex-1 flex relative w-full z-10">
        <div className="w-[70%] p-[2.6vw] flex flex-col h-full relative">
          <div className="h-full z-20 flex flex-col">
            <Header company_name={slides[index]?.company_name} title={slides[index]?.title} />
            <div className="flex-1 flex justify-center items-center">
              <div
                className={cn("flex flex-wrap justify-center items-center gap-[1.82vw] w-full", {
                  "scale-150": total <= 2,
                })}>
                {slides[index]?.cardsContent &&
                  slides[index]?.cardsContent.map((cardInfo, index) => (
                    <Card2 cardInfo={cardInfo} className="w-[30%]" key={index} />
                  ))}
              </div>
            </div>
          </div>
          <div
            className="absolute w-full h-full opacity-5 z-10"
            style={{
              backgroundImage: "url(/images/shadow-image.svg)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "30vw",
            }}
          />
        </div>
        <div className="w-[29vw] bg-[#F2F5FA] flex-grow px-[1.875vw] flex justify-center gap-10 flex-col">
          <video className="w-full object-cover rounded-lg bg-slate-200" autoPlay muted loop playsInline preload="auto">
            {video[0]?.url && <source src={video[0]?.url} type="video/mp4" />}
            Your browser does not support the video tag.
          </video>
          <video className="w-full object-cover rounded-lg bg-slate-200" autoPlay muted loop playsInline preload="auto">
            {video[1]?.url && <source src={video[1]?.url} type="video/mp4" />}
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <footer className="bg-[#333290] text-[#fff] w-full h-[9.25vh] relative flex items-center">
        <marquee className="text-[1.75vw]">{notice?.[0]?.text_en}</marquee>
      </footer>
    </div>
  )
}

export default App
