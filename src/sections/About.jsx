import { useEffect, useRef, useState } from "react";
import Card from "../components/Card"
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";

const About = () => {
  const grid2Container = useRef();
  const [philippinesTime, setPhilippinesTime] = useState(() => new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setPhilippinesTime(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formattedPhilippinesTime = new Intl.DateTimeFormat("en-PH", {
    timeZone: "Asia/Manila",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).format(philippinesTime);

return (
  <section className='c-space section-spacing'>
    <h2 className='text-heading'>About Me</h2>
    <div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18-rem] mt-12'>
            {/*Grid 1*/}
            <div className="flex items-end grid-default-color grid-1">
              <img
                src="assets/coding-pov.png" 
                className="absolute scale-[1.75] -right-20 -top-20 md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
                />
              <div className="z-10">
                <p className="headtext">Hi! I'm Marc Jian Bacay</p>
                <p className="subtext">
                  4th-year Computer Engineering student. Passionate about Cloud Computing, currently crafting the web with HTML, CSS & JavaScript.
                </p>
              </div>
              <div className="absolute inset-x-0 pointer-events-none-bottom-4 h-1/2 sm:h-1/3 bg-linear-to-t from-indigo"/>
          </div>
            {/*Grid 2*/}
            <div className="grid-default-color grid-2">
              <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
                <p className="flex items-end text-5xl text-gray-500">
                  CLOUD COMPUTING
                </p>
                <Card 
                style={{ rotate: "70deg", top: "75%", left: "20%",}} 
                text="Linux"
                containerRef = {grid2Container}
                />
                <Card 
                style={{ rotate: "-23deg", top: "60%", left:"45%" }} 
                text="Git"
                containerRef = {grid2Container}
                />
                <Card 
                style={{ rotate: "40deg", top: "18%", left:"70%" }} 
                text="Docker"
                containerRef = {grid2Container}
                />
                <Card 
                style={{ rotate: "-30deg", top: "20%", left:"0%" }} 
                text="AWS" 
                containerRef = {grid2Container}
                />
                <Card 
                style={{ rotate: "20deg", top: "10%", left:"40%" }} 
                text="CI/CD"
                containerRef = {grid2Container}
                />
                <Card 
                style={{ rotate: "70deg", top: "78%", left:"24%" }} 
                image="assets\logos\linux.png"
                containerRef = {grid2Container}
                />
                <Card 
                style={{ rotate: "-23deg", top: "78%", left:"60%" }} 
                image="assets\logos\git.png"
                containerRef = {grid2Container}
                />
                <Card 
                style={{ rotate: "40deg", top: "33%", left:"76%" }} 
                image="assets\logos\docker.png"
                containerRef = {grid2Container}
                />
                <Card 
                style={{ rotate: "-30deg", top: "37%", left:"15%" }} 
                image="assets\logos\aws.png"
                containerRef = {grid2Container}
                />
                <Card 
                style={{ rotate: "-30deg", top: "30%", left:"48%" }} 
                image="assets\logos\gitlab.png"
                containerRef = {grid2Container}
                />
              </div>
            </div>
            {/*Grid 3*/}
            <div className="grid-black-color grid-3">
              <div className="z-10 w-[50%]">
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <p className="headtext">Time Zone</p>
                  <time
                    className="text-sm text-black bg-white px-2 py-0.5 rounded tabular-nums"
                    dateTime={philippinesTime.toISOString()}
                    aria-label={`Current time in the Philippines: ${formattedPhilippinesTime} PHT`}
                  >
                    {formattedPhilippinesTime} PHT
                  </time>
                </div>
                <p className="subtext">
                  Based in the Philippines. Flexible for on-site, hybrid, or global remote work.
                </p>
              </div>
              <figure className="absolute left-[30%] top-[10%]">
                <Globe />
              </figure>
            </div>
            {/*Grid 4*/}
            <div className="grid-special-color grid-4">
              <div className="flex flex-col items-center justify-center gap-4 size-full">
                <p className="text-center headtext">
                  hmu if u wanna work together
                </p>
                <CopyEmailButton />
              </div>
            </div>
            {/*Grid 5*/}
            <div className="grid-default-color grid-5"></div>
        </div>
  </section>
  )
}

export default About