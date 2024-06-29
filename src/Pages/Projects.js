import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import projects from "../Data/Projects.json"
import { Link } from "react-router-dom"

const Projects = () => 
{
    const projectsMap=projects.map(project =>
        {
            let {id, icon, title, description, demo_link, source_code}=project

            return(
                <div key={id} className="border-2 p-2 m-2">
                    <i className={`w-full fa-icons ${icon}`}></i>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{title}</div>
                        <p className="text-base">{description}</p>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between md:gap-3 mt-2">
                        <Link to={demo_link} target="_blank" className="button font-bold py-2 px-4 rounded">Live Demo</Link>
                        <Link to={source_code} target="_blank" className="button font-bold py-2 px-4 mt-2 md:mt-0 rounded">Source Code</Link>
                    </div>
                </div>  
            )
        }
    )
    return (
        <>
            <Navbar/>
            <div className="p-4 mt-14">
                <h1 className="text-3xl font-bold mb-2">Projects</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 m-2">
                    {projectsMap}
                </div>
            </div>
            <div className="md:fixed md:w-full md:bottom-0">
                <Footer/>
            </div> 
        </>
    )
}

export default Projects
