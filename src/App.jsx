import Card2 from "./component/Card2"
import CustomSlider from "./component/customSlider"
import Header from "./component/header"

function App() {
  return (
    <div className="overflow-hidden relative h-screen font-roboto flex flex-col">
      <CustomSlider />
      <div className="flex-1 flex relative w-full z-10">
        <div className="w-[70%] p-[2.6vw] flex flex-col h-full relative">
          <div className="h-full z-20 flex flex-col">
            <Header />
            <div className="flex-1 flex justify-center items-center">
              <div className="flex flex-wrap justify-center items-center gap-[1.82vw]">
                <Card2 className="w-[30%]" />
                <Card2 className="w-[30%]" />
                <Card2 className="w-[30%]" />
                <Card2 className="w-[30%]" />
                <Card2 className="w-[30%]" />

                {/* <Card2 />
              <Card2 />
              <Card2 />
              <Card2 /> */}
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
        <div className="w-[30%] bg-[#F2F5FA] flex-grow px-[1.875vw] flex justify-center gap-10 flex-col">
          <video className="w-full object-cover rounded" autoPlay muted loop playsInline preload="auto">
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video className="w-full object-cover rounded" autoPlay muted loop playsInline preload="auto">
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <footer className="bg-[#333290] w-full h-[9.25vh]"></footer>
    </div>
  )
}

export default App
