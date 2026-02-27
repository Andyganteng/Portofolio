/**
 * ReactBits-inspired animation components
 * Implementations based on patterns from reactbits.dev
 */
import { useRef, useEffect, useState, useCallback } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useScroll, AnimatePresence } from 'framer-motion'

/* ─────────────────────────────────────────
   SplitText — animates every character individually
   Inspired by reactbits.dev/text-animations/split-text
   ───────────────────────────────────────── */
export function SplitText({ children, className = '', delay = 0, charDelay = 0.025 }) {
    const text = typeof children === 'string' ? children : ''
    return (
        <span className={className} aria-label={text} style={{ display: 'inline' }}>
            {text.split('').map((char, i) => (
                <span key={i} style={{ display: 'inline-block', overflow: 'hidden' }}>
                    <motion.span
                        style={{ display: 'inline-block' }}
                        initial={{ y: '105%', opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: delay + i * charDelay, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                </span>
            ))}
        </span>
    )
}

/* ─────────────────────────────────────────
   BlurText — text blurs in word by word
   Inspired by reactbits.dev/text-animations/blur-text
   ───────────────────────────────────────── */
export function BlurText({ children, className = '', delay = 0, wordDelay = 0.08 }) {
    const text = typeof children === 'string' ? children : ''
    const words = text.split(' ')
    return (
        <span className={className} aria-label={text}>
            {words.map((word, i) => (
                <span key={i} style={{ display: 'inline-block', marginRight: '0.25em' }}>
                    <motion.span
                        style={{ display: 'inline-block' }}
                        initial={{ filter: 'blur(10px)', opacity: 0, y: 12 }}
                        animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: delay + i * wordDelay, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </span>
    )
}

/* ─────────────────────────────────────────
   ScrollReveal — fade+slide on scroll
   ───────────────────────────────────────── */
export function ScrollReveal({ children, delay = 0, y = 30, className = '' }) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    )
}

/* ─────────────────────────────────────────
   TiltCard — 3D perspective tilt on hover
   Inspired by reactbits.dev/animations/tilted-card
   ───────────────────────────────────────── */
export function TiltCard({ children, className = '', intensity = 10 }) {
    const ref = useRef(null)
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [intensity, -intensity]), { stiffness: 200, damping: 20 })
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-intensity, intensity]), { stiffness: 200, damping: 20 })

    const handleMouse = (e) => {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        x.set((e.clientX - rect.left) / rect.width - 0.5)
        y.set((e.clientY - rect.top) / rect.height - 0.5)
    }
    const reset = () => { x.set(0); y.set(0) }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            style={{ rotateX, rotateY, transformPerspective: 800 }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

/* ─────────────────────────────────────────
   Magnet — children follow cursor slightly
   Inspired by reactbits.dev/animations/magnet
   ───────────────────────────────────────── */
export function Magnet({ children, strength = 0.4, className = '' }) {
    const ref = useRef(null)
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const springX = useSpring(x, { stiffness: 300, damping: 22 })
    const springY = useSpring(y, { stiffness: 300, damping: 22 })

    const handleMouseMove = (e) => {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        x.set((e.clientX - rect.left - rect.width / 2) * strength)
        y.set((e.clientY - rect.top - rect.height / 2) * strength)
    }
    const reset = () => { x.set(0); y.set(0) }

    return (
        <div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={reset} className={className}>
            <motion.div style={{ x: springX, y: springY }}>
                {children}
            </motion.div>
        </div>
    )
}

/* ─────────────────────────────────────────
   SpotlightCard — radial light follows cursor inside card
   Inspired by reactbits.dev/components/spotlight-card
   ───────────────────────────────────────── */
export function SpotlightCard({ children, className = '', spotlightColor = 'rgba(0,0,0,0.06)' }) {
    const cardRef = useRef(null)
    const [pos, setPos] = useState({ x: '50%', y: '50%' })
    const [visible, setVisible] = useState(false)

    const move = (e) => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }

    return (
        <div
            ref={cardRef}
            onMouseMove={move}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            className={`relative overflow-hidden ${className}`}
            style={{
                background: visible
                    ? `radial-gradient(300px circle at ${pos.x}px ${pos.y}px, ${spotlightColor}, transparent 60%)`
                    : undefined,
            }}
        >
            {children}
        </div>
    )
}

