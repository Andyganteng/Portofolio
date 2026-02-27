import { motion } from 'framer-motion'
import { ScrollReveal, TiltCard } from './Animations'

export default function About() {
    return (
        <section id="about" className="py-28" style={{ backgroundColor: 'var(--bg-card)' }}>
            <div className="wrap">

                <ScrollReveal className="mb-16">
                    <p className="label mb-3">01 — Tentang</p>
                    <h2 className="section-heading">
                        Sedikit<br />
                        <span className="section-heading-dim">tentang saya.</span>
                    </h2>
                </ScrollReveal>

                <div className="grid md:grid-cols-5 gap-12 lg:gap-20">
                    {/* Story */}
                    <div className="md:col-span-3 space-y-5">
                        <ScrollReveal delay={0.05}>
                            <p className="text-[16px] font-semibold leading-relaxed" style={{ color: 'var(--text)' }}>
                                Nama saya Andi Musyofi, siswa SMK kelas XI jurusan Rekayasa Perangkat Lunak.
                            </p>
                        </ScrollReveal>
                        <ScrollReveal delay={0.1}>
                            <p className="text-[15px] leading-relaxed" style={{ color: 'var(--text-2)' }}>
                                Saya mulai belajar web development secara otodidak sejak di kelas 10, dimulai dari HTML dan CSS dasar. Seiring waktu, saya memperluas kemampuan ke JavaScript, React, dan ekosistem tooling modern seperti Vite dan Tailwind CSS.
                            </p>
                        </ScrollReveal>
                        <ScrollReveal delay={0.15}>
                            <p className="text-[15px] leading-relaxed" style={{ color: 'var(--text-2)' }}>
                                Saat ini saya sedang mengikuti kelas di{' '}
                                <a
                                    href="https://crocodic.com/id/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="font-semibold underline underline-offset-2 transition-all"
                                    style={{ color: 'var(--text)', textDecorationColor: 'var(--border)' }}
                                    onMouseEnter={e => e.target.style.textDecorationColor = 'var(--text)'}
                                    onMouseLeave={e => e.target.style.textDecorationColor = 'var(--border)'}
                                >
                                    Crocodic
                                </a>
                                {' '}— sebuah software house di Semarang yang berfokus pada solusi mobile, IoT, dan kecerdasan buatan. Kelas ini memberikan saya pemahaman langsung tentang bagaimana proyek pengembangan perangkat lunak dikelola secara profesional.
                            </p>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <p className="text-[15px] leading-relaxed" style={{ color: 'var(--text-2)' }}>
                                Saya tertarik pada pengembangan antarmuka pengguna — bagaimana sebuah halaman web bisa terasa responsif, nyaman, dan menyenangkan untuk digunakan. Saat ini fokus saya adalah memperdalam React dan mulai menjelajahi Next.js untuk pengembangan aplikasi yang lebih kompleks.
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={0.25}>
                            <div className="flex flex-wrap gap-5 pt-3"
                                style={{ borderTop: '1px solid var(--border)' }}
                            >
                                {[
                                    { label: 'GitHub', href: 'https://github.com/Andyganteng' },
                                    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/andi-musyofi' },
                                    { label: 'Instagram', href: 'https://www.instagram.com/andy_myfi' },
                                ].map(s => (
                                    <motion.a
                                        key={s.label}
                                        href={s.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        whileHover={{ y: -2 }}
                                        className="text-[13px] font-semibold underline underline-offset-4 transition-all"
                                        style={{ color: 'var(--text-3)', textDecorationColor: 'transparent' }}
                                        onMouseEnter={e => { e.target.style.color = 'var(--text)'; e.target.style.textDecorationColor = 'var(--text)' }}
                                        onMouseLeave={e => { e.target.style.color = 'var(--text-3)'; e.target.style.textDecorationColor = 'transparent' }}
                                    >
                                        {s.label} ↗
                                    </motion.a>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Side info cards */}
                    <div className="md:col-span-2 space-y-3">
                        {[
                            {
                                label: 'Status saat ini',
                                lines: ['Kelas di Crocodic, Semarang', 'Kelas XI RPL · Aktif']
                            },
                            {
                                label: 'Kemampuan teknis',
                                lines: ['HTML, CSS, JavaScript', 'React, Vite, Tailwind CSS', 'PHP, Bootstrap 5', 'Git & GitHub']
                            },
                            {
                                label: 'Sedang dipelajari',
                                lines: ['Next.js', 'TypeScript', 'Node.js']
                            },
                            {
                                label: 'Kontak',
                                lines: ['andymusfi@gmail.com']
                            },
                        ].map((block, i) => (
                            <ScrollReveal key={block.label} delay={0.08 + i * 0.08}>
                                <TiltCard
                                    intensity={5}
                                    className="p-5 rounded-2xl"
                                    style={{ backgroundColor: 'var(--bg-muted)', border: '1px solid var(--border)' }}
                                >
                                    <p className="label mb-3">{block.label}</p>
                                    {block.lines.map(l => (
                                        <p key={l} className="text-[13.5px] leading-relaxed mb-0.5" style={{ color: 'var(--text-2)' }}>
                                            {l}
                                        </p>
                                    ))}
                                </TiltCard>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
