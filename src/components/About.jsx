import { motion } from 'framer-motion'

const show = {
    hidden: { opacity: 0, y: 24 },
    show: (i) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }
    })
}

export default function About() {
    return (
        <section id="about" className="py-28 bg-white dark:bg-zinc-900">
            <div className="wrap">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-4 mb-16"
                >
                    <span className="label">Tentang Saya</span>
                    <div className="flex-1 h-px bg-zinc-100 dark:bg-zinc-800"></div>
                    <span className="text-xs text-zinc-300 dark:text-zinc-600">01</span>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16 items-start">
                    {/* Left: Bio */}
                    <div>
                        <motion.h2
                            custom={0}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-60px' }}
                            variants={show}
                            className="text-3xl font-black tracking-tight text-zinc-900 dark:text-zinc-100 mb-6 leading-snug"
                        >
                            Developer muda yang suka hal-hal yang rapi.
                        </motion.h2>

                        <motion.p
                            custom={1}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-60px' }}
                            variants={show}
                            className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4"
                        >
                            Nama saya <strong className="text-zinc-900 dark:text-zinc-100 font-semibold">Andi Musyofi</strong>. Saya pelajar SMK RPL yang sejak kecil penasaran kenapa layar komputer bisa jadi sangat interaktif. Rasa penasaran itu yang akhirnya membawa saya ke dunia web development.
                        </motion.p>
                        <motion.p
                            custom={2}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-60px' }}
                            variants={show}
                            className="text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8"
                        >
                            Sekarang saya sedang magang di{' '}
                            <a href="https://crocodic.com/id/" target="_blank" rel="noreferrer"
                                className="font-semibold text-zinc-900 dark:text-zinc-100 underline underline-offset-2 decoration-zinc-300 dark:decoration-zinc-700 hover:decoration-zinc-900 dark:hover:decoration-zinc-100 transition-all">
                                Crocodic
                            </a>{', '}
                            sebuah software house di Jakarta yang mengerjakan proyek mobile, IoT, dan AI. Setiap harinya saya belajar dari developer senior yang pengalamannya jauh lebih banyak dari saya — dan itu sangat berharga.
                        </motion.p>

                        {/* Social links */}
                        <motion.div
                            custom={3}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: '-60px' }}
                            variants={show}
                            className="flex gap-3"
                        >
                            {[
                                { label: 'GitHub →', href: 'https://github.com/Andyganteng' },
                                { label: 'LinkedIn →', href: 'https://www.linkedin.com/in/andi-musyofi' },
                                { label: 'Instagram →', href: 'https://www.instagram.com/andy_myfi' },
                            ].map(s => (
                                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                                    className="text-xs font-semibold text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                                    {s.label}
                                </a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right: Stacked cards */}
                    <div className="flex flex-col gap-3">
                        {[
                            {
                                title: 'Magang',
                                value: 'Crocodic — 2025',
                                desc: 'Software house Jakarta · Mobile, IoT & AI',
                                icon: '💼'
                            },
                            {
                                title: 'Pendidikan',
                                value: 'SMK Rekayasa Perangkat Lunak',
                                desc: 'Jurusan RPL · Aktif',
                                icon: '🎓'
                            },
                            {
                                title: 'Tech Stack',
                                value: 'HTML · CSS · JS · React · PHP',
                                desc: 'Tailwind · Bootstrap · Git · Vite',
                                icon: '⚒️'
                            },
                        ].map((card, i) => (
                            <motion.div
                                key={card.title}
                                custom={i}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: '-40px' }}
                                variants={show}
                                whileHover={{ x: 4 }}
                                className="card p-5 flex items-start gap-4"
                            >
                                <span className="text-2xl mt-0.5">{card.icon}</span>
                                <div>
                                    <p className="label mb-1">{card.title}</p>
                                    <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{card.value}</p>
                                    <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5">{card.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
