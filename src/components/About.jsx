import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
}

function About() {
  return (
    <section id="about" className="py-24 md:py-36 relative overflow-hidden bg-bg-main border-t border-secondary-muted">

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto px-6 relative z-10"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary-accent tracking-tight inline-block">
            About<span className="text-neon-cyan">.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="max-w-2xl mx-auto flex flex-col gap-6 text-center"
        >
          <h3 className="text-xl md:text-2xl font-bold text-primary-accent tracking-tight">
            Software Engineer &amp; Web Developer
          </h3>

          <p className="text-text-muted leading-relaxed font-normal text-sm md:text-base">
           I am a Software Engineering student with a strong passion for problem-solving, continuous learning, and creating meaningful software solutions. I am a curious and analytical individual who enjoys understanding complex problems, breaking them down, and developing efficient and practical solutions. I value discipline, consistency, and attention to detail, while continuously seeking opportunities to expand my knowledge and improve my abilities. My goal is to grow into a well-rounded and adaptable software engineer who can approach challenges thoughtfully and contribute to building reliable and impactful solutions.

           
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About
