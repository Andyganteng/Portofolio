import { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useTheme } from '../App'

/* ── Social links ───────────────────────────────────────────── */
const socials = [
    { label: 'GitHub', href: 'https://github.com/Andyganteng', icon: GitHubIcon },
    { label: 'Instagram', href: 'https://instagram.com', icon: InstagramIcon },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: LinkedInIcon },
]

/* ── Quick nav ──────────────────────────────────────────────── */
const nav = [
    { label: 'Tentang', href: '#about' },
    { label: 'Skill', href: '#skills' },
    { label: 'Karya', href: '#projects' },
    { label: 'Kontak', href: '#contact' },
]

/* ── Logo frames ────────────────────────────────────────────── */
const FRAMES = [
    '0001_0.png', '0002_3.png', '0003_3.png', '0004_4.png', '0005_3.png',
    '0006_3.png', '0007_4.png', '0008_3.png', '0009_3.png', '0010_4.png',
    '0011_3.png', '0012_3.png', '0013_4.png', '0014_3.png', '0015_3.png',
    '0016_4.png', '0017_3.png', '0018_3.png', '0019_4.png', '0020_3.png',
    '0021_3.png', '0022_4.png', '0023_3.png', '0024_3.png', '0025_4.png',
    '0026_3.png', '0027_3.png', '0028_4.png', '0029_3.png', '0030_3.png',
    '0031_4.png', '0032_3.png', '0033_3.png', '0034_4.png', '0035_3.png',
    '0036_3.png', '0037_4.png', '0038_3.png', '0039_3.png', '0040_4.png',
    '0041_3.png', '0042_3.png', '0043_4.png', '0044_3.png', '0045_3.png',
    '0046_4.png', '0047_3.png', '0048_3.png', '0049_4.png', '0050_3.png',
    '0051_3.png', '0052_4.png', '0053_3.png', '0054_3.png', '0055_4.png',
    '0056_3.png', '0057_3.png', '0058_4.png', '0059_3.png', '0060_3.png',
    '0061_4.png',
]

/* ── Footer logo (black in light mode, white in dark) ───────── */
function FooterLogo() {
    const { isDark } = useTheme()
    const [frame, setFrame] = useState(0)
    const [playing, setPlaying] = useState(false)
    const interval = useRef(null)
    const cur = useRef(0)

    const play = () => {
        if (interval.current) return
        setPlaying(true)
        interval.current = setInterval(() => {
            cur.current = (cur.current + 1) % FRAMES.length
            setFrame(cur.current)
            if (cur.current === 0) stop()
        }, 38)
    }
    const stop = () => {
        clearInterval(interval.current)
        interval.current = null
        cur.current = 0
        setFrame(0)
        setPlaying(false)
    }

    useEffect(() => {
        const t = setTimeout(play, 600)
        return () => { clearTimeout(t); clearInterval(interval.current) }
    }, [])

    return (
        <motion.div
            style={{ width: 90, cursor: 'pointer' }}
            onHoverStart={() => { if (!playing) play() }}
            onClick={() => { if (!playing) play() }}
            title="Klik untuk animasi"
        >
            <img
                src={`/logo-frames-png/${FRAMES[frame]}`}
                alt="AM Logo"
                draggable={false}
                style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    userSelect: 'none',
                    pointerEvents: 'none',
                    /* invert white→black in light mode */
                    filter: isDark ? 'none' : 'invert(1)',
                    transition: 'filter 0.3s ease',
                }}
            />
        </motion.div>
    )
}

/* ── SVG Icons ──────────────────────────────────────────────── */
function GitHubIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.218.694.825.576C20.565 21.796 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
    )
}
function InstagramIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
    )
}
function LinkedInIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    )
}

/* ── Magnetic social button ─────────────────────────────────── */
function SocialBtn({ label, href, icon: Icon }) {
    const [hov, setHov] = useState(false)
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onHoverStart={() => setHov(true)}
            onHoverEnd={() => setHov(false)}
            whileTap={{ scale: 0.92 }}
            animate={{ y: hov ? -4 : 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="group flex flex-col items-center gap-1.5"
            title={label}
        >
            <span
                className="flex items-center justify-center w-10 h-10 rounded-2xl transition-colors duration-200"
                style={{
                    background: hov ? 'var(--text)' : 'var(--bg-muted)',
                    color: hov ? 'var(--bg)' : 'var(--text-2)',
                    border: '1px solid var(--border)',
                }}
            >
                <Icon />
            </span>
            <AnimatePresence>
                {hov && (
                    <motion.span
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.15 }}
                        className="text-[10px] font-semibold"
                        style={{ color: 'var(--text-3)' }}
                    >
                        {label}
                    </motion.span>
                )}
            </AnimatePresence>
        </motion.a>
    )
}

/* ── Back-to-top button ─────────────────────────────────────── */
function BackToTop() {
    const [hov, setHov] = useState(false)
    return (
        <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            onHoverStart={() => setHov(true)}
            onHoverEnd={() => setHov(false)}
            whileTap={{ scale: 0.93 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-[12px] font-semibold transition-colors duration-200"
            style={{
                background: hov ? 'var(--text)' : 'var(--bg-muted)',
                color: hov ? 'var(--bg)' : 'var(--text-2)',
                border: '1px solid var(--border)',
            }}
        >
            <motion.span
                animate={{ y: hov ? -2 : 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 20 }}
            >
                ↑
            </motion.span>
            Kembali ke atas
        </motion.button>
    )
}

/* ── Main Footer ─────────────────────────────────────────────── */
export default function Footer() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-60px' })

    const year = new Date().getFullYear()

    return (
        <footer
            ref={ref}
            className="relative overflow-hidden"
            style={{ borderTop: '1px solid var(--border)' }}
        >
            {/* Top section */}
            <div className="wrap pt-14 pb-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">

                    {/* Left: brand + tagline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col gap-3 max-w-xs"
                    >
                        <FooterLogo />
                        <p className="text-[13px] leading-relaxed" style={{ color: 'var(--text-3)' }}>
                            Pelajar SMK yang senang membangun antarmuka web yang fungsional dan estetis.
                        </p>

                    </motion.div>

                    {/* Right: Social Media */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col gap-2"
                    >
                        <p className="label mb-2">Media Sosial</p>
                        {socials.map((s, i) => (
                            <motion.a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: 10 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.15 + i * 0.06, duration: 0.4 }}
                                className="text-[13px] font-medium w-fit relative group appearance-none"
                                style={{ color: 'var(--text-2)', textDecoration: 'none' }}
                                whileHover={{ x: 4 }}
                            >
                                <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: 'var(--text-3)' }}>→</span>
                                {s.label}
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Divider */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{ originX: 0, height: 1, backgroundColor: 'var(--border)' }}
            />

            {/* Bottom bar */}
            <div className="wrap py-5">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-between gap-4"
                >
                    <div className="flex items-center gap-4">
                        <p
                            className="text-[12px] font-semibold tabular-nums"
                            style={{ color: 'var(--text-3)' }}
                        >
                            andyz.my.id
                        </p>
                        <BackToTop />
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}
