import { motion } from 'framer-motion'
import {
  SiCplusplus, SiPython, SiHtml5, SiJavascript, SiTailwindcss, SiReact,
  SiDjango, SiPhp, SiNodedotjs, SiExpress, SiDocker, SiVercel, SiRender, SiGit,
  SiPostgresql
} from 'react-icons/si'
import { FaJava, FaCss3Alt, FaDatabase } from 'react-icons/fa'

const skills = [
  { name: 'C++', logo: <SiCplusplus size={28} color="#00599C" /> },
  { name: 'Python', logo: <SiPython size={28} color="#3776AB" /> },
  { name: 'Java', logo: <FaJava size={28} color="#E32D2F" /> },
  { name: 'HTML', logo: <SiHtml5 size={28} color="#E34F26" /> },
  { name: 'CSS', logo: <FaCss3Alt size={28} color="#1572B6" /> },
  { name: 'JS', logo: <SiJavascript size={28} color="#F7DF1E" /> },
  { name: 'Tailwind', logo: <SiTailwindcss size={28} color="#06B6D4" /> },
  { name: 'React', logo: <SiReact size={28} color="#61DAFB" /> },
  { name: 'Django', logo: <SiDjango size={28} color="#44B78B" /> },
  { name: 'PHP', logo: <SiPhp size={28} color="#777BB4" /> },
  { name: 'Node', logo: <SiNodedotjs size={28} color="#339933" /> },
  { name: 'Express', logo: <SiExpress size={28} color="#0F172A" /> },
  { name: 'Docker', logo: <SiDocker size={28} color="#2496ED" /> },
  { name: 'Vercel', logo: <SiVercel size={28} color="#0F172A" /> },
  { name: 'Render', logo: <SiRender size={28} color="#46E3B7" /> },
  { name: 'Git', logo: <SiGit size={28} color="#F05032" /> },
  { name: 'SQL', logo: <FaDatabase size={28} color="#336791" /> },
  { name: 'PostgreSQL', logo: <SiPostgresql size={28} color="#4169E1" /> }
]

const marqueeItems = [...skills, ...skills, ...skills]

function Skill() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="py-16 md:py-24 overflow-hidden bg-bg-main border-t border-secondary-muted"
    >
      <div className="max-w-5xl mx-auto px-6 mb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold text-primary-accent tracking-tight inline-block"
        >
          Skills<span className="text-neon-cyan">.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-text-muted text-sm mt-3"
        >
          Technologies I work with
        </motion.p>
      </div>

      <div className="relative w-full border-t border-b border-secondary-muted py-5 md:py-7 bg-bg-main flex overflow-x-hidden">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-bg-main to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-bg-main to-transparent" />

        <div className="flex whitespace-nowrap animate-marquee">
          {marqueeItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.12, color: '#0284C7' }}
              className="flex items-center text-sm md:text-base font-bold tracking-widest text-text-muted mx-5 md:mx-7 select-none cursor-default transition-colors duration-200"
            >
              <div className="flex items-center gap-3">
                <span className="shrink-0 transition-transform duration-200">{item.logo}</span>
                <span className="hover:text-primary-accent transition-colors duration-200">{item.name}</span>
              </div>
              <span className="text-neon-cyan ml-5 md:ml-7 font-black opacity-40">/</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative w-full py-5 md:py-7 bg-bg-main flex overflow-x-hidden mt-2">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-bg-main to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-bg-main to-transparent" />

        <div className="flex whitespace-nowrap animate-marquee-reverse">
          {marqueeItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.12 }}
              className="flex items-center text-sm md:text-base font-bold tracking-widest text-text-muted mx-5 md:mx-7 select-none cursor-default hover:text-primary-accent transition-colors duration-200"
            >
              <div className="flex items-center gap-3">
                <span className="shrink-0 opacity-50">{item.logo}</span>
                <span>{item.name}</span>
              </div>
              <span className="text-secondary-muted ml-5 md:ml-7 font-black">/</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Skill