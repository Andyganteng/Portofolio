import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../App'

/* ─── Nav links ──────────────────────────────────────────────── */
const links = [
    { label: 'Tentang', href: '#about' },
    { label: 'Skill', href: '#skills' },
    { label: 'Karya', href: '#projects' },
    { label: 'Kontak', href: '#contact' },
]

/* ─── Frame list (transparent PNGs — bg removed) ─────────────── */
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

/* ─── Animated Logo ──────────────────────────────────────────── */
function AnimatedLogo({ size = 52 }) {
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
        <motion.a
            href="#home"
            whileTap={{ scale: 0.9 }}
            onHoverStart={() => { if (!playing) play() }}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: size,
                height: size,
                flexShrink: 0,
                cursor: 'pointer',
                position: 'relative',
                /* Logo adapts to theme: black in light, white in dark */
                filter: isDark ? 'none' : 'invert(1)',
                transition: 'filter 0.3s ease'
            }}
        >
            <img
                src={`/logo-frames-png/${FRAMES[frame]}`}
                alt="AM"
                draggable={false}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block',
                    pointerEvents: 'none',
                    userSelect: 'none',
                }}
            />
        </motion.a>
    )
}

/* ─── Navbar ─────────────────────────────────────────────────── */
export default function Navbar() {
    const { isDark, setIsDark } = useTheme()
    const [active, setActive] = useState('')
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    useEffect(() => {
        const onScroll = () => {
            const sections = ['about', 'skills', 'projects', 'contact']
            for (const s of [...sections].reverse()) {
                const el = document.getElementById(s)
                if (el && window.scrollY + 100 >= el.offsetTop) {
                    setActive(s); return
                }
            }
            setActive('')
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    // iOS Dynamic Glass Styles
    const navStyles = {
        position: 'fixed',
        top: isMobile ? 0 : 16,
        left: isMobile ? 0 : '50%',
        right: isMobile ? 0 : 'auto',
        transform: isMobile ? 'none' : 'translateX(-50%)',
        zIndex: 100,
        display: 'flex',
        flexDirection: isMobile ? 'row' : 'row',
        alignItems: 'center',
        padding: isMobile ? '6px 12px' : '6px 12px 6px 6px',
        width: isMobile ? 'auto' : 'auto',
        maxWidth: isMobile ? '100vw' : 'min(95vw, 600px)',
        borderRadius: isMobile ? 0 : 999,
        backdropFilter: 'blur(32px) saturate(180%)',
        WebkitBackdropFilter: 'blur(32px) saturate(180%)',
        backgroundColor: isDark ? 'rgba(12, 12, 14, 0.78)' : 'rgba(255, 255, 255, 0.78)',
        border: isMobile ? 'none' : `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
        borderBottom: isMobile ? `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}` : undefined,
        boxShadow: isDark ? '0 10px 40px rgba(0,0,0,0.45)' : '0 10px 40px rgba(0,0,0,0.08)',
        transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
    }

    return (
        <motion.header
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={navStyles}
        >
            <div style={{ display: 'flex', alignItems: 'center', width: isMobile ? '100%' : 'auto', justifyContent: isMobile ? 'space-between' : 'flex-start', gap: 8 }}>

                {/* Logo */}
                <AnimatedLogo size={isMobile ? 38 : 52} />

                {/* Main Nav Links */}
                <nav
                    className="hide-scrollbar"
                    style={{
                        display: 'flex',
                        gap: isMobile ? 0 : 4,
                        flex: 1,
                        justifyContent: 'center',
                        overflowX: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        padding: '0 4px'
                    }}
                >
                    {links.map(l => {
                        const isActive = active === l.href.replace('#', '')
                        return (
                            <a
                                key={l.href}
                                href={l.href}
                                style={{
                                    position: 'relative',
                                    padding: isMobile ? '8px 8px' : '7px 14px',
                                    borderRadius: 999,
                                    fontSize: isMobile ? '11.5px' : '13px',
                                    fontWeight: 600,
                                    textDecoration: 'none',
                                    color: isActive
                                        ? (isDark ? '#000' : '#fff')
                                        : (isDark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.45)'),
                                    transition: 'color 0.3s ease',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                {isActive && (
                                    <motion.span
                                        layoutId="pill-active"
                                        style={{
                                            position: 'absolute',
                                            inset: isMobile ? '2px 0' : 0,
                                            borderRadius: 999,
                                            background: isDark ? '#fff' : '#000',
                                            boxShadow: isDark ? '0 4px 12px rgba(255,255,255,0.2)' : '0 4px 12px rgba(0,0,0,0.2)',
                                        }}
                                        transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                                    />
                                )}
                                <span style={{ position: 'relative', zIndex: 1 }}>{l.label}</span>
                            </a>
                        )
                    })}
                </nav>

                {/* Theme Toggle (High Contrast / Negative style) */}
                <motion.button
                    onClick={() => setIsDark(!isDark)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                        width: isMobile ? 36 : 40,
                        height: isMobile ? 36 : 40,
                        borderRadius: '50%',
                        background: isDark ? '#fff' : '#000',
                        color: isDark ? '#000' : '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        border: 'none',
                        outline: 'none',
                        padding: 0,
                        flexShrink: 0,
                        boxShadow: isDark ? '0 4px 12px rgba(255,255,255,0.2)' : '0 4px 12px rgba(0,0,0,0.2)',
                        transition: 'background 0.3s ease, color 0.3s ease',
                    }}
                    title="Ganti tema"
                >
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={isDark ? 'moon' : 'sun'}
                            initial={{ y: 5, opacity: 0, rotate: -45 }}
                            animate={{ y: 0, opacity: 1, rotate: 0 }}
                            exit={{ y: -5, opacity: 0, rotate: 45 }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            {isDark ? (
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                                </svg>
                            ) : (
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="5" />
                                    <line x1="12" y1="1" x2="12" y2="3" />
                                    <line x1="12" y1="21" x2="12" y2="23" />
                                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                    <line x1="1" y1="12" x2="3" y2="12" />
                                    <line x1="21" y1="12" x2="23" y2="12" />
                                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                                </svg>
                            )}
                        </motion.span>
                    </AnimatePresence>
                </motion.button>
            </div>
        </motion.header>
    )
}
