import { Link } from "react-router-dom";


const NavBar = () => {
  return (
      <div className="flex space-x-10">
      <div> <h1 className= " -mt-3 text-5xl font-bold text-gray-100">Collmates</h1></div>
    <div className={"flex space-x-10 -mb-2"}>
      <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        {/* Dashboard should only show for the use on */}
        <Link to="/dashboard">Dashboard</Link>
        {/* this and the above should switch btw state */}

          <Link to="/profile"> Student Profile</Link>
        <Link to="/profileTenant">Tenant Profile</Link>

        <Link to="/contact">Contact</Link>


        <div className="block relative">
            <Link to="/about">About</Link>
        </div>
    </div>
        </div>
  );
};
export default NavBar;
