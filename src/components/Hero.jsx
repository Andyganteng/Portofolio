import { motion } from 'framer-motion'

// Lightweight stagger — NO blur/scale tricks that cause GPU lag
const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    show: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }
    })
}

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center pt-14">
            <div className="wrap w-full">
                <div className="pt-20 pb-28">

                    {/* Available badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.05 }}
                        className="flex items-center gap-2 mb-11"
                    >
                        <motion.span
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                            className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"
                        />
                        <span className="label">Tersedia untuk proyek baru</span>
                    </motion.div>

                    {/* Sub-title */}
                    <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                        className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-7"
                    >
                        Andi Musyofi — Web Developer
                    </motion.p>

                    {/* Headline lines - staggered, transform only (no blur = no lag) */}
                    {['Saya membangun', 'website yang', 'terasa hidup.'].map((line, i) => (
                        <div key={line} className="overflow-hidden">
                            <motion.h1
                                custom={i}
                                variants={lineVariants}
                                initial="hidden"
                                animate="show"
                                className={`text-[clamp(2.5rem,7vw,5.5rem)] font-black tracking-[-0.03em] leading-[1.06] ${i === 2 ? 'text-zinc-300 dark:text-zinc-700' : 'text-zinc-900 dark:text-zinc-100'
                                    }`}
                            >
                                {line}
                            </motion.h1>
                        </div>
                    ))}

                    {/* Sub + CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.55 }}
                        className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mt-12 pt-10 border-t border-zinc-200 dark:border-zinc-800"
                    >
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-sm leading-relaxed">
                            Pelajar SMK RPL yang sedang magang di Crocodic. Suka desain bersih, animasi smooth, dan kode yang rapi.
                        </p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.7 }}
                            className="flex items-center gap-5"
                        >
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.97 }}
                                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 transition-colors"
                            >
                                Lihat Karya
                            </motion.a>
                            <a href="#contact" className="text-sm font-medium text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200">
                                Kontak →
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Stats strip */}
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-px bg-zinc-200 dark:bg-zinc-800 rounded-2xl overflow-hidden"
                    >
                        {[
                            { n: '2', label: 'Project Deployed' },
                            { n: '6+', label: 'Tech Stack' },
                            { n: '1', label: 'Magang Aktif' },
                            { n: '2025', label: 'Mulai Coding' },
                        ].map((s, i) => (
                            <motion.div
                                key={s.label}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3, delay: 0.85 + i * 0.07 }}
                                whileHover={{ backgroundColor: 'rgba(0,0,0,0.02)' }}
                                className="bg-zinc-50 dark:bg-zinc-950 px-6 py-5 cursor-default"
                            >
                                <p className="text-2xl font-black text-zinc-900 dark:text-zinc-100 leading-none">{s.n}</p>
                                <p className="text-xs text-zinc-400 mt-1.5 font-medium">{s.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
