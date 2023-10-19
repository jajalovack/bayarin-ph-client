import Electricity from "../../../assets/images/services-electricity-img.png";
import Internet from "../../../assets/images/services-internet-img.png";
import Tuition from "../../../assets/images/services-tuition-img.png";
import Water from "../../../assets/images/services-water-img.png";
import Credit from "../../../assets/images/services-credit-img.png";
import Load from "../../../assets/images/services-load-img.png";
import Misc from "../../../assets/images/services-misc-img.png";

const Services = () => {
  return (
    <div id="services" className="bg-[#F48787] overflow-x-hidden">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full md:h-screen">
        <header className="pb-8 sm:mx-auto">
          <p className="ml-6 md:mx-auto text-4xl font-bold inline border-b-4 border-red-700">
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
            <img className="w-20 mx-auto" src={Internet} alt="Internet Icon" />
            <p className="my-4">Cable/Internets</p>
          </div>
          <div className="hover:scale-110 duration-100 cursor-pointer">
            <img className="w-20 mx-auto" src={Tuition} alt="Tuition Icon" />
            <p className="my-4">Tuition</p>
          </div>
          <div className="hover:scale-110 duration-100 cursor-pointer">
            <img className="w-20 mx-auto" src={Credit} alt="Tuition Icon" />
            <p className="my-4">Credit</p>
          </div>
          <div className="hover:scale-110 duration-100 cursor-pointer">
            <img className="w-20 mx-auto" src={Load} alt="Tuition Icon" />
            <p className="my-4">Prepaid Load</p>
          </div>
          <div className="hover:scale-110 duration-100 cursor-pointer">
            <img className="w-20 mx-auto" src={Misc} alt="Tuition Icon" />
            <p className="my-4">Miscellanous</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
