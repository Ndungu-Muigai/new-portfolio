import { useEffect, useState } from "react"
import { motion } from "motion/react"

const titles = [
  "Full-Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Problem Solver",
]

const Hero = () => 
{
    const [spot, setSpot] = useState({ x: 0, y: 0 })

    const [typed, setTyped] = useState("")
    const [titleIndex, setTitleIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    const handleMouseMove = (e) => 
    {
        const { clientX, clientY, currentTarget } = e
        const rect = currentTarget.getBoundingClientRect()

        setSpot({x: clientX - rect.left, y: clientY - rect.top, })
    }

    useEffect(() => 
    {
        const full = titles[titleIndex % titles.length]
        const speed = isDeleting ? 40 : 90
        const pauseAtEnd = 1200

        const timer = setTimeout(() => 
        {
            if (!isDeleting) 
            {
                const next = full.slice(0, typed.length + 1)
                setTyped(next)

                if (next === full) 
                {
                    setTimeout(() => setIsDeleting(true), pauseAtEnd)
                }
            } 
            else 
            {
                const next = full.slice(0, typed.length - 1)
                setTyped(next)

                if (next.length === 0) 
                {
                    setIsDeleting(false)
                    setTitleIndex((i) => (i + 1) % titles.length)
                }
            }
        }, speed)

        return () => clearTimeout(timer)
    }, [typed, isDeleting, titleIndex])

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-[#0a192f] text-white overflow-hidden px-4 sm:px-6" onMouseMove={handleMouseMove}>
            {/* Noise Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",}}/>

            {/* Ambient Vignette */}
            <div className="absolute inset-0 pointer-events-none" style={{background: "radial-gradient(circle at center, rgba(255,255,255,0.06), transparent 60%)",}}/>

            {/* Grid */}
            <div className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('/grid.svg')" }}/>

            {/* Spotlight */}
            <div className="absolute inset-0 pointer-events-none" style={{background: `radial-gradient(600px 600px at ${spot.x}px ${spot.y}px, rgba(59,130,246,0.16), transparent 40%), radial-gradient(360px 360px at ${spot.x}px ${spot.y}px, rgba(6,182,212,0.12), transparent 45%)`, transition: "background 200ms ease-out",}}/>

            {/* Floating blobs - Responsive sizes */}
            <motion.div animate={{ y: [0, -30, 0], x: [0, 20, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute w-40 h-40 sm:w-60 sm:h-60 lg:w-80 lg:h-80 bg-blue-500/10 blur-[80px] sm:blur-[120px] rounded-full top-10 left-10"/>

            <motion.div animate={{ y: [0, 30, 0], x: [0, -20, 0] }} transition={{ duration: 10, repeat: Infinity }} className="absolute w-40 h-40 sm:w-60 sm:h-60 lg:w-md lg:h-112 bg-cyan-500/10 blur-[80px] sm:blur-[120px] rounded-full bottom-20 right-10" />

            <motion.div animate={{ y: [0, -40, 0] }} transition={{ duration: 12, repeat: Infinity }} className="absolute w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-teal-500/10 blur-[80px] sm:blur-[120px] rounded-full -bottom-10 left-1/3" />

            {/* Title Glow - Responsive */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-24 h-16 sm:w-32 sm:h-20 lg:w-40 lg:h-20 bg-blue-500/20 blur-[60px] sm:blur-[120px] rounded-full pointer-events-none" />

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="relative z-10 max-w-6xl w-full">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-center">
                    {/* TEXT */}
                    <div className="text-center md:text-left order-2 md:order-1">
                        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-4 sm:mb-6">
                            Hi, I'm{" "}
                            <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">Samuel Muigai</span>
                        </motion.h1>

                        {/* Typewriter */}
                        <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="text-base sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 font-medium h-8 sm:h-10 flex items-center justify-center md:justify-start gap-2">
                            <span className="text-gray-400">I'm a</span>
                            <span className="text-white">{typed}</span>
                            <span className="w-2 h-5 sm:w-3 sm:h-6 bg-white/80 animate-pulse rounded-sm" />
                        </motion.p>

                        {/* CTA */}
                        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                            <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} href="#projects" className="group inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl font-semibold bg-linear-to-r from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/20 hover:shadow-cyan-500/40 transition-all duration-300 text-sm sm:text-base">View Projects</motion.a>
                            <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} href="#about" className="inline-flex items-center justify-center border border-white/20 px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl font-semibold bg-white/5 backdrop-blur hover:bg-white/10 transition-colors text-sm sm:text-base">About Me</motion.a>
                        </motion.div>
                    </div>

                    {/* AVATAR */}
                    <motion.div whileHover={{ rotateX: 6, rotateY: -6 }} transition={{ type: "spring", stiffness: 120 }} className="relative flex justify-center order-1 md:order-2 mb-6 md:mb-0">
                        <div className="absolute -inset-6 sm:-inset-10 bg-linear-to-r from-blue-500/20 via-cyan-500/20 to-teal-500/20 blur-2xl sm:blur-3xl rounded-full" />

                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-70 md:h-75 lg:w-[320px] lg:h-95 rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl shadow-[0_20px_80px_rgba(59,130,246,0.35)]">
                            <img src="/avatar.png" className="w-full h-full object-cover" alt="avatar" />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default Hero