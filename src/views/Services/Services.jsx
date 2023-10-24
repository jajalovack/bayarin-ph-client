import React from "react";
import Logo from "../../assets/icon.svg";
import Offers from "./Components/Offers";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="w-full bg-[#F48787]">
      <div className="max-w-[1000px] mx-auto px-8 flex items-center justify-center py-24 md:py-36">
        <div className="flex flex-col mr-[3rem] md:mr-[10rem]">
          <p className="text-4xl sm:text-md font-bold text-[#E0DA00]">
            Transition into a stress-free bill payments with Bayarin PH!
          </p>
          <p className="text-white py-4 max-w-[500px]">
            Bayarin PH is your go-to solution for seamless bill payments. Our
            user-friendly website empowers netizens with a hassle-free platform
            to settle their bills conveniently. We're committed to simplifying
            your financial transactions, making life easier. Join us in the
            world of stress-free bill payments and enjoy a smoother, more
            efficient experience.
          </p>
          <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#c1121f] hover:border-[#c1121f] duration-300 rounded w-[6.6rem]">
            <Link to="/register">Register</Link>
          </button>
        </div>
        <object className="w-[20rem] hidden md:flex" data={Logo}></object>
      </div>
      <Offers />
    </div>
  );
};

export default Services;
