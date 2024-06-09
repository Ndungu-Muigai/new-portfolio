import { Link } from "react-router-dom";

const Navbar = () => 
{
    return ( 
        <nav className="bg-slate-600 text-white flex flex-row p-5 text-base space-x-6 border-red-400 w-full fixed top-0 md:text-lg justify-end z-10">
            <Link to="/" className="nav-links">Home</Link>
            <Link to="/about" className="nav-links">About</Link>
            <Link to="/projects" className="nav-links">Projects</Link>
            <Link to="/contacts" className="nav-links">Contacts</Link>
        </nav>
     );
}
 
export default Navbar;
