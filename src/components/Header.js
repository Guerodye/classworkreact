import { useState } from "react";
import NavBar from "./sections/header/NavBar";
import Profile from "./sections/header/Profile";

const Header = () => {
  //adding the state for the Nav we will push

  const [user] = useState();

  return (
    <div className={"flex justify-between bg-black text-white p-3"}>
      <NavBar />
      <Profile user={user} />
    </div>
  );
};

export default Header;
