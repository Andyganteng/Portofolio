import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Magnet } from './Animations'

/* ─────────────────────────────
   Frame list (transparent PNGs)
   ───────────────────────────── */
const LOGO_FRAMES = [
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

/* ─────────────────────────────
   Big animated Hero logo
   ───────────────────────────── */
function HeroLogo() {
    const [frame, setFrame] = useState(0)
    const [playing, setPlaying] = useState(false)
    const interval = useRef(null)
    const cur = useRef(0)

    const play = () => {
        if (interval.current) return
        setPlaying(true)
        interval.current = setInterval(() => {
            cur.current = (cur.current + 1) % LOGO_FRAMES.length
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
        const t = setTimeout(play, 400)
        return () => { clearTimeout(t); clearInterval(interval.current) }
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 cursor-pointer select-none"
            style={{ width: 'clamp(220px, 55vw, 500px)' }}
            onHoverStart={() => { if (!playing) play() }}
            onClick={() => { if (!playing) play() }}
            title="Klik / hover untuk animasi"
        >
            <img
                src={`/logo-frames-png/${LOGO_FRAMES[frame]}`}
                alt="Andi Musyofi Logo"
                draggable={false}
                style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    objectFit: 'contain',
                    userSelect: 'none',
                    pointerEvents: 'none',
                }}
            />
        </motion.div>
    )
}

/* ─────────────────────────────
   Looping role ticker
   ───────────────────────────── */
const roles = ['Web Developer', 'Front-End Engineer', 'UI Enthusiast', 'Lifelong Learner']

function RoleTicker() {
    const [idx, setIdx] = useState(0)

    return (
        <div
            className="overflow-hidden h-8 sm:h-10 flex items-center cursor-default"
            onClick={() => setIdx(i => (i + 1) % roles.length)}
            title="Klik untuk ganti"
        >
            <AnimatePresence mode="wait">
                <motion.span
                    key={idx}
                    initial={{ y: '110%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '-110%', opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="block text-[clamp(1.1rem,3vw,1.6rem)] font-bold tracking-tight select-none"
                    style={{ color: 'var(--text-2)' }}
                >
                    {roles[idx]}
                </motion.span>
            </AnimatePresence>
        </div>
    )
}

// ─── WMO weather code → emoji ─────────────────────────────────
function weatherIcon(code) {
    if (code === 0) return '☀️'
    if (code <= 2) return '⛅'
    if (code <= 3) return '☁️'
    if (code <= 49) return '🌫️'
    if (code <= 59) return '🌦️'
    if (code <= 69) return '🌧️'
    if (code <= 79) return '❄️'
    if (code <= 82) return '🌧️'
    if (code <= 84) return '🌨️'
    if (code <= 99) return '⛈️'
    return '🌡️'
}

// ─── Live clock + Kendal weather ─────────────────────────────
function LiveWidget() {
    const [time, setTime] = useState(new Date())
    const [weather, setWeather] = useState(null)

    // tick every second
    useEffect(() => {
        const t = setInterval(() => setTime(new Date()), 1000)
        return () => clearInterval(t)
    }, [])

    // fetch weather from Open-Meteo (Kendal: -6.9245, 110.2025)
    useEffect(() => {
        const fetch_ = () =>
            fetch('https://api.open-meteo.com/v1/forecast?latitude=-6.9245&longitude=110.2025&current=temperature_2m,weathercode&timezone=Asia%2FJakarta')
                .then(r => r.json())
                .then(d => setWeather({
                    temp: Math.round(d.current.temperature_2m),
                    code: d.current.weathercode,
                }))
                .catch(() => { })
        fetch_()
        const t = setInterval(fetch_, 10 * 60 * 1000) // refresh every 10 min
        return () => clearInterval(t)
    }, [])

    const hh = time.getHours().toString().padStart(2, '0')
    const mm = time.getMinutes().toString().padStart(2, '0')
    const ss = time.getSeconds().toString().padStart(2, '0')

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex items-center gap-2 select-none"
            style={{ color: 'var(--text-3)', fontSize: 'clamp(11px, 3vw, 13px)', fontWeight: 500 }}
        >
            {/* clock */}
            <span style={{ fontVariantNumeric: 'tabular-nums', letterSpacing: '0.03em' }}>
                {hh}:{mm}
                <span className="hidden xs:inline" style={{ opacity: 0.5, fontSize: '0.85em' }}>:{ss}</span>
            </span>

            {/* dot separator */}
            <span style={{ opacity: 0.35 }}>·</span>

            {/* weather */}
            {weather ? (
                <span className="truncate max-w-[120px] xs:max-w-none">
                    {weatherIcon(weather.code)}&nbsp;{weather.temp}°C · <span className="hidden xs:inline">Kendal</span>
                </span>
            ) : (
                <span style={{ opacity: 0.4 }}>Kendal…</span>
            )}
        </motion.div>
    )
}

export default function Hero() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
    const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
    const yShift = useTransform(scrollYProgress, [0, 0.6], [0, -50])

    return (
        <section
            ref={ref}
            id="home"
            className="relative min-h-[90vh] sm:min-h-screen flex flex-col pt-16 sm:pt-0"
        >
            {/* Top bar */}
            <div className="wrap w-full flex items-center justify-between pt-24 sm:pt-28 pb-0">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                >
                    <p className="label">Portofolio · 2026</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full border select-none scale-90 sm:scale-100 origin-right"
                    style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-muted)' }}
                >
                    <motion.span
                        animate={{ opacity: [1, 0.2, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full bg-emerald-500"
                    />
                    <span className="label">Available</span>
                </motion.div>
            </div>

            {/* Main content */}
            <motion.div
                style={{ opacity, y: yShift }}
                className="wrap w-full flex-1 flex flex-col justify-center py-8 sm:py-12"
            >
                {/* Horizontal rule + role */}
                <motion.div
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="h-px mb-6 sm:mb-8"
                    style={{ backgroundColor: 'var(--border)' }}
                />

                <div className="flex items-end justify-between gap-4 mb-4 sm:mb-6">
                    <RoleTicker />
                    <LiveWidget />
                </div>

                {/* BIG NAME */}
                <div className="overflow-hidden mb-1 sm:mb-2">
                    <motion.p
                        initial={{ y: '110%', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                        className="font-bold tracking-tight select-none"
                        style={{
                            fontSize: 'clamp(1.4rem, 6vw, 3.5rem)',
                            color: 'var(--text-3)',
                            lineHeight: 1.1,
                        }}
                    >
                        Hi am,
                    </motion.p>
                </div>
                <div className="overflow-hidden mb-6">
                    <motion.h1
                        initial={{ y: '105%' }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="font-black tracking-[-0.05em] leading-[0.88] uppercase select-none"
                        style={{
                            fontSize: 'clamp(3.8rem, 20vw, 12rem)',
                            color: 'var(--text)',
                        }}
                    >
                        Andy
                    </motion.h1>
                </div>

                {/* Horizontal rule */}
                <motion.div
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="h-px mb-8"
                    style={{ backgroundColor: 'var(--border)' }}
                />

                {/* Bottom row: bio + CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.85, duration: 0.5 }}
                    className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 sm:gap-12"
                >
                    <p
                        className="text-[14px] leading-relaxed max-w-sm"
                        style={{ color: 'var(--text-2)' }}
                    >
                        Pelajar SMK Rekayasa Perangkat Lunak yang fokus membangun antarmuka web yang
                        fungsional, estetis, dan mudah digunakan.
                    </p>

                    <div className="flex items-center gap-4 shrink-0">
                        <a href="#projects" className="btn-pill whitespace-nowrap">
                            Lihat karya →
                        </a>
                        <a href="#contact" className="btn-ghost whitespace-nowrap">
                            Hubungi
                        </a>
                    </div>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                    className="mt-14 pt-8 grid grid-cols-3 gap-6 max-w-sm"
                    style={{ borderTop: '1px solid var(--border)' }}
                >
                    {[
                        { v: '2', l: 'Project live' },
                        { v: '6+', l: 'Tech stack' },
                        { v: '1', l: 'Kelas aktif' },
                    ].map((s, i) => (
                        <motion.div
                            key={s.l}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.15 + i * 0.07, duration: 0.35 }}
                        >
                            <p className="text-[2rem] font-black leading-none tabular-nums" style={{ color: 'var(--text)' }}>
                                {s.v}
                            </p>
                            <p className="text-[11.5px] font-medium mt-1" style={{ color: 'var(--text-3)' }}>{s.l}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-1.5 select-none"
            >
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1.5"
                    style={{ borderColor: 'var(--border)' }}
                >
                    <div className="w-1 h-1.5 rounded-full" style={{ backgroundColor: 'var(--text-3)' }} />
                </motion.div>
                <p className="label" style={{ whiteSpace: 'nowrap' }}>scroll down</p>
            </motion.div>
        </section>
    )
}
