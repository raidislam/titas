import { useEffect, useState } from "react"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

export default function SplashSlider() {
  // const [slides, setSlides] = useState([])
  // const [notice, setNotice] = useState([])
  // const [tvcList, setTvcList] = useState([])
  // const [currentTitle, setCurrentTitle] = useState("")
  // const [companyTitle, setCompanyTitle] = useState("")
  const [showFullImage, setShowFullImage] = useState(true)

  // useEffect(() => {
  //   // Fetch users when the component mounts
  //   getMembers()
  //     .then(response => {
  //       setSlides(response.data.slides)
  //       setNotice(response.data.notices)
  //       setTvcList(response.data.custom_screens)

  //       setCurrentTitle(slides[0]?.company_name)
  //       setCompanyTitle(slides[0]?.title)
  //     })
  //     .catch(error => console.error("Error fetching users:", error))
  // }, [showFullImage])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFullImage(false)
    }, 5 * 1000)

    return () => clearTimeout(timer)
  }, [])

  // const settings = {
  //   dots: false,
  //   arrows: false,
  //   infinite: true,
  //   speed: 8000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   autoplaySpeed: 800,
  //   fade: true,
  //   beforeChange: (oldIndex, newIndex) => {
  //     setCurrentTitle(slides[newIndex].company_name)
  //     setCompanyTitle(slides[newIndex].title)
  //   },
  //   draggable: false,
  // }

  // const viddeoSettings = {
  //   dots: false, // Show dots for each slide
  //   fade: true, // Enable fade effect between slides
  //   infinite: true, // Enable infinite scrolling of slides
  //   speed: 8000, // Slide transition speed (0.5s)
  //   slidesToShow: 1, // Only show 1 slide at a time
  //   slidesToScroll: 1, // Scroll 1 slide at a time
  //   autoplay: true, // Enable autoplay
  //   autoplaySpeed: 3000, // Autoplay slide every 3 seconds
  //   pauseOnHover: false, // Don't stop autoplay when hovering over the slider
  //   waitForAnimate: true, // Don't wait for animation to finish before next slide
  //   arrows: false, // Hide navigation arrows if not needed
  // }

  if (!showFullImage) return null

  return (
    <div className="z-50 fixed inset-0 w-full h-full bg-[#00ADEF]">
      <div className="relative">
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col items-center gap-[1.04vw] absolute w-full">
            <div className="h-[15vw]">
              <img className="w-[15vw] object-cover" src="/images/homeLogo.svg" alt="Full screen" />
            </div>
            <h2 className="font-poppins text-white font-bold text-[2.25vw]">
              Titas Gas Transmission & Distribution PLC.
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}
