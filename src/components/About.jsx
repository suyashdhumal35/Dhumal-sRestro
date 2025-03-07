import { useContext, useEffect, useState } from "react";
import UserContext from "../utils/UserContext";
import { e_mail, gitAPI } from "../utils/links";

const About = () => {
  const { loggedInUser } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState({
    name: "Dummy",
    location: "Default",
    avatar_url: ""
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch(gitAPI);
      const data = await response.json();
      setUserInfo(data);
    };

    fetchUserData();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <p className="text-gray-600 mb-6 text-base">
        Welcome to our food ordering platform! We provide delicious food at your doorstep.
      </p>
      <div className="bg-gray-50 p-12 rounded-xl shadow-2xl w-full">
        <h2 className="text-2xl font-semibold mb-6">LoggedIn User: {loggedInUser}</h2>
        <div className="flex items-center mt-8">
          <img
            src={userInfo.avatar_url}
            alt="User Avatar"
            className="w-32 h-32 rounded-lg mr-8 shadow-lg"
          />
          <div>
            <h2 className="text-xl font-bold">Name: {userInfo.name}</h2>
            <h3 className="text-gray-700 text-lg">Location: {userInfo.location}</h3>
            <h4 className="text-gray-500 text-lg">Contact: {e_mail}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;