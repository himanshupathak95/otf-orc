import { curve, robot } from "../assets";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import OutfitCarousel from "./OutfitCarousel";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[11rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="flex relative z-6 max-w-[62rem] mx-auto justify-center  text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem] ">
          <h1 className="h1 mb-6 font-sans">
            {"EXPERIENCE THE DIFFERENCE, "}
            <br />
            {" LUXURY MADE "} &nbsp;
            <span className="font-code font-light  inline-block relative text-8xl">
              Extravagant{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
        </div>
        <div className="pt-20 mt-60 relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="z-6 relative p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-8 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className="w-full scale-[1] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[12%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="#1 Trending Now"
                  />
                </ScrollParallax>
              </div>
            </div>
          </div>
          <div className="absolute z-5 -top-[54%] left-1/2 w-screen -translate-x-1/2 md:-top-[46%] md:w-screen lg:-top-[104%]">
            <OutfitCarousel />
          </div>

          <BackgroundCircles />
        </div>

        <CompanyLogos className="justify-items-center items-center hidden relative z-10 mt-20 lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
