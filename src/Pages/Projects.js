import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import projects from "../Data/Projects.json"
import { Link } from "react-router-dom"

const Projects = () => 
{
    const newProjects=[...projects].reverse()
    const projectsMap=newProjects.map(project =>
        {
            let {id, icon, title, description, demo_link, source_code}=project

            return(
                <div key={id} className="border-2 p-2 m-2 flex flex-col">
                    <i className={`w-full fa-icons ${icon}`}></i>
                    <div className="px-3 py-4 flex-grow">
                        <div className="font-bold text-xl mb-2">{title}</div>
                        <p className="text-base min-h-[70px]">{description}</p>
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
            <div className="2xl:fixed 2xl:w-full 2xl:bottom-0">
                <Footer/>
            </div> 
        </>
    )
}

export default Projects
