import { motion } from "motion/react"
import { useState, useEffect } from "react"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", svg: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg", color: "#61DAFB" },
      { name: "Next.js", svg: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nextdotjs.svg", color: "#000000" },
      { name: "JavaScript", svg: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg", color: "#F7DF1E" },
      { name: "TypeScript", svg: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/typescript.svg", color: "#3178C6" },
      { name: "Tailwind", svg: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg", color: "#06B6D4" },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", svg: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg", color: "#339933" },
      { name: "PHP", svg: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/php.svg", color: "#777BB4" },
      { name: "Python", svg: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg", color: "#3776AB" },
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", svg: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mysql.svg", color: "#00618A" },
      { name: "MongoDB", svg: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg", color: "#47A248" },
      { name: "PostgreSQL", svg: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postgresql.svg", color: "#336791" },
    ]
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", svg: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/git.svg", color: "#F05032" },
      { name: "GitHub", svg: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg", color: "#181717" },
    ]
  },
]

const SkillIcon = ({ skill }) => 
{
  const [svgContent, setSvgContent] = useState("")

  useEffect(() => {
    fetch(skill.svg)
      .then(res => res.text())
      .then(setSvgContent)
      .catch(() => {})
  }, [skill.svg])

  return (
    <div className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform duration-300 shrink-0" style={{ color: skill.color }} dangerouslySetInnerHTML={{ __html: svgContent.replace(/<svg/, '<svg fill="currentColor"') }}
    />
  )
}

const allSkills = [
  ...skillCategories[0].skills,
  ...skillCategories[1].skills,
  ...skillCategories[2].skills,
  ...skillCategories[3].skills,
]

const About = () => 
{
  return (
    <section id="about" className="relative min-h-screen py-10 sm:py-20 px-4 sm:px-6 bg-[#0a192f]">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false }}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">About <span className="text-cyan-400">Me</span></h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-cyan-500 rounded mb-8 sm:mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left - Bio */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: false }}>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">
              I'm a passionate Full-Stack Developer
            </h3>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              With over 3 years of experience in web development, I specialize in building 
              modern, responsive, and user-friendly applications. My journey started with 
              curiosity for how things work on the web, and it has evolved into a career 
              where I get to create meaningful digital experiences.
            </p>
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              I believe in writing clean, maintainable code and staying up-to-date with 
              the latest technologies. When I'm not coding, you can find me exploring 
              new frameworks, contributing to open-source projects, or sharing knowledge 
              with the developer community.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 sm:p-4">
                <span className="text-2xl sm:text-3xl font-bold text-blue-400">{new Date().getFullYear() - 2023}+</span>
                <p className="text-gray-400 text-xs sm:text-sm">Years Experience</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 sm:p-4">
                <span className="text-2xl sm:text-3xl font-bold text-cyan-400">10+</span>
                <p className="text-gray-400 text-xs sm:text-sm">Projects Completed</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Skills Icons */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: false }}>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Tech Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
              {
                allSkills.map((skill, index) => (
                  <motion.div key={skill.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, delay: index * 0.03 }} viewport={{ once: false }} className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300 group">
                    <SkillIcon skill={skill} />
                    <span className="text-xs sm:text-sm font-medium text-gray-400 group-hover:text-white transition-colors whitespace-nowrap">{skill.name}</span>
                  </motion.div>
                ))
              }
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About