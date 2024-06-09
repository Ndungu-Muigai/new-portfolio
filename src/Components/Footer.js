import { Link } from "react-router-dom";
import Logo from '../assets/Images/Logo.png';

import { FaWhatsapp, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaPhoneVolume } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className="fixed bottom-0 inset-x-0 flex flex-col items-center bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-4xl mx-auto p-6">
                <div className="flex flex-col mx-4 md:mx-10 space-y-3">
                    <h1 className="uppercase text-cyan-500">Quick links</h1>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/about"}>About</Link>
                    <Link to={"/projects"}>Projects</Link>
                    <Link to={"/contacts"}>Contacts</Link>
                </div>
                <div className="flex flex-col mx-4 md:mx-10 space-y-3">
                    <h1 className="uppercase text-cyan-500">Find me on social media</h1>
                    <div className="flex flex-wrap mt-4 space-x-4 md:space-x-18">
                        <Link className="icon"><FaGithub /></Link>
                        <Link className="icon"><FaLinkedinIn /></Link>
                        <Link className="icon"><FaXTwitter /></Link>
                        <Link className="icon"><FaInstagram /></Link>
                        <Link className="icon"><FaWhatsapp /></Link>
                        <Link className="icon"><FaPhoneVolume /></Link>
                        <Link className="icon"><IoMailOutline /></Link>
                    </div>
                    <img src={Logo} alt="Logo" className="w-full mt-4" />
                </div>
            </div>
            <div className="text-center w-full max-w-4xl mx-auto">
                <hr className="m-5" />
                &copy; {year} Ndung'u Muigai - All rights reserved
            </div>
        </footer>
    );
}

export default Footer;
