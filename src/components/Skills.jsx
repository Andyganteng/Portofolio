import { motion } from 'framer-motion'

// No more progress bars — just a clean list of tools I actually use
const groups = [
    { label: 'Yang sering saya pakai', items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS'] },
    { label: 'Yang sudah pernah saya pakai', items: ['PHP', 'Bootstrap 5', 'Vite', 'Git & GitHub', 'Framer Motion'] },
    { label: 'Lagi dipelajari', items: ['Next.js', 'TypeScript', 'Node.js'] },
]

export default function Skills() {
    return (
        <section id="skills" className="py-24">
            <div className="wrap">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <p className="label mb-3">Tech</p>
                    <h2 className="text-3xl font-black tracking-tight text-zinc-900 dark:text-zinc-100">Tools yang saya gunakan</h2>
                </motion.div>

                <div className="space-y-10">
                    {groups.map((g, gi) => (
                        <motion.div
                            key={g.label}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.45, delay: gi * 0.1 }}
                        >
                            <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 mb-3 tracking-wide">{g.label}</p>
                            <div className="flex flex-wrap gap-2">
                                {g.items.map((item, ii) => (
                                    <motion.span
                                        key={item}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: gi * 0.1 + ii * 0.04 }}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="inline-block px-4 py-2 text-sm font-medium rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 cursor-default"
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
