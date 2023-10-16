import Electricity from "../../assets/images/services-electricity-img.png";
import Internet from "../../assets/images/services-internet-img.png";
import Tuition from "../../assets/images/services-tuition-img.png";
import Water from "../../assets/images/services-Water-img.png";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="w-full bg-[#1B4A9C]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center py-[6rem] md:py-[12rem]">
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
              "Tuition",
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
      </div>
      <div className="bg-[#F48787] overflow-x-hidden">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full py-[6rem] md:py-[12rem]">
          <header className="pb-8 sm:mx-auto">
            <p className="text-4xl font-bold inline border-b-4 border-red-700">
              Services
            </p>
          </header>
          <div></div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
            <div className="hover:scale-110 duration-100 cursor-pointer">
              <img
                className="w-20 mx-auto"
                src={Electricity}
                alt="Electricity Icon"
              />
              <p className="my-4">Electric Utilities</p>
            </div>
            <div className="hover:scale-110 duration-100 cursor-pointer">
              <img className="w-20 mx-auto" src={Water} alt="Water Icon" />
              <p className="my-4">Water Utilities</p>
            </div>
            <div className="hover:scale-110 duration-100 cursor-pointer">
              <img
                className="w-20 mx-auto"
                src={Internet}
                alt="Internet Icon"
              />
              <p className="my-4">Cable/Internet</p>
            </div>
            <div className="hover:scale-110 duration-100 cursor-pointer">
              <img className="w-20 mx-auto" src={Tuition} alt="Tuition Icon" />
              <p className="my-4">Tuition</p>
            </div>
            <div className="hover:scale-110 duration-100 cursor-pointer">
              <img className="w-20 mx-auto" src={Tuition} alt="Tuition Icon" />
              <p className="my-4">Electric Utilities</p>
            </div>
            <div className="hover:scale-110 duration-100 cursor-pointer">
              <img className="w-20 mx-auto" src={Tuition} alt="Tuition Icon" />
              <p className="my-4">Electric Utilities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