/* ─────────────────────────────────────────
   VariableProximity — text chars scale based on mouse distance
   Inspired by reactbits.dev/text-animations/variable-proximity
   ───────────────────────────────────────── */
export function VariableProximity({ children, className = '', radius = 120, fromWeight = 300, toWeight = 900 }) {
    const ref = useRef(null)
    const [weights, setWeights] = useState([])
    const text = typeof children === 'string' ? children : ''

    useEffect(() => {
        setWeights(Array(text.length).fill(fromWeight))
    }, [text, fromWeight])

    const handleMouseMove = useCallback((e) => {
        if (!ref.current) return
        const spans = ref.current.querySelectorAll('.vp-char')
        spans.forEach((span) => {
            const rect = span.getBoundingClientRect()
            const cx = rect.left + rect.width / 2
            const cy = rect.top + rect.height / 2
            const dist = Math.sqrt((e.clientX - cx) ** 2 + (e.clientY - cy) ** 2)
            const ratio = Math.max(0, 1 - dist / radius)
            const weight = Math.round(fromWeight + (toWeight - fromWeight) * ratio)
            span.style.fontWeight = weight
        })
    }, [radius, fromWeight, toWeight])

    const handleMouseLeave = useCallback(() => {
        if (!ref.current) return
        ref.current.querySelectorAll('.vp-char').forEach(s => { s.style.fontWeight = fromWeight })
    }, [fromWeight])

    return (
        <span
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={className}
            style={{ display: 'inline-block' }}
        >
            {text.split('').map((char, i) => (
                <span
                    key={i}
                    className="vp-char"
                    style={{ display: 'inline-block', fontWeight: fromWeight, transition: 'font-weight 0.1s' }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </span>
    )
}

/* ─────────────────────────────────────────
   RollingText — hover to roll text in/out
   Inspired by reactbits.dev/text-animations/rolling-text
   ───────────────────────────────────────── */
export function RollingText({ children, hoverText, className = '' }) {
    const text = typeof children === 'string' ? children : ''
    const hover = hoverText || text
    return (
        <span className={`inline-block overflow-hidden relative ${className}`} style={{ height: '1.2em' }}>
            {/* Default */}
            <motion.span
                className="block"
                initial={{ y: 0 }}
                whileHover={{ y: '-100%' }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
                {text}
            </motion.span>
            {/* Hover */}
            <motion.span
                className="block absolute top-0 left-0 w-full"
                initial={{ y: '100%' }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
                {hover}
            </motion.span>
        </span>
    )
}

/* ─────────────────────────────────────────
   GlitchText — random glitch effect on hover
   ───────────────────────────────────────── */
export function GlitchText({ children, className = '' }) {
    const [glitching, setGlitching] = useState(false)
    const [display, setDisplay] = useState(children)
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%'
    const orig = typeof children === 'string' ? children : ''

    useEffect(() => {
        if (!glitching) { setDisplay(orig); return }
        let iter = 0
        const max = orig.length * 3
        const interval = setInterval(() => {
            setDisplay(
                orig.split('').map((ch, idx) => {
                    if (ch === ' ') return ' '
                    if (idx < iter / 3) return orig[idx]
                    return chars[Math.floor(Math.random() * chars.length)]
                }).join('')
            )
            iter++
            if (iter > max) { setDisplay(orig); clearInterval(interval) }
        }, 30)
        return () => clearInterval(interval)
    }, [glitching])

    return (
        <span
            className={`cursor-default select-none font-mono ${className}`}
            onMouseEnter={() => setGlitching(true)}
            onMouseLeave={() => setGlitching(false)}
        >
            {display}
        </span>
    )
}
