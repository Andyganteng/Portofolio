import { motion } from 'framer-motion'

const lineVariants = {
    hidden: { opacity: 0, y: 24 },
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

                    {/* Status */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="flex items-center gap-2 mb-10"
                    >
                        <motion.span
                            animate={{ opacity: [1, 0.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-2 h-2 rounded-full bg-green-400 inline-block"
                        />
                        <span className="text-xs font-medium text-zinc-400">open to work</span>
                    </motion.div>

                    {/* Headline — honest, not marketing */}
                    {["Andi Musyofi.", "Pelajar RPL,", "suka bikin web."].map((line, i) => (
                        <div key={line} className="overflow-hidden">
                            <motion.h1
                                custom={i}
                                variants={lineVariants}
                                initial="hidden"
                                animate="show"
                                className={`font-black tracking-tighter leading-[1.05] ${i < 2
                                        ? "text-[clamp(2.8rem,8vw,6rem)] text-zinc-900 dark:text-zinc-100"
                                        : "text-[clamp(2.8rem,8vw,6rem)] text-zinc-300 dark:text-zinc-700"
                                    }`}
                            >
                                {line}
                            </motion.h1>
                        </div>
                    ))}

                    {/* Honest 2-liner */}
                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="mt-8 text-base text-zinc-500 dark:text-zinc-400 max-w-md leading-relaxed"
                    >
                        Masih di SMK, tapi sudah ngerjain project beneran. Lagi magang di Crocodic sambil terus belajar hal-hal baru.
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.75 }}
                        className="mt-10 flex flex-wrap gap-4 items-center"
                    >
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            className="px-6 py-3 text-sm font-semibold rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900"
                        >
                            Lihat karya saya →
                        </motion.a>
                        <a
                            href="#contact"
                            className="text-sm text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors font-medium"
                        >
                            Hubungi saya
                        </a>
                    </motion.div>

                    {/* Minimal fact strip */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 grid grid-cols-3 gap-6 max-w-md"
                    >
                        {[
                            { n: "2", l: "project live" },
                            { n: "1", l: "magang aktif" },
                            { n: "2025", l: "mulai serius" },
                        ].map((s) => (
                            <div key={s.l}>
                                <p className="text-xl font-black text-zinc-900 dark:text-zinc-100">{s.n}</p>
                                <p className="text-xs text-zinc-400 mt-0.5 font-medium">{s.l}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
