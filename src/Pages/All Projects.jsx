import { FaArrowLeft } from "react-icons/fa"
import { Link, useNavigate } from "react-router"
import projects from "../Data/Projects.json"

const AllProjects = () => 
{
    const navigate=useNavigate()

    return ( 
        <div className="container mx-auto py-10 px-6 bg-[#0a192f] min-h-screen">
            <button onClick={() => navigate(-1)} className="mb-6 text-teal-400 flex items-center gap-2 hover:underline">
                <FaArrowLeft/> Muigai Samuel Ndung'u
            </button>
            <h1 className="text-4xl font-bold text-center mb-4 text-gray-400">All Projects</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    [...projects].reverse().map(project => 
                    (
                        <div key={project.id} className="card shadow-lg p-2 transition-transform transform hover:scale-105 hover:shadow-xl border border-gray-700">
                            <figure>
                                <i className={`${project.icon} icon text-teal-400 mb-4`}></i>
                            </figure>
                           <div className="card-body">
                                <h2 className="text-2xl font-semibold text-gray-300">{project.title}</h2>
                                <p className="text-gray-400 mt-2 text-sm">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {
                                        project.tools.map((tool, index) => 
                                        (
                                            <span key={index} className="bg-gray-700 text-gray-300 px-3 py-1 mt-2.5 text-sm rounded-full">{tool}</span>
                                        )
                                    )}
                                </div>
                           </div>
                            <div className="card-actions flex justify-between space-x-4 p-4">
                                <Link to={project.demo_link} target="_blank" rel="noopener noreferrer" className="text-teal-400 font-medium hover:underline">Live Demo</Link>
                                <Link to={project.source_code} target="_blank" rel="noopener noreferrer" className="text-gray-400 font-medium hover:underline">Source Code</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
 
export default AllProjects;