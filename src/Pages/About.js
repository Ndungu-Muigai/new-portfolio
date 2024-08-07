import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

import Logo from "../assets/Images/Logo.png"

const About = () =>
{
    // const openPdfInNewWindow = () => 
    // {
    //     window.open(require("../assets/CV/Curriculum Vitae.pdf"));
    // }

    return (
        <>
            <Navbar/>
            <div className="flex flex-row">
                <div className="hidden md:flex md:justify-center md:items-center md:w-1/2 md:px-20">
                    <img src={Logo} alt="Profile" className="w-full items-center"/>
                </div>
                <div className="mt-16 md:mt-20 h-max flex flex-col justify-center items-center p-4 md:px-20">
                    <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">Get to know me</h1>
                    <p className="text-white text-center md:text-left mb-4 max-w-lg">
                        Hi. My name is Samuel Muigai, a Full Stack Software Engineer based in Nairobi, Kenya. I have a bachelor's degree in Telecommunications from Strathmore University and I have also completed Moringa School's Software Engineering course.
                    </p>
                    <p className="text-white text-center md:text-left mb-4 max-w-lg">
                        I love creating projects that help solve real-life problems we face in our daily lives. You can check out some of my work under the projects section.
                    </p>
                    <p className="text-white text-center md:text-left mb-4 max-w-lg">
                        I am open to new collaborations or work where I can contribute and grow my skills. Feel free to connect with me through my various social media pages under the contacts section.
                    </p>
                    <p className="text-white text-center md:text-left mb-8 max-w-lg">
                        Apart from coding, I love swimming and playing video games in my spare time.
                    </p>
                    {/* <button className="button font-bold mb-2 py-2 px-4 rounded md:mb-8" onClick={openPdfInNewWindow}>View my resume</button> */}
                </div>
            </div>
            <div className="2xl:fixed 2xl:w-full 2xl:bottom-0">
                <Footer/>
            </div>
        </>
    )
};

export default About;