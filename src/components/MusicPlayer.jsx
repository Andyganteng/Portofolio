import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Spotify Track IDs — lagu favorit Andy
// Format embed: https://open.spotify.com/embed/track/{TRACK_ID}
const playlist = [
    {
        id: 1,
        title: 'Evaluasi',
        artist: 'Hindia',
        spotifyTrackId: '2dIBMHByUGcNPzmYBJ6OAj',
    },
    {
        id: 2,
        title: 'Ngapain Repot',
        artist: 'Ajeng Febian',
        spotifyTrackId: '45jQjQvhbVAcL4z1SfUmyf',
    },
    {
        id: 3,
        title: 'mejikuhibiniu',
        artist: 'Tanxi',
        spotifyTrackId: '278PwGlIm7MxVTZud18Rx4',
    },
    {
        id: 4,
        title: 'Aku Mau Ular',
        artist: 'DJ Baken',
        spotifyTrackId: '1pVBgfmlDRjnFQuJFfJOLe',
    },
]

// Compact equalizer bars
function EQ({ playing }) {
    return (
        <div className="flex items-end gap-[2px] h-3">
            {[0.7, 1.1, 0.8].map((d, b) => (
                <motion.span
                    key={b}
                    className="w-[3px] h-3 bg-zinc-900 dark:bg-zinc-100 rounded-sm origin-bottom"
                    animate={playing ? { scaleY: [0.3, 1, 0.4, 0.9, 0.3] } : { scaleY: 0.3 }}
                    transition={{ duration: d, repeat: Infinity, ease: 'easeInOut' }}
                />
            ))}
        </div>
    )
}

export default function MusicPlayer() {
    const [open, setOpen] = useState(false)
    const [idx, setIdx] = useState(0)
    const [playing, setPlaying] = useState(false)

    const track = playlist[idx]
    const embedSrc = `https://open.spotify.com/embed/track/${track.spotifyTrackId}?utm_source=generator&theme=0`

    return (
        <div className="fixed bottom-5 right-5 z-50">
            <AnimatePresence mode="wait">

                {open ? (
                    /* ─── Full Player ─── */
                    <motion.div
                        key="full"
                        initial={{ opacity: 0, y: 16, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 16, scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 340, damping: 30 }}
                        className="w-[320px] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-2xl"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-100 dark:border-zinc-800">
                            <div className="flex items-center gap-2">
                                {playing && <EQ playing={playing} />}
                                <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-400">My Playlist</span>
                            </div>
                            <button
                                onClick={() => setOpen(false)}
                                className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>

                        {/* Spotify embed */}
                        <div key={track.spotifyTrackId}>
                            <iframe
                                src={embedSrc}
                                width="100%"
                                height="152"
                                frameBorder="0"
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                                className="block"
                                title={`${track.title} - ${track.artist}`}
                            />
                        </div>

                        {/* Playlist selector */}
                        <div className="px-3 pb-3 pt-1">
                            {playlist.map((t, i) => (
                                <motion.button
                                    key={t.id}
                                    onClick={() => { setIdx(i); setPlaying(i === idx ? !playing : true) }}
                                    whileHover={{ x: 3 }}
                                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-colors ${idx === i
                                        ? 'bg-zinc-50 dark:bg-zinc-800'
                                        : 'hover:bg-zinc-50 dark:hover:bg-zinc-800/50'
                                        }`}
                                >
                                    {/* Track number / EQ */}
                                    <div className="w-6 flex items-center justify-center flex-shrink-0">
                                        {idx === i && playing
                                            ? <EQ playing />
                                            : <span className="text-[11px] font-semibold text-zinc-400">{i + 1}</span>
                                        }
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className={`text-xs font-semibold truncate ${idx === i ? 'text-zinc-900 dark:text-zinc-100' : 'text-zinc-500 dark:text-zinc-400'}`}>
                                            {t.title}
                                        </p>
                                        <p className="text-[10px] text-zinc-400 truncate">{t.artist}</p>
                                    </div>
                                </motion.button>
                            ))}
                        </div>

                        {/* Note about Spotify */}
                        <div className="px-4 py-2 border-t border-zinc-100 dark:border-zinc-800">
                            <p className="text-[10px] text-zinc-300 dark:text-zinc-600 text-center">
                                Ditenagai oleh Spotify · Tekan play di atas untuk memutar
                            </p>
                        </div>
                    </motion.div>

                ) : (
                    /* ─── Mini Pill ─── */
                    <motion.button
                        key="mini"
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.85 }}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => setOpen(true)}
                        transition={{ type: 'spring', stiffness: 340, damping: 28 }}
                        className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 shadow-lg"
                    >
                        <EQ playing={playing} />
                        <div className="text-left">
                            <p className="text-[11px] font-bold text-zinc-900 dark:text-zinc-100 leading-none">{track.title}</p>
                            <p className="text-[10px] text-zinc-400 mt-0.5">{track.artist}</p>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-zinc-900 dark:bg-zinc-100 flex items-center justify-center ml-1">
                            <svg className="w-3 h-3 text-white dark:text-zinc-900 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </motion.button>
                )}

            </AnimatePresence>
        </div>
    )
}
