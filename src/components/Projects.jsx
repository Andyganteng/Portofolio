import { motion } from 'framer-motion'
import { ScrollReveal, SpotlightCard, RollingText } from './Animations'

const projects = [
    {
        num: '01',
        title: 'Website Kelas XI RPL 2',
        year: '2025',
        url: 'https://xirpl2.vercel.app/',
        tech: ['React', 'Firebase', 'Tailwind CSS'],
        story: 'Website dokumentasi dan informasi kelas yang dibangun menggunakan React dan Firebase. Proyek pertama yang aktif digunakan oleh rekan-rekan di kelas untuk menyimpan catatan kegiatan bersama.',
    },
    {
        num: '02',
        title: 'Portfolio Pribadi',
        year: '2025',
        url: 'https://andyz.my.id/',
        tech: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
        story: 'Website portofolio yang anda lihat saat ini. Dibangun untuk mempresentasikan profil, kemampuan, dan karya secara profesional kepada calon klien maupun perekrut.',
    },
]

export default function Projects() {
    return (
        <section id="projects" className="py-28" style={{ backgroundColor: 'var(--bg-card)' }}>
            <div className="wrap">
                <ScrollReveal className="mb-16">
                    <p className="label mb-3">03 — Proyek</p>
                    <h2 className="section-heading">
                        Karya yang<br />
                        <span className="section-heading-dim">telah dibuat.</span>
                    </h2>
                    <p className="text-[13px] font-medium mt-3" style={{ color: 'var(--text-3)' }}>
                        Dua proyek aktif yang saat ini dapat diakses secara publik.
                    </p>
                </ScrollReveal>

                <div className="grid sm:grid-cols-2 gap-4">
                    {projects.map((p, i) => (
                        <ScrollReveal key={p.num} delay={i * 0.12}>
                            <SpotlightCard
                                spotlightColor="rgba(0,0,0,0.04)"
                                className="rounded-3xl overflow-hidden h-full"
                                style={{ backgroundColor: 'var(--bg-muted)', border: '1px solid var(--border)' }}
                            >
                                <motion.a
                                    href={p.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ scale: 1.012 }}
                                    whileTap={{ scale: 0.99 }}
                                    transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                                    className="flex flex-col h-full p-5 sm:p-7 group"
                                >
                                    {/* Header */}
                                    <div className="flex items-center justify-between mb-8">
                                        <span className="font-mono text-[11px] font-bold" style={{ color: 'var(--border)' }}>{p.num}</span>
                                        <div className="flex items-center gap-3">
                                            <span className="text-[12px]" style={{ color: 'var(--text-3)' }}>{p.year}</span>
                                            <motion.div
                                                className="w-7 h-7 rounded-full flex items-center justify-center"
                                                style={{ border: '1px solid var(--border)', color: 'var(--text-3)' }}
                                                whileHover={{
                                                    rotate: -45,
                                                    backgroundColor: 'var(--text)',
                                                    borderColor: 'var(--text)',
                                                    color: 'var(--bg)',
                                                }}
                                                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                                            >
                                                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                                                </svg>
                                            </motion.div>
                                        </div>
                                    </div>

                                    <h3 className="text-[18px] font-black tracking-tight mb-3 leading-snug group-hover:underline underline-offset-4"
                                        style={{ color: 'var(--text)' }}>
                                        {p.title}
                                    </h3>

                                    <p className="text-[14px] leading-relaxed flex-1 mb-6" style={{ color: 'var(--text-2)' }}>
                                        {p.story}
                                    </p>

                                    <div className="flex flex-wrap gap-1.5">
                                        {p.tech.map(t => (
                                            <span key={t} className="tag">{t}</span>
                                        ))}
                                    </div>
                                </motion.a>
                            </SpotlightCard>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
