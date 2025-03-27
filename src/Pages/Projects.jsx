import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router"; 

import projectsData from "../Data/Projects.json";
import { MdArrowOutward } from "react-icons/md";

const Projects = () => 
{
    // Get the latest four projects
    const latestProjects = [...projectsData].reverse().slice(0, 4);

    return (
        <div className="flex flex-col gap-4 mt-12">
            <h2 className="text-2xl font-bold text-teal-400">Projects</h2>
            {
                latestProjects.map((project) => 
                {
                    const { id, icon, title, description, demo_link, tools } = project;

                    return (
                    <Link key={id} to={demo_link} target="_blank" rel="noopener noreferrer"  className="relative group border border-slate-700 rounded-lg overflow-hidden p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-teal-400">
                        {/* Background hover effect */}
                        <div className="absolute inset-0 bg-teal-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

                        <div className=" flex items-center gap-4">
                            {/* Project Icon */}
                            <i className={`${icon} text-3xl text-teal-400 transition-transform duration-300 group-hover:scale-110`}></i>

                            {/* Project Details */}
                            <div className="flex-1">
                                <h2 className="flex text-lg font-bold items-center gap-3">
                                    {title}
                                    <p className="text-teal-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" title="View Demo"><FiArrowUpRight /></p>
                                </h2>
                                <p className="text-base text-slate-300 leading-relaxed transition-opacity duration-300 group-hover:opacity-80">{description}</p>

                                {/* Tools used */}
                                <div className="flex flex-wrap gap-3 mt-4">
                                    {
                                        tools.map((tool, index) =>
                                        {
                                            return(
                                                <span key={index} className="bg-slate-800 text-teal-400 px-3 py-1 text-xs font-medium rounded-md border border-slate-600">{tool}</span>
                                            )
                                        } )
                                    }
                                </div>
                            </div>
                        </div>
                    </Link>
                    );
                })
            }
            <Link to="/projects" className="text-teal-400 flex items-center gap-1">View project archive <MdArrowOutward/></Link>
        </div>
    );
};

export default Projects;
