import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom"; // Ensure correct import
import projectsData from "../Data/Projects.json";

const Projects = () => {
  // Get the latest four projects
  const latestProjects = [...projectsData].reverse().slice(0, 4);

  return (
    <div className="flex flex-col gap-8 mt-12">
      {latestProjects.map((project) => {
        const { id, icon, title, description, demo_link, tools } = project;

        return (
          <div
            key={id}
            className="relative group border border-slate-700 rounded-lg overflow-hidden p-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-teal-400"
          >
            {/* Background hover effect */}
            <div className="absolute inset-0 bg-teal-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

            <div className="relative flex flex-col space-y-6">
              {/* Project Title & Icon */}
              <div className="flex items-center gap-6">
                <i className={`${icon} text-3xl text-teal-400 transition-transform duration-300 group-hover:scale-110`}></i>
                <h2 className="text-xl font-bold flex items-center gap-3">
                  {title}
                  <Link
                    to={demo_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    title="View Demo"
                  >
                    <FiArrowUpRight />
                  </Link>
                </h2>
              </div>

              {/* Project Description */}
              <p className="text-base text-slate-300 leading-relaxed transition-opacity duration-300 group-hover:opacity-80">
                {description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <span
                    key={index}
                    className="bg-slate-800 text-slate-300 px-4 py-1.5 text-sm font-medium rounded-md border border-slate-600"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
