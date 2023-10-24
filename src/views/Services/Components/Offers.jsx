import Electricity from "../../../assets/images/services-electricity-img.png";
import Internet from "../../../assets/images/services-internet-img.png";
import Water from "../../../assets/images/services-water-img.png";
import Credit from "../../../assets/images/services-credit-img.png";
import Load from "../../../assets/images/services-load-img.png";
import Misc from "../../../assets/images/services-misc-img.png";

const Offers = () => {
  return (
    <div className="overflow-hidden bg-[#1B4A9C]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col">
        <header className="pb-8 sm:mx-auto">
          <p className="ml-6 md:mx-auto text-4xl font-bold inline border-b-4 border-red-700">
            Lifestyle Services
          </p>
        </header>
        <div className="md:flex gap-8">
          <div className="card w-96 bg-white text-black shadow-lg border mx-auto mt-5">
            <div className="card-body items-center text-center">
              <img className="w-[6.6rem]" src={Electricity} />
              <div className="card-title font-bold text-3xl">
                Electric Utilities
              </div>
              <p className="text-gray-600">
                Manage and pay your electricity bills conveniently with Bayarin
                PH. Experience seamless transactions at your own pace.
              </p>
            </div>
          </div>
          <div className="card w-96 bg-white text-black shadow-lg border mx-auto mt-5">
            <div className="card-body items-center text-center">
              <img className="w-[6.6rem]" src={Water} />
              <div className="card-title font-bold text-3xl">
                Water Utilities
              </div>
              <p className="text-gray-600">
                Simplify water bill payments effortlessly through Bayarin PH. We
                offer a user-friendly platform for your convenience.
              </p>
            </div>
          </div>
          <div className="card w-96 bg-white text-black shadow-lg border mx-auto mt-5">
            <div className="card-body items-center text-center">
              <img className="w-[6.6rem]" src={Credit} />
              <div className="card-title font-bold text-3xl">Credit</div>
              <p className="text-gray-600">
                Stay on top of your credit payments with Bayarin PH. We make it
                easy to manage and settle your credit bills at your own pace.
              </p>
            </div>
          </div>
        </div>
        <div className="md:flex gap-8">
          <div className="card w-96 bg-white text-black shadow-lg border mx-auto my-5">
            <div className="card-body items-center text-center">
              <img className="w-[6.6rem]" src={Internet} />
              <div className="card-title font-bold text-3xl">
                Cable/Internet
              </div>
              <p className="text-gray-600">
                Enjoy stress-free cable and internet bill payments with Bayarin
                PH. Our platform provides convenience and flexibility for your
                transactions.
              </p>
            </div>
          </div>
          <div className="card w-96 bg-white text-black shadow-lg border mx-auto my-5">
            <div className="card-body items-center text-center">
              <img className="w-[6.6rem]" src={Load} />
              <div className="card-title font-bold text-3xl">Prepaid Load</div>
              <p className="text-gray-600">
                Top up your prepaid load anytime, anywhere with Bayarin PH.
                Choose from regular airtime load or load combos for ultimate
                convenience.
              </p>
            </div>
          </div>
          <div className="card w-96 bg-white text-black shadow-lg border mx-auto my-5">
            <div className="card-body items-center text-center">
              <img className="w-[6.6rem]" src={Misc} />
              <div className="card-title font-bold text-3xl">Miscellaneous</div>
              <p className="text-gray-600">
                Bayarin PH simplifies the payment process for miscellaneous
                bills. Pay at your convenience and streamline your financial
                transactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
