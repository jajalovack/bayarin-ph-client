import Electricity from "../../../assets/images/services-electricity-img.png";
import Internet from "../../../assets/images/services-internet-img.png";
import Tuition from "../../../assets/images/services-tuition-img.png";
import Water from "../../../assets/images/services-Water-img.png";

const Services = () => {
  return (
    // will change the color of the icons and text to white after checking

    <div name="services" className="h-screen bg-[#F48787] overflow-x-hidden">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
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
            <img className="w-20 mx-auto" src={Internet} alt="Internet Icon" />
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
  );
};

export default Services;
