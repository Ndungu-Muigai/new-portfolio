import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaBootstrap, FaGitAlt, FaGithub, FaAws, FaPhp  } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import { RiTailwindCssFill } from "react-icons/ri"
import { SiMysql } from "react-icons/si"
import { BiLogoPostgresql } from "react-icons/bi"
import { DiMongodb } from "react-icons/di";

import FlaskIcon from "../assets/Images/Flask.png"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"

const Skills = () => 
{
    return ( 
        <>
            <Navbar/>
            <h1 className="mt-20">Skills</h1>
            <div className="flex justify-center items-center my-2 mx-10">
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-14">
                    <div className="skills-cols">
                        <FaHtml5 className="skills-icons text-html"/>
                        <p>HTML5</p>
                    </div>
                    <div className="skills-cols">
                        <FaCss3Alt className="skills-icons text-blue"/>
                        <p>CSS3</p>
                    </div>
                    <div className="skills-cols">
                        <FaBootstrap className="skills-icons text-purple"/>
                        <p>Bootstrap</p>
                    </div>
                    <div className="skills-cols">
                        <RiTailwindCssFill className="skills-icons text-lightblue"/>
                        <p>Tailwind</p>
                    </div>
                    <div className="skills-cols">
                        <IoLogoJavascript className="skills-icons bg-yellow-400 text-black"/>
                        <p>JavaScript</p>
                    </div>
                    <div className="skills-cols">
                        <FaReact className="skills-icons text-lightblue"/>
                        <p>React</p>
                    </div>
                    <div className="skills-cols">
                        <FaPython className="skills-icons text-python"/>
                        <p>Python</p>
                    </div>
                    <div className="skills-cols">
                        <FaPhp className="skills-icons text-php"/>
                        <p>PHP</p>
                    </div>
                    <div className="skills-cols">
                        <img width="50" height="50" src={FlaskIcon} alt="Flask" className="skills-icons bg-white rounded"/>
                        <p>Flask</p>
                    </div>
                    <div className="skills-cols">
                        <SiMysql className="skills-icons text-blue"/>
                        <p>MySQL</p>
                    </div>
                    <div className="skills-cols">
                        <BiLogoPostgresql className="skills-icons text-blue"/>
                        <p>PostgreSQL</p>
                    </div>
                    <div className="skills-cols">
                        <DiMongodb className="skills-icons text-green"/>
                        <p>MongoDB</p>
                    </div>
                    <div className="skills-cols">
                        <FaGitAlt className="skills-icons text-git"/>
                        <p>Git</p>
                    </div>
                    <div className="skills-cols">
                        <FaGithub className="skills-icons"/>
                        <p>GitHub</p>
                    </div>
                    <div className="skills-cols">
                        <FaAws className="skills-icons text-aws"/>
                        <p>AWS</p>
                    </div>
                </div>
            </div>
            <div className="2xl:fixed 2xl:w-full 2xl:bottom-0">
                <Footer/>
            </div>
        </>
    )
}
 
export default Skills
