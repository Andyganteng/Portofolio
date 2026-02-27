import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ScrollReveal, Magnet } from './Animations'

export default function Contact() {
    const [status, setStatus] = useState('idle') // idle | ok
    const [form, setForm] = useState({ name: '', email: '', message: '' })

    const handleChange = (e) => {
        setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    }

    const send = (e) => {
        e.preventDefault()
        if (!form.name || !form.email || !form.message) return

        // Build a mailto: link — works 100% without any backend or API key
        const subject = encodeURIComponent(`[Portfolio] Pesan dari ${form.name}`)
        const body = encodeURIComponent(
            `Hei Andy,\n\n${form.message}\n\n—\nDikirim oleh: ${form.name}\nEmail: ${form.email}`
        )
        window.open(`mailto:andymusfi@gmail.com?subject=${subject}&body=${body}`, '_blank')
        setStatus('ok')
        setForm({ name: '', email: '', message: '' })
    }

    const inputClass = "input-line w-full"

    return (
        <section id="contact" className="py-28" style={{ backgroundColor: 'var(--bg)' }}>
            <div className="wrap">

                <ScrollReveal className="mb-16">
                    <p className="label mb-3">04 — Kontak</p>
                    <h2 className="section-heading">
                        Mau<br />
                        <span className="section-heading-dim">ngobrol?</span>
                    </h2>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left */}
                    <ScrollReveal delay={0.08}>
                        <p className="text-[15px] leading-relaxed mb-8" style={{ color: 'var(--text-2)' }}>
                            Jika Anda memiliki proyek, ingin berkolaborasi, atau sekadar ingin berdiskusi
                            tentang web development — jangan ragu untuk menghubungi saya.
                        </p>

                        <a href="mailto:andymusfi@gmail.com"
                            className="group inline-flex items-center gap-2 mb-10"
                        >
                            <span
                                className="text-[15px] font-bold underline underline-offset-4 transition-all"
                                style={{ color: 'var(--text)', textDecorationColor: 'var(--border)' }}
                                onMouseEnter={e => e.target.style.textDecorationColor = 'var(--text)'}
                                onMouseLeave={e => e.target.style.textDecorationColor = 'var(--border)'}
                            >
                                andymusfi@gmail.com
                            </span>
                            <motion.span whileHover={{ x: 2, y: -2 }} style={{ color: 'var(--text-3)' }}>↗</motion.span>
                        </a>

                        <div className="flex flex-wrap gap-5">
                            {[
                                { l: 'GitHub', u: 'https://github.com/Andyganteng' },
                                { l: 'LinkedIn', u: 'https://www.linkedin.com/in/andi-musyofi' },
                                { l: 'Instagram', u: 'https://www.instagram.com/andy_myfi' },
                            ].map(s => (
                                <Magnet key={s.l} strength={0.2}>
                                    <a href={s.u} target="_blank" rel="noreferrer"
                                        className="text-[12px] font-bold uppercase tracking-widest transition-colors"
                                        style={{ color: 'var(--text-3)' }}
                                        onMouseEnter={e => e.target.style.color = 'var(--text)'}
                                        onMouseLeave={e => e.target.style.color = 'var(--text-3)'}
                                    >
                                        {s.l}
                                    </a>
                                </Magnet>
                            ))}
                        </div>

                        {/* Info */}
                        <p className="text-[12px] mt-8 leading-relaxed" style={{ color: 'var(--text-3)' }}>
                            Form di bawah akan membuka aplikasi email Anda (Gmail, Outlook, dll.) dengan pesan yang sudah terisi otomatis.
                        </p>
                    </ScrollReveal>

                    {/* Right: Form */}
                    <ScrollReveal delay={0.14}>
                        <AnimatePresence mode="wait">
                            {status === 'ok' ? (
                                <motion.div key="ok"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="py-16 text-center"
                                >
                                    <motion.p
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                                        className="text-5xl mb-4"
                                    >✉️</motion.p>
                                    <p className="font-bold text-lg mb-1" style={{ color: 'var(--text)' }}>
                                        Aplikasi email terbuka!
                                    </p>
                                    <p className="text-[14px]" style={{ color: 'var(--text-3)' }}>
                                        Kirim email dari aplikasi email Anda. Saya akan segera membalas.
                                    </p>
                                    <button onClick={() => setStatus('idle')}
                                        className="mt-6 text-[12px] underline transition-colors"
                                        style={{ color: 'var(--text-3)' }}
                                    >
                                        Kirim lagi
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form key="form" onSubmit={send} className="flex flex-col gap-8">
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="label block mb-3">Nama</label>
                                            <input
                                                name="name"
                                                required
                                                value={form.name}
                                                onChange={handleChange}
                                                placeholder="Nama Anda"
                                                className={inputClass}
                                            />
                                        </div>
                                        <div>
                                            <label className="label block mb-3">Email</label>
                                            <input
                                                name="email"
                                                type="email"
                                                required
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder="email@anda.com"
                                                className={inputClass}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="label block mb-3">Pesan</label>
                                        <textarea
                                            name="message"
                                            rows={5}
                                            required
                                            value={form.message}
                                            onChange={handleChange}
                                            placeholder="Hei Andy, saya ingin..."
                                            className={`${inputClass} resize-none`}
                                        />
                                    </div>
                                    <div>
                                        <motion.button
                                            type="submit"
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                            className="btn-pill"
                                        >
                                            Buka di aplikasi email →
                                        </motion.button>
                                    </div>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}
