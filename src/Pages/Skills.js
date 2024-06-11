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
            <div className="flex flex-row justify-center items-center flex-wrap space-x-6">
                <div>
                    <FaHtml5 className="skills-icons"/>
                </div>
                <div>
                    <FaBootstrap className="skills-icons"/>
                </div>
                <div>
                    <RiTailwindCssFill className="skills-icons"/>
                </div>
                <div>
                    <IoLogoJavascript className="skills-icons"/>
                </div>
                <div>
                    <FaReact className="skills-icons"/>
                </div>
                <div>
                    <FaPython className="skills-icons"/>
                </div>
                <div>
                    <SiMysql className="skills-icons"/>
                </div>
                <div>
                    <BiLogoPostgresql className="skills-icons"/>
                </div>
                <div>
                    <FaGitAlt className="skills-icons"/>
                </div>
                <div>
                    <FaGithub className="skills-icons"/>               
                </div>
            </div>
        </>
     );
}
 
export default Skills;