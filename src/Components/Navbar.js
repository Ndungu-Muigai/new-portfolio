import { Link } from "react-router-dom";

const Navbar = () => 
{
    return ( 
        <nav className="bg-slate-600 text-white flex flex-row p-5 text-md space-x-4 border-red-400 w-full fixed top-0 md:text-lg justify-end ">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contacts">Contacts</Link>
        </nav>
     );
}
 
export default Navbar;
