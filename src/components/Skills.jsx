import { motion } from 'framer-motion'
import { ScrollReveal, GlitchText } from './Animations'

const groups = [
    { label: 'Reguler digunakan', items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS'] },
    { label: 'Berpengalaman', items: ['PHP', 'Bootstrap 5', 'Vite', 'Git & GitHub', 'Framer Motion'] },
    { label: 'Sedang dikembangkan', items: ['Next.js', 'TypeScript', 'Node.js'] },
]

export default function Skills() {
    return (
        <section id="skills" className="py-28" style={{ backgroundColor: 'var(--bg)' }}>
            <div className="wrap">
                <ScrollReveal className="mb-16">
                    <p className="label mb-3">02 — Kemampuan Teknis</p>
                    <h2 className="section-heading">
                        Teknologi<br />
                        <span className="section-heading-dim">yang dikuasai.</span>
                    </h2>
                </ScrollReveal>

                <div className="space-y-12">
                    {groups.map((g, gi) => (
                        <ScrollReveal key={g.label} delay={gi * 0.1}>
                            <p className="label mb-4">{g.label}</p>
                            <div className="flex flex-wrap gap-2.5">
                                {g.items.map((item, ii) => (
                                    <motion.span
                                        key={item}
                                        initial={{ opacity: 0, y: 14, scale: 0.9 }}
                                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.35, delay: gi * 0.1 + ii * 0.055 }}
                                        whileHover={{ scale: 1.07, y: -3 }}
                                        whileTap={{ scale: 0.97 }}
                                        className="inline-flex items-center px-5 py-2.5 rounded-2xl text-[13px] font-semibold cursor-default select-none"
                                        style={{
                                            backgroundColor: 'var(--bg-card)',
                                            border: '1px solid var(--border)',
                                            color: 'var(--text-2)',
                                        }}
                                    >
                                        <GlitchText className="text-[13px] font-semibold">{item}</GlitchText>
                                    </motion.span>
                                ))}
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
