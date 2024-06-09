import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";

import Logo from '../assets/Images/Logo.png';

const Home = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-500 to-purple-600">
            <div className="text-center text-white w-1/2 mr-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Hello there</h1>
                <p className="text-lg md:text-xl mb-4">My name is Samuel Muigai</p>
                <p className="text-lg md:text-xl mb-8">
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
                <div className="flex flex-row justify-center space-x-10">
                    <Link to="/about" className="bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">About Me</Link>
                    <Link to="/contacts" className="bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">Contact Me</Link>
                </div>
            </div>
            <div className="w-1/2 mr-8">
                <img src={Logo} alt="Samuel Ndung'u Muigai" className="w-full rounded-lg shadow-xl"/>
            </div>
        </div>
    );
};

export default Home;
