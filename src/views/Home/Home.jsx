import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="w-full h-screen bg-[#1B4A9C]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
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
          Maligayang pagdating sa Bills PH – Ang iyong partner sa de-kalidad at
          mas pinadaling paraan sa serbisyong pinansyal, remittance, pagbabayad
          ng mga bills, at marami pang iba! Iexplore ang aming website upang
          masimulan mo ang stress-free at mas madaling paraan sa pag-handle ng
          iyong mga bayarin kasama ang BayarinPH
        </p>
      </div>
    </div>
  );
};

export default Home;
