import ProfileImg from "../../assets/images/profile-img.jpg";

const Profile = () => {
  return (
    <div className="padding">
      <div className="w-full h-[1000px] bg-[#000854] shadow-xl">
        <div className="padding items-center md:flex">
          <img className="rounded-lg w-[300px]" src={ProfileImg} alt="" />
          <div>
            <div className="text-xl ml-[6rem] mt-10 text-white">
              Profile Name:
            </div>
            <p className="text-xl ml-[6rem] mt-10 text-white">Email: </p>
            <p className="text-xl ml-[6rem] mt-10 text-white">Address: </p>
            <p className="text-xl ml-[6rem] mt-10 text-white">Profile Name:</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
