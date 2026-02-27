import { motion } from 'framer-motion'

export default function About() {
    return (
        <section id="about" className="py-24 bg-white dark:bg-zinc-900">
            <div className="wrap">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <p className="label mb-3">Tentang saya</p>
                </motion.div>

                <div className="grid md:grid-cols-5 gap-12 lg:gap-20">
                    {/* Story - takes more space */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="md:col-span-3 space-y-5"
                    >
                        <p className="text-zinc-800 dark:text-zinc-200 text-lg leading-relaxed font-medium">
                            Nama saya Andy, pelajar SMK jurusan RPL yang suka banget menghabiskan waktu di depan laptop untuk ngoprek code.
                        </p>
                        <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                            Awalnya iseng-iseng belajar HTML dari YouTube waktu kelas 10. Nggak nyangka sekarang udah bisa bikin website yang beneran dipake orang. Dua project yang udah saya rilis sampai sekarang adalah website kelas dan portfolio ini — keduanya saya bangun sendiri dari nol.
                        </p>
                        <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                            Sekarang lagi magang di{' '}
                            <a
                                href="https://crocodic.com/id/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-zinc-900 dark:text-zinc-100 font-semibold underline underline-offset-2 decoration-zinc-300 dark:decoration-zinc-700 hover:decoration-zinc-900 dark:hover:decoration-zinc-100 transition-all"
                            >
                                Crocodic
                            </a>
                            , software house di Jakarta. Di sana saya banyak belajar soal bagaimana tim developer profesional bekerja — mulai dari cara ngatur git, review code, sampai deployment. Beda banget sama belajar sendiri di rumah.
                        </p>
                        <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
                            Di luar coding, saya suka dengerin musik — playlist saya di website ini bisa jadi gambaran selera saya 😄
                        </p>

                        {/* Socials inline */}
                        <div className="flex gap-5 pt-2">
                            {[
                                { label: 'GitHub', href: 'https://github.com/Andyganteng' },
                                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/andi-musyofi' },
                                { label: 'Instagram', href: 'https://www.instagram.com/andy_myfi' },
                            ].map((s) => (
                                <motion.a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ y: -2 }}
                                    className="text-sm font-semibold text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                                >
                                    {s.label}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Side info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="md:col-span-2 space-y-8"
                    >
                        {[
                            {
                                title: 'Sekarang',
                                lines: ['Magang di Crocodic, Jakarta', 'Belajar React & Next.js', 'Kelas 11 RPL']
                            },
                            {
                                title: 'Yang saya kuasai',
                                lines: ['HTML, CSS, JavaScript', 'React, Vite, Tailwind CSS', 'PHP, Bootstrap 5', 'Git & GitHub']
                            },
                            {
                                title: 'Kontak',
                                lines: ['andymusfi@gmail.com']
                            },
                        ].map((block, i) => (
                            <motion.div
                                key={block.title}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                            >
                                <p className="label mb-3">{block.title}</p>
                                {block.lines.map((l) => (
                                    <p key={l} className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">{l}</p>
                                ))}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
