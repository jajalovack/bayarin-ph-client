import { useState,useEffect } from "react";
import http from "../../lib/http";
import ProfileImg from "../../assets/images/default.jpg";

const Profile = () => {
  const [profilePic,setProfilePic]=useState(ProfileImg);
  const [fullName,setFullName]=useState("Juan Dela Cruz (loading...)");
  const [email,setEmail]=useState("loading@email.com");
  const [birthdate,setBirthdate]=useState("Month 00, 1990");
  const [verified,setVerified]=useState("verifying...")
  const api=http({Authorization: "Bearer "+localStorage.getItem("token")});
  useEffect(() => {
    async function fetchData()
    {
      try {
        const response = await api.get('/profile');
        setFullName(response.data.first_name+" "+response.data.last_name);
        setEmail(response.data.email);
        let dateParts=String(response.data.birthdate).split('-');
        let newDate=new Date(dateParts[0],dateParts[1]-1,dateParts[2]);
        setBirthdate(newDate.toLocaleString("default",{month:"long"})+" "+newDate.getDate()+", "+newDate.getFullYear());
        setVerified(response.data.isVerified?"Verified User":"Unverified User");

        const profilePicDataResponse = await api.get(response.data.profile_pic, { responseType: 'arraybuffer' });

        const profilePicDataBlob = new Blob([profilePicDataResponse.data], { type: profilePicDataResponse.headers["content-type"] });

        setProfilePic(URL.createObjectURL(profilePicDataBlob));
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  },[]);
  
  return (
    <div className="padding">
      <div className="w-full h-[1000px] bg-[#000854] shadow-xl">
        <div className="padding items-center md:flex">
          <img className="rounded-lg w-[300px]" src={profilePic} style={{height: "300px",objectFit:"cover"}} />
          <div>
            <div className="ml-[6rem] text-white">
              <font style={{fontSize: "50px"}}>{fullName}</font>
            </div>
            <p className="ml-[6rem] mt-10 text-white"><font style={{fontSize: "25px"}}>{email}</font></p>
            <p className="ml-[6rem] mt-[20px] text-white"><font style={{fontSize: "25px"}}>{birthdate}</font></p>
            <p className="ml-[6rem] mt-[20px] text-white"><font style={{fontSize: "25px"}}><i>{verified}</i></font></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
