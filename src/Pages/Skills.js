import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaBootstrap, FaGitAlt, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

const Skills = () => 
{
    return ( 
        <>
            <h1>Skills</h1>
            <div className="flex flex-row justify-center items-center flex-wrap w-1/2">
                <div className="grid grid-cols-4 gap-4">
                    <div className="skills-icons border p-2">
                        <FaHtml5 />
                    </div>
                    <div className="skills-icons border p-2">
                        <FaCss3Alt />
                    </div>
                    <div className="skills-icons border p-2">
                        <FaReact />
                    </div>
                    <div className="skills-icons border p-2">
                        <FaPython />
                    </div>
                    <div className="skills-icons border p-2">
                        <FaBootstrap />
                    </div>
                    <div className="skills-icons border p-2">
                        <IoLogoJavascript />
                    </div>
                    <div className="skills-icons border p-2">
                        <RiTailwindCssFill />
                    </div>
                    <div className="skills-icons border p-2">
                        <SiMysql />
                    </div>
                    <div className="skills-icons border p-2">
                        <BiLogoPostgresql />
                    </div>
                    <div className="skills-icons border p-2">
                        <FaGitAlt />
                    </div>
                    <div className="skills-icons border p-2">
                        <FaGithub />
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Skills;
