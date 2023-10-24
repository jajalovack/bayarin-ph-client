import { TypeAnimation } from "react-type-animation";
import { HiArrowNarrowRight } from "react-icons/hi";
import Services from "../Home/Components/Services";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

const Home = () => {
  const authToken = localStorage.getItem("token");
  return (
    <div className="w-full bg-[#1B4A9C]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center py-[6rem] md:py-[15rem]">
        <p className="text-white md:text-xl ml-1 font-semibold tracking-wide">
          Maligayang Pagdating sa
        </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#E0DA00]">
          Bayarin PH
        </h1>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#fca311] mb-2 mt-2">
          <TypeAnimation
            sequence={[
              "Electric Utilities",
              1000,
              "Water Utilities",
              1000,
              "Cable/Internet",
              1000,
              "Credit",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "1em", paddingLeft: "3px" }}
            repeat={Infinity}
          />
        </h2>
        <p className="text-white py-4 max-w-[700px]">
          Ang iyong partner sa de-kalidad at mas pinadaling paraan sa serbisyong
          pinansyal, remittance, pagbabayad ng mga bills, at marami pang iba!
          Iexplore ang aming website upang masimulan mo ang stress-free at mas
          madaling paraan sa pag-handle ng iyong mga bayarin kasama ang Bayarin
          PH
        </p>
        <div className="flex gap-3">
          <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#c1121f] hover:border-[#c1121f] duration-300 rounded">
            <LinkRouter to="/about">Learn More</LinkRouter>
            <span className="duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
          {authToken && (
            <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#c1121f] hover:border-[#c1121f] duration-300 rounded">
              <LinkScroll to="services" smooth={true} duration={500}>
                Services
              </LinkScroll>
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          )}
        </div>
      </div>
      {authToken && <Services />}
    </div>
  );
};

export default Home;
