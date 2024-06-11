import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaBootstrap, FaGitAlt, FaGithub } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri"
import { SiMysql } from "react-icons/si"
import { BiLogoPostgresql } from "react-icons/bi"

const Skills = () => 
{
    return ( 
        <>
            <h1>Skills</h1>
            <div className="flex justify-center items-center mt-2 mx-10">
                <div className="grid grid-cols-4 gap-14">
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
                        <SiMysql className="skills-icons text-blue"/>
                        <p>MySQL</p>
                    </div>
                    <div className="skills-cols">
                        <BiLogoPostgresql className="skills-icons text-blue"/>
                        <p>PostgreSQl</p>
                    </div>
                    <div className="skills-cols">
                        <FaGitAlt className="skills-icons text-git"/>
                        <p>Git</p>
                    </div>
                    <div className="skills-cols">
                        <FaGithub className="skills-icons"/>
                        <p>GitHub</p>
                    </div>
                </div>
            </div>
        </>
    )
}
 
export default Skills;
