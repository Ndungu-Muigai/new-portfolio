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
            <div className="grid grid-cols-4 gap-4">
                <FaHtml5/>
                <FaCss3Alt/>
                <FaBootstrap/>
                <RiTailwindCssFill/>
                <IoLogoJavascript/>
                <FaReact/>
                <FaPython/>
                <SiMysql/>
                <BiLogoPostgresql/>
                <FaGitAlt/>
                <FaGithub/>
            </div>
        </>
     );
}
 
export default Skills;