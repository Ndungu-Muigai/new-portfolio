import { NavLink } from "react-router-dom"

const Navbar = () => 
{
    return (
        <nav className=" bg-dark border-b-2 border-y-gold flex flex-row p-5 text-base space-x-6 w-full fixed top-0 md:text-lg justify-end z-50">
            <NavLink to="/" className="nav-links">Home</NavLink>
            <NavLink to="/about" className="nav-links">About</NavLink>
            <NavLink to="/about#projects" className="nav-links">Projects</NavLink>
            <NavLink to="/about#skills" className="nav-links">Skills</NavLink>
            <NavLink to="/about#contacts" className="nav-links">Contacts</NavLink>
        </nav>
    )
}

export default Navbar;
