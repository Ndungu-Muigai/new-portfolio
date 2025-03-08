import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaBootstrap, FaGitAlt, FaGithub, FaAws, FaPhp  } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io"
import { RiTailwindCssFill } from "react-icons/ri"
import { SiMysql } from "react-icons/si"
import { BiLogoPostgresql } from "react-icons/bi"
import { DiMongodb } from "react-icons/di";
import FlaskIcon from "../assets/Images/Flask.png"

const Skills = () => 
{
    return ( 
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10">
            <div className="flex flex-col justify-center items-center">
                    <FaHtml5 className="text-4xl m-5 md:text-5xl text-html"/>
                    <p>HTML5</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <FaCss3Alt className="text-4xl m-5 md:text-5xl text-blue"/>
                    <p>CSS3</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <FaBootstrap className="text-4xl m-5 md:text-5xl text-purple"/>
                    <p>Bootstrap</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <RiTailwindCssFill className="text-4xl m-5 md:text-5xl text-lightblue"/>
                    <p>Tailwind</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <IoLogoJavascript className="text-4xl m-5 md:text-5xl bg-yellow-400 text-black"/>
                    <p>JavaScript</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <FaReact className="text-4xl m-5 md:text-5xl text-lightblue"/>
                    <p>React</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <FaPython className="text-4xl m-5 md:text-5xl text-python"/>
                    <p>Python</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <FaPhp className="text-4xl m-5 md:text-5xl text-purple"/>
                    <p>PHP</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img width="50" height="50" src={FlaskIcon} alt="Flask" className="text-4xl m-5 md:text-5xl bg-white rounded"/>
                    <p>Flask</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <SiMysql className="text-4xl m-5 md:text-5xl text-blue"/>
                    <p>MySQL</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <BiLogoPostgresql className="text-4xl m-5 md:text-5xl text-blue"/>
                    <p>PostgreSQL</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <DiMongodb className="text-4xl m-5 md:text-5xl text-green"/>
                    <p>MongoDB</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <FaGitAlt className="text-4xl m-5 md:text-5xl text-git"/>
                    <p>Git</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <FaGithub className="text-4xl m-5 md:text-5xl text-slate-200"/>
                    <p>GitHub</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <FaAws className="text-4xl m-5 md:text-5xl text-aws"/>
                    <p>AWS</p>
                </div>
        </div>
     );
}
 
export default Skills;