import { motion } from "motion/react"

const projects = [
  {
    title: "GetOut N Travel",
    description: "A tours and travel platform that showcases upcoming trips with a clean, responsive interface for easy exploration.",
    tags: ["React", "Tailwind", "Vite"],
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=500&fit=crop",
    live: "https://getoutntravel.vercel.app/",
    github: "https://github.com/Ndungu-Muigai/getoutntravel"
  },
  {
    title: "Event Management System",
    description: "A full-stack platform for creating, managing, and attending events. Includes authentication, ticketing, event creation and role-based access.",
    tags: ["NextJS", "Tailwind", "PostgreSQL", "Supabase", "Prisma"],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop",
    live: "https://evnthub.vercel.app/",
    github: "https://github.com/Ndungu-Muigai/event-management-system"
  },
  {
    title: "Quizfusion Quiz App",
    description: "An interactive quiz application that allows users to test their knowledge on various topics with instant feedback and dynamic scoring.",
    tags: ["React", "Tailwind"],
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&h=500&fit=crop",
    live: "https://quizfusion.vercel.app/",
    github: "https://github.com/Ndungu-Muigai/quiz-app.git"
  },
  {
    title: "Rent Hive Rental Management",
    description: "A comprehensive rental management system that simplifies property listings, tenant requests, and rent payments.",
    tags: ["React", "Bootstrap", "Flask", "PostgreSQL", "AWS", "Redis"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
    live: "https://rent-hive.vercel.app/",
    github: "https://github.com/LourdesN/rent-hive"
  },
  {
    title: "Leave Management System",
    description: "A robust leave management system designed to streamline leave applications, approvals, and tracking for organizations.",
    tags: ["React", "Bootstrap", "Flask", "PostgreSQL", "AWS", "Redis"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
    live: "https://mobikey-lms.vercel.app/",
    github: "https://github.com/Ndungu-Muigai/lms-frontend"
  },
  {
    title: "Liteflux Enterprises",
    description: "A fully functional e-commerce platform for selling electrical and solar products, featuring product browsing, cart management, and order processing.",
    tags: ["React", "Bootstrap", "Flask", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    live: "https://liteflux-shop.vercel.app/",
    github: "https://github.com/Ndungu-Muigai/liteflux-shop"
  },
  {
    title: "Heads & Tails Game",
    description: "An engaging heads or tails coin flip game with a clean UI and randomized outcomes.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1518644961665-ed172691aaa1?w=800&h=500&fit=crop",
    live: "https://ndungu-muigai.github.io/Heads-Tails-Game/",
    github: "https://github.com/ndungu-muigai/Heads-Tails-Game"
  },
  {
    title: "Value Counter",
    description: "A lightweight counter application that enables users to increment, decrement, and reset values dynamically.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    live: "https://ndungu-muigai.github.io/Counter-Using-HTML-CSS-JS/",
    github: "https://github.com/ndungu-muigai/Counter-Using-HTML-CSS-JS"
  },
  {
    title: "Dictionary Application",
    description: "A dictionary app that allows users to search for word definitions, synonyms, and pronunciations using a public API.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=500&fit=crop",
    live: "https://ndungu-muigai.github.io/dictionary-app-project/",
    github: "https://github.com/ndungu-muigai/dictionary-app-project.git"
  },
  {
    title: "Color Game",
    description: "A fun and interactive color-matching game where players test their ability to identify colors within a given time.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=500&fit=crop",
    live: "https://ndungu-muigai.github.io/Color-Game/",
    github: "https://github.com/ndungu-muigai/Color-Game"
  }
]

const Projects = () => {
  return (
    <section id="projects" className="relative min-h-screen py-20 px-6 bg-[#0d2137]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false }}
              className="group flex flex-col bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent opacity-80" />
              </div>

              <div className="p-5 flex-1">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 text-xs bg-blue-500/20 text-cyan-400 rounded-full border border-blue-500/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-5 pb-5 flex-shrink-0">
                <div className="flex gap-3">
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 border border-white/20 bg-white/5 text-white text-sm font-medium rounded-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

