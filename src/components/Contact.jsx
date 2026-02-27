import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'

export default function Contact() {
    const formRef = useRef()
    const [status, setStatus] = useState('idle')

    const send = async (e) => {
        e.preventDefault()
        setStatus('loading')
        try {
            await emailjs.sendForm('service_9ecu3js', 'template_default', formRef.current, 'YOUR_PUBLIC_KEY')
            setStatus('ok')
            formRef.current.reset()
        } catch {
            setStatus('err')
        }
    }

    const inputClass = "w-full text-sm text-zinc-900 dark:text-zinc-100 bg-transparent border-b border-zinc-200 dark:border-zinc-700 py-3 outline-none focus:border-zinc-900 dark:focus:border-zinc-100 transition-colors placeholder-zinc-300 dark:placeholder-zinc-600"

    return (
        <section id="contact" className="py-28">
            <div className="wrap">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-4 mb-16"
                >
                    <span className="label">Kontak</span>
                    <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800"></div>
                    <span className="text-xs text-zinc-300 dark:text-zinc-600">04</span>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16">
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-black tracking-tight text-zinc-900 dark:text-zinc-100 mb-4 leading-snug">
                            Punya proyek yang menarik?<br />Ngobrol yuk.
                        </h2>
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed mb-8">
                            Saya terbuka untuk kolaborasi, freelance project, atau sekadar diskusi soal web dan teknologi. Kirim pesan, saya biasanya balas dalam 1-2 hari.
                        </p>
                        <a href="mailto:andymusfi@gmail.com" className="inline-block text-sm font-semibold text-zinc-900 dark:text-zinc-100 underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700 hover:decoration-zinc-900 dark:hover:decoration-zinc-100 transition-all">
                            andymusfi@gmail.com ↗
                        </a>

                        <div className="mt-10 flex gap-5">
                            {[
                                { l: 'GitHub ↗', u: 'https://github.com/Andyganteng' },
                                { l: 'LinkedIn ↗', u: 'https://www.linkedin.com/in/andi-musyofi' },
                                { l: 'Instagram ↗', u: 'https://www.instagram.com/andy_myfi' },
                            ].map(s => (
                                <a key={s.l} href={s.u} target="_blank" rel="noreferrer"
                                    className="text-xs font-semibold text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
                                    {s.l}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <AnimatePresence mode="wait">
                            {status === 'ok' ? (
                                <motion.div
                                    key="ok"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="py-12 text-center"
                                >
                                    <p className="text-4xl mb-4">🎉</p>
                                    <p className="font-bold text-zinc-900 dark:text-zinc-100 mb-1">Pesan terkirim!</p>
                                    <p className="text-sm text-zinc-400">Saya akan segera membalas.</p>
                                    <button onClick={() => setStatus('idle')} className="mt-6 text-xs text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 underline transition-colors">
                                        Kirim lagi
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form key="form" ref={formRef} onSubmit={send} className="flex flex-col gap-6">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <label className="label block mb-2">Nama</label>
                                            <input name="user_name" required placeholder="Nama kamu" className={inputClass} />
                                        </div>
                                        <div>
                                            <label className="label block mb-2">Email</label>
                                            <input name="user_email" type="email" required placeholder="email@kamu.com" className={inputClass} />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="label block mb-2">Pesan</label>
                                        <textarea name="message" rows={4} required placeholder="Ceritakan proyekmu..." className={`${inputClass} resize-none`}></textarea>
                                    </div>
                                    {status === 'err' && (
                                        <p className="text-xs text-red-500">Gagal mengirim. Coba lagi atau email langsung.</p>
                                    )}
                                    <motion.button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="self-start px-7 py-3 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-semibold disabled:opacity-50 transition-opacity"
                                    >
                                        {status === 'loading' ? 'Mengirim...' : 'Kirim Pesan →'}
                                    </motion.button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
