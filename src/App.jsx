import {useEffect, useState} from "react";
import CardContainer from "./component/CardContainer";
import SplashSlider from "./component/SplashSlider";
import Header from "./component/header";
import {getMembers} from "./services/api";

function App() {
    const [setting, setSetting] = useState([]);
    const [slides, setSlides] = useState([]);
    const [index, setIndex] = useState(0);
    const [notice, setNotice] = useState([]);
    const [video, setVideo] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Fetch users when the component mounts
        getMembers()
            .then((response) => {
                setSetting(response.data.setting);
                setSlides(response.data.slides);
                setNotice(response.data.notices);
                setVideo(response.data.custom_screens);
                setIsLoading(false); // Data is loaded
            })
            .catch((error) => {
                console.error("Error fetching users:", error);
                setIsLoading(false); // Even if there is an error, stop loading
            });
    }, []);

    useEffect(() => {
        // make a slider change index every 5 seconds
        if (setting && slides.length > 0) {
            const timer = setInterval(() => {
                setIndex((prevIndex) =>
                    prevIndex >= slides.length - 1 ? 0 : prevIndex + 1
                );
            }, setting?.interval_seconds * 1000);

            return () => clearInterval(timer);
        }
    }, [slides, setting]);

    // If data is still loading, show a loading spinner or some placeholder
    if (isLoading || !setting) {
        return (
            <div
                className="flex items-center justify-center h-screen "
                style={{
                    backgroundColor: setting?.home_page ? setting?.home_page : "#00a2e8",
                }}
            >
                <div role="status">
                    <svg
                        aria-hidden="true"
                        className="w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                        />
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                        />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div
            className="overflow-hidden relative h-screen font-roboto flex flex-col"
            style={{
                backgroundColor: setting?.water_mark ? setting?.water_mark : "#a2bde0",
            }}
        >
            <SplashSlider setting={setting}/>
            <div className="flex-1 flex relative w-full z-10">
                <div className="w-[70%] p-[2.6vw] flex flex-col h-full relative">
                    <div className="h-full z-20 flex flex-col">
                        <Header
                            company_name={slides[index]?.company_name}
                            title={slides[index]?.title}
                            index={index}
                            setting={setting}
                        />
                        <div className="flex-1 flex justify-center items-center">
                            <CardContainer data={slides[index]}/>
                        </div>
                    </div>
                    <div
                        className="absolute w-full h-full opacity-5 z-10"
                        style={{
                            backgroundImage: `url(${setting?.logo})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "30vw",
                        }}
                    />
                </div>
                <div
                    className="w-[29vw] bg-[#faf2f5] flex-grow px-[1.875vw] flex justify-center gap-10 flex-col"
                    style={{
                        backgroundColor: setting?.video_page
                            ? setting?.video_page
                            : "#faf2f5",
                    }}
                >
                    <video
                        className="w-full object-cover rounded-lg bg-slate-200"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                    >
                        {video[0]?.url && <source src={video[0]?.url} type="video/mp4"/>}
                        Your browser does not support the video tag.
                    </video>
                    <video
                        className="w-full object-cover rounded-lg bg-slate-200"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                    >
                        {video[1]?.url && <source src={video[1]?.url} type="video/mp4"/>}
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <footer className="bg-[#1565c0] text-[#fff] w-full h-[9.25vh] relative flex items-center">
                <marquee className="text-[1.75vw]">
                    {notice?.[0]?.text_en} {notice?.[0]?.text_bn}
                </marquee>
            </footer>
        </div>
    );
}

export default App;
