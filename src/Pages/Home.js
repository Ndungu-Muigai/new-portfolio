import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";

import Logo from '../assets/Images/Logo.png';

const Home = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center h-screen">
            <div className="text-center text-white w-full md:w-1/2 md:mr-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Hello there</h1>
                <p className="text-lg md:text-xl mb-4">My name is Samuel Muigai</p>
                <p className="text-lg mb-5 md:text-xl md:mb-8">
                    I'm a{" "}
                    <ReactTyped
                        strings={[
                            "Front End Developer",
                            "Back End Developer",
                            "Full Stack Software Engineer"
                        ]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                        className="font-bold"
                    />
                </p>
                <div className="flex flex-row justify-center space-x-10 p-2 items-center">
                    <Link to="/about" className="button font-bold py-2 px-4 rounded hover:text-white hover:underline">About Me</Link>
                    <Link to="/contacts" className="button font-bold py-2 px-4 rounded hover:text-white hover:underline">Contact Me</Link>
                </div>
            </div>
            <div className="w-full md:w-1/2 mr-8 hidden md:block">
                <img src={Logo} alt="Samuel Ndung'u Muigai" className="w-full rounded-lg shadow-xl"/>
            </div>
        </div>
    );
};

export default Home;
