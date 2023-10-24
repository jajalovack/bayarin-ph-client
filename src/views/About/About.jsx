import { TypeAnimation } from "react-type-animation";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#1B4A9C] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <header className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-red-700">
              About Us
            </p>
          </header>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold ">
            <p>Welcome to Bayarin PH</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#fca311] mb-2 mt-2">
              <TypeAnimation
                sequence={[
                  "Trusted",
                  1000,
                  "Safe",
                  1000,
                  "User Friendly",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "1em", paddingLeft: "3px" }}
                repeat={Infinity}
              />
            </h2>
          </div>
          <div>
            <p>
              Bayarin PH, your trusted partner in the realm of online bill
              payments, takes pride in simplifying lives. Our user-centric
              website facilitates seamless bill settlements for netizens,
              ensuring utmost convenience. With our commitment to efficiency and
              customer satisfaction, we are your premier choice for hassle-free
              financial transactions. Welcome to Bayarin PH!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
