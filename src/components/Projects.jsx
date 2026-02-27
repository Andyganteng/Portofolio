import { motion } from 'framer-motion'

const projects = [
    {
        num: '01',
        title: 'XI RPL 2 — Class Website',
        year: '2025',
        desc: 'Website resmi kelas XI RPL 2. Ada galeri foto, struktur kelas, dan panel admin untuk manajemen konten secara real-time.',
        tech: ['React', 'Firebase', 'Tailwind', 'Vercel'],
        url: 'https://xirpl2.vercel.app/',
    },
    {
        num: '02',
        title: 'Personal Portfolio',
        year: '2025',
        desc: 'Website portfolio ini — dibangun dengan React + Vite, tema gelap/terang, dan music player terintegrasi. Di-host di GitHub Pages.',
        tech: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
        url: 'https://andyz.my.id/',
    },
]

export default function Projects() {
    return (
        <section id="projects" className="py-28 bg-white dark:bg-zinc-900">
            <div className="wrap">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-4 mb-16"
                >
                    <span className="label">Karya</span>
                    <div className="flex-1 h-px bg-zinc-100 dark:bg-zinc-800"></div>
                    <span className="text-xs text-zinc-300 dark:text-zinc-600">03</span>
                </motion.div>

                <div className="flex flex-col divide-y divide-zinc-100 dark:divide-zinc-800">
                    {projects.map((p, i) => (
                        <motion.a
                            key={p.num}
                            href={p.url}
                            target="_blank"
                            rel="noreferrer"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover="hover"
                            className="group flex flex-col md:flex-row md:items-start gap-6 py-10 first:pt-0 last:pb-0 cursor-pointer"
                        >
                            {/* Number */}
                            <span className="text-xs font-semibold text-zinc-300 dark:text-zinc-600 shrink-0 pt-1">{p.num}</span>

                            {/* Main */}
                            <div className="flex-1">
                                <div className="flex items-start justify-between gap-4 mb-3">
                                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:underline underline-offset-4">
                                        {p.title}
                                    </h3>
                                    <span className="text-xs text-zinc-400 shrink-0">{p.year}</span>
                                </div>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4 max-w-xl">{p.desc}</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {p.tech.map(t => (
                                        <span key={t} className="tag">{t}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Arrow */}
                            <motion.div
                                variants={{ hover: { x: 4, y: -4 } }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                className="shrink-0 pt-1 text-zinc-300 dark:text-zinc-600 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                                </svg>
                            </motion.div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    )
}
