import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={"flex space-x-2"}>
      <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        {/* Dashboard should only show for the use on */}
        <Link to="/dashboard">Dashboard</Link>
        {/* this and the above should switch btw state */}
        <Link to="/profile">My Profile</Link>
        <Link to="/contact">Contact</Link>


        <div className="block relative">
            <Link to="/about">About</Link>
        </div>
    </div>
  );
};
export default NavBar;
