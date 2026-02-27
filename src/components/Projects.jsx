import { motion } from 'framer-motion'

const projects = [
    {
        title: 'Website Kelas XI RPL 2',
        year: '2025',
        url: 'https://xirpl2.vercel.app/',
        tech: ['React', 'Firebase', 'Tailwind CSS'],
        story: 'Project pertama yang beneran dipake orang. Awalnya cuma coba-coba bikin website buat kelas, eh ternyata teman-teman suka dan sekarang dipakai untuk dokumentasi kegiatan kelas.',
    },
    {
        title: 'Portfolio ini',
        year: '2025',
        url: 'https://andyz.my.id/',
        tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
        story: 'Website ini. Sudah dirombak berkali-kali sampai yang kamu lihat sekarang. Tujuannya sederhana — punya tempat di internet yang bisa saya tunjukin ke orang.',
    },
]

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-white dark:bg-zinc-900">
            <div className="wrap">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <p className="label mb-3">Karya</p>
                    <h2 className="text-3xl font-black tracking-tight text-zinc-900 dark:text-zinc-100">Yang sudah pernah saya buat</h2>
                    <p className="text-zinc-400 text-sm mt-2">Masih 2, tapi lebih baik dari nol.</p>
                </motion.div>

                <div className="space-y-0 divide-y divide-zinc-100 dark:divide-zinc-800">
                    {projects.map((p, i) => (
                        <motion.a
                            key={p.title}
                            href={p.url}
                            target="_blank"
                            rel="noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.45, delay: i * 0.1 }}
                            whileHover="hover"
                            className="group flex items-start gap-6 py-8 first:pt-0 last:pb-0 cursor-pointer"
                        >
                            {/* Arrow */}
                            <motion.div
                                variants={{ hover: { x: 2, y: -2 } }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                className="mt-1 shrink-0 text-zinc-300 dark:text-zinc-700 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                                </svg>
                            </motion.div>

                            <div className="flex-1">
                                <div className="flex items-center justify-between gap-4 mb-2">
                                    <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 group-hover:underline underline-offset-4">
                                        {p.title}
                                    </h3>
                                    <span className="text-xs text-zinc-300 dark:text-zinc-600 shrink-0">{p.year}</span>
                                </div>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-3 max-w-2xl">{p.story}</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {p.tech.map((t) => (
                                        <span key={t} className="tag">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    )
}
