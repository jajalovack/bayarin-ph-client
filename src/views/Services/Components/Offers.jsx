import Electricity from "../../../assets/images/services-electricity-img.png";

const Offers = () => {
  return (
    <div className="overflow-x-hidden bg-[#1B4A9C]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full md:h-screen">
        <header className="pb-8 sm:mx-auto">
          <p className="ml-6 md:mx-auto text-4xl font-bold inline border-b-4 border-red-700">
            Lifestyle Services
          </p>
        </header>
        <div className="flex gap-8">
          <div className="card w-96 bg-white text-black shadow-lg border">
            <div className="card-body items-center text-center">
              <img className="w-[6.6rem]" src={Electricity} />
              <div className="card-title font-bold text-3xl">Utilities</div>
              <p className="text-gray-600">
                Pay your bills at your own convenience
              </p>
            </div>
          </div>
          <div className="card w-96 bg-white text-black shadow-lg border">
            <div className="card-body items-center text-center">
              <img className="w-[6.6rem]" src={Electricity} />
              <div className="card-title font-bold text-3xl">Utilities</div>
              <p className="text-gray-600">
                Pay your bills at your own convenience
              </p>
            </div>
          </div>
          <div className="card w-96 bg-white text-black shadow-lg border">
            <div className="card-body items-center text-center">
              <img className="w-[6.6rem]" src={Electricity} />
              <div className="card-title font-bold text-3xl">Utilities</div>
              <p className="text-gray-600">
                Pay your bills at your own convenience
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-8 mt-5">
          <div className="card w-96 bg-white text-black shadow-lg border">
            <div className="card-body items-center text-center">
              <img className="w-[6.6rem]" src={Electricity} />
              <div className="card-title font-bold text-3xl">Utilities</div>
              <p className="text-gray-600">
                Pay your bills at your own convenience
              </p>
            </div>
          </div>
          <div className="card w-96 bg-white text-black shadow-lg border">
            <div className="card-body items-center text-center">
              <img className="w-[6.6rem]" src={Electricity} />
              <div className="card-title font-bold text-3xl">Utilities</div>
              <p className="text-gray-600">
                Pay your bills at your own convenience
              </p>
            </div>
          </div>
          <div className="card w-96 bg-white text-black shadow-lg border">
            <div className="card-body items-center text-center">
              <img className="w-[6.6rem]" src={Electricity} />
              <div className="card-title font-bold text-3xl">Utilities</div>
              <p className="text-gray-600">
                Pay your bills at your own convenience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
