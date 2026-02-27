import { useState } from 'react'
import { motion } from 'framer-motion'

const skills = [
    { name: 'HTML5', pct: 92 },
    { name: 'CSS3 / Tailwind', pct: 88 },
    { name: 'JavaScript', pct: 72 },
    { name: 'React', pct: 70 },
    { name: 'PHP', pct: 65 },
    { name: 'Bootstrap 5', pct: 78 },
    { name: 'Git & GitHub', pct: 67 },
    { name: 'Vite / Tooling', pct: 74 },
]

export default function Skills() {
    const [seen, setSeen] = useState(false)

    return (
        <section id="skills" className="py-28">
            <div className="wrap">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    onViewportEnter={() => setSeen(true)}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-4 mb-16"
                >
                    <span className="label">Keahlian</span>
                    <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800"></div>
                    <span className="text-xs text-zinc-300 dark:text-zinc-600">02</span>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-8">
                    {skills.map((s, i) => (
                        <motion.div
                            key={s.name}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                        >
                            <div className="flex justify-between items-baseline mb-2">
                                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{s.name}</span>
                                <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 tabular-nums">{s.pct}%</span>
                            </div>
                            <div className="h-[3px] bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-zinc-900 dark:bg-zinc-100 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: seen ? `${s.pct}%` : 0 }}
                                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 + i * 0.07 }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
