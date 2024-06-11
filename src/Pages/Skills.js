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
            <div className="flex flex-row p-4 w-1/2 justify-center items-center">
                <FaHtml5 className="skills-icons"/>
                <FaCss3Alt className="skills-icons"/>
                <FaBootstrap className="skills-icons"/>
                <RiTailwindCssFill className="skills-icons"/>
                <IoLogoJavascript className="skills-icons"/>
                <FaReact className="skills-icons"/>
                <FaPython className="skills-icons"/>
                <SiMysql className="skills-icons"/>
                <BiLogoPostgresql className="skills-icons"/>
                <FaGitAlt className="skills-icons"/>
                <FaGithub className="skills-icons"/>
            </div>
        </>
     );
}
 
export default Skills;