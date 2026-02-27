import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../App'

export default function Navbar() {
    const { isDark, setIsDark } = useTheme()
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', fn)
        return () => window.removeEventListener('scroll', fn)
    }, [])

    const links = [
        { href: '#about', label: 'Tentang' },
        { href: '#skills', label: 'Skill' },
        { href: '#projects', label: 'Karya' },
        { href: '#contact', label: 'Kontak' },
    ]

    return (
        <>
            <motion.nav
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-200/60 dark:border-zinc-800/60'
                    : 'bg-transparent'}`}
            >
                <div className="wrap flex items-center justify-between h-14">
                    <a href="#" className="text-sm font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                        Andy Musyofi
                    </a>

                    <div className="hidden md:flex items-center gap-6">
                        {links.map(l => (
                            <a key={l.href} href={l.href}
                                className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-200">
                                {l.label}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setIsDark(!isDark)}
                            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-500 dark:text-zinc-400"
                            aria-label="Toggle theme"
                        >
                            {isDark
                                ? <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
                                : <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
                            }
                        </button>
                        <button onClick={() => setOpen(!open)} className="md:hidden w-8 h-8 flex items-center justify-center text-zinc-500 dark:text-zinc-400">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                {open ? <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />}
                            </svg>
                        </button>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed top-14 inset-x-0 z-40 bg-zinc-50 dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 md:hidden overflow-hidden"
                    >
                        <div className="wrap py-4 flex flex-col gap-1">
                            {links.map(l => (
                                <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                                    className="py-3 text-sm font-medium text-zinc-700 dark:text-zinc-300 border-b border-zinc-100 dark:border-zinc-800 last:border-0">
                                    {l.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
