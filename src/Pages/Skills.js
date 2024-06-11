import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaBootstrap, FaGitAlt, FaGithub } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import { RiTailwindCssFill } from "react-icons/ri"
import { SiMysql } from "react-icons/si"
import { BiLogoPostgresql } from "react-icons/bi"

const Skills = () => 
{
    return ( 
        <>
            <h1>Skills</h1>
            <div className="flex justify-center items-center">
                <div className="grid grid-cols-4 gap-12">
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
            </div>
        </>
    )
}
 
export default Skills;
