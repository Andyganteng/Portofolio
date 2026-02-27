import { motion } from 'framer-motion'

function Projects() {
    const projects = [
        {
            title: "XI RPL 2 — Class Website",
            desc: "Website kelas XI RPL 2 yang dibangun menggunakan React dan Vite, dilengkapi fitur galeri, struktur kelas, dan panel admin. Di-deploy di Vercel dengan integrasi Firebase Realtime Database.",
            tech: ["React", "Vite", "Firebase", "Vercel", "TailwindCSS"],
            link: "https://xirpl2.vercel.app/",
            img: "/images/project-xirpl2.svg"
        },
        {
            title: "Personal Portfolio",
            desc: "Website portfolio personal yang sedang kamu lihat sekarang. Dibangun dengan React + Vite dan di-deploy di GitHub Pages menggunakan custom domain. Tampilan modern ala Apple / iOS 16.",
            tech: ["React", "Vite", "Tailwind CSS", "GitHub Pages"],
            link: "https://andyz.my.id/",
            img: "/images/project-portfolio.svg"
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    }

    const projectVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { type: 'spring', stiffness: 200, damping: 24 }
        }
    }

    return (
        <section className="py-24 md:py-32" id="projects">
            <div className="apple-container">

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <p className="text-xs font-bold tracking-widest text-gray-500 dark:text-gray-400 uppercase mb-3">Karya</p>
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Featured Projects
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid lg:grid-cols-2 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.a
                            key={index}
                            variants={projectVariants}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="group block glass-card rounded-[2rem] overflow-hidden dark:hover:bg-white/[0.08]"
                        >
                            <div className="aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-black/50 p-6 sm:p-10 pb-0">
                                <div className="w-full h-full bg-white dark:bg-apple-gray rounded-t-2xl shadow-xl overflow-hidden border border-b-0 border-gray-200 dark:border-white/10 group-hover:-translate-y-2 transition-transform duration-500">
                                    <img
                                        src={project.img}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                            </div>

                            <div className="p-8 sm:p-10 bg-white dark:bg-transparent">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                    {project.desc}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 text-xs font-semibold rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white group-hover:underline">
                                    Lihat Project
                                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>

            </div>
        </section>
    )
}

export default Projects
