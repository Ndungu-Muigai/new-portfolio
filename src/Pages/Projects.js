import projects from "../Data/Projects.json"
import { Link } from "react-router-dom"

const Projects = () => 
{
    const projectsMap=projects.map(project =>
        {
            let {id, icon, title, description, demo_link, source_code}=project

            return(
                <div key={id} className="w-64 max-w-xs sm:w-80 sm:max-w-sm rounded overflow-hidden shadow-lg m-4 transform hover:scale-105 transition-transform duration-300">
                    <i className={`w-full fa-icons ${icon}`}></i>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{title}</div>
                        <p className="text-gray-700 text-base">{description}</p>
                    </div>
                    <div className="px-6 py-4 flex justify-between">
                        <Link to={demo_link} className="bg-blue-500 hover:bg-blue-700 text-white -font-bold py-2 px-4 rounded mr-2">
                            Live Demo
                        </Link>
                        <Link to={source_code} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                            Source Code
                        </Link>
                    </div>
                </div>
            )
        }
    )
    return (
        <div className="min-h-screen bg-gray-100 p-8 ">
            <h1 className="text-3xl font-bold mb-8">Projects</h1>
            <div className="flex flex-wrap justify-center">
                {projectsMap}
            </div>
        </div>
    )
}

export default Projects;
