import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

function Skills() {
    const [inView, setInView] = useState(false)

    const skills = [
        { name: 'HTML', percent: 90, icon: 'H' },
        { name: 'CSS', percent: 85, icon: 'C' },
        { name: 'PHP', percent: 65, icon: 'P' },
        { name: 'Tailwind', percent: 75, icon: 'T' },
        { name: 'Bootstrap 5', percent: 80, icon: 'B' },
        { name: 'React', percent: 60, icon: 'R' },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    }

    const cardVariants = {
        hidden: { scale: 0.9, opacity: 0, y: 20 },
        visible: {
            scale: 1, opacity: 1, y: 0,
            transition: { type: 'spring', stiffness: 300, damping: 20 }
        }
    }

    return (
        <section className="py-24 md:py-32 bg-gray-50 dark:bg-apple-gray/20" id="skills">
            <div className="apple-container">

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    onViewportEnter={() => setInView(true)}
                    className="mb-16 text-center"
                >
                    <p className="text-xs font-bold tracking-widest text-gray-500 dark:text-gray-400 uppercase mb-3">Keahlian</p>
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Technical Skills
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="glass-card rounded-3xl p-6 text-center dark:hover:bg-apple-gray cursor-default"
                        >
                            <div className="w-14 h-14 mx-auto mb-4 bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-full flex items-center justify-center text-xl font-bold text-gray-800 dark:text-white shadow-sm">
                                {skill.icon}
                            </div>

                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                                {skill.name}
                            </h3>

                            <div className="w-full h-1.5 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden mb-2">
                                <motion.div
                                    className="h-full bg-gray-900 dark:bg-white rounded-full rounded-r-none"
                                    initial={{ width: 0 }}
                                    animate={{ width: inView ? `${skill.percent}%` : 0 }}
                                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 + (index * 0.1) }}
                                ></motion.div>
                            </div>

                            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                                {skill.percent}%
                            </span>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    )
}

export default Skills
