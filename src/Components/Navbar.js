import { NavLink } from "react-router-dom"

const Navbar = () => 
{
    return (
        <nav className=" bg-inherit border-b-2 flex flex-row p-5 text-base space-x-6 w-full fixed top-0 md:text-lg justify-end z-10">
            <NavLink to="/" className="nav-links">Home</NavLink>
            <NavLink to="/about" className="nav-links">About</NavLink>
            <NavLink to="/about#projects" className="nav-links">Projects</NavLink>
            <NavLink to="/about#contacts" className="nav-links">Contacts</NavLink>
        </nav>
    )
}

export default Navbar;
