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
                <div className="space-x-6">
                    <FaHtml5 className="skills-icons"/>
                </div>
                <div className="space-x-6">
                    <FaBootstrap className="skills-icons"/>
                </div>
                <div className="space-x-6">
                    <RiTailwindCssFill className="skills-icons"/>
                </div>
                <div className="space-x-6">
                    <IoLogoJavascript className="skills-icons"/>
                </div>
                <div className="space-x-6">
                    <FaReact className="skills-icons"/>
                </div>
                <div className="space-x-6">
                    <FaPython className="skills-icons"/>
                </div>
                <div className="space-x-6">
                    <SiMysql className="skills-icons"/>
                </div>
                <div className="space-x-6">
                    <BiLogoPostgresql className="skills-icons"/>
                </div>
                <div className="space-x-6">
                    <FaGitAlt className="skills-icons"/>
                </div>
                <div className="space-x-6">
                    <FaGithub className="skills-icons"/>               
                </div>
            </div>
        </>
     );
}
 
export default Skills;