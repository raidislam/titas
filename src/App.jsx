import Card2 from "./component/Card2";
import CustomSlider from "./component/customSlider";
import Header from "./component/header";

function App() {
  return <CustomSlider />;
  return (
    <div
      className="overflow-hidden relative"
      style={{
        height: "100vh",
      }}
    >
      {/* Background image with opacity */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url(/images/shadow-image.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />

      <div className="relative h-full w-full z-10">
        <div className="flex">
          <div className="flex-grow">
            <Header />
            <div className="flex justify-center items-center">
              <Card2 />
            </div>
          </div>
          <div className="bg-[#F2F5FA] flex-grow">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src="/" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
