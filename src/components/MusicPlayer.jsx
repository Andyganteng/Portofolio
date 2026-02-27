import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Placeholder audio tracks (using free public domain/royalty-free short clips for demonstration)
const playlist = [
    {
        id: 1,
        title: 'Evaluasi',
        artist: 'Hindia',
        cover: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=200&auto=format&fit=crop',
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
    },
    {
        id: 2,
        title: 'Kembali Pulang',
        artist: 'Ajeng Febian',
        cover: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=200&auto=format&fit=crop',
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
    },
    {
        id: 3,
        title: 'Sunset Vibes',
        artist: 'Tanxi',
        cover: 'https://images.unsplash.com/photo-1493225457224-cca197711728?q=80&w=200&auto=format&fit=crop',
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
    },
    {
        id: 4,
        title: 'Remix Breakbeat',
        artist: 'DJ Baken',
        cover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=200&auto=format&fit=crop',
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
    }
]

function MusicPlayer() {
    const [isOpen, setIsOpen] = useState(false)
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [progress, setProgress] = useState(0)
    const audioRef = useRef(null)

    const track = playlist[currentTrackIndex]

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play().catch(e => console.log("Audio play blocked by browser:", e))
        } else {
            audioRef.current.pause()
        }
    }, [isPlaying, currentTrackIndex])

    const togglePlay = (e) => {
        e.stopPropagation()
        setIsPlaying(!isPlaying)
    }

    const handleNext = (e) => {
        e.stopPropagation()
        setCurrentTrackIndex((prev) => (prev + 1) % playlist.length)
        setIsPlaying(true)
    }

    const handlePrev = (e) => {
        e.stopPropagation()
        setCurrentTrackIndex((prev) => (prev - 1 + playlist.length) % playlist.length)
        setIsPlaying(true)
    }

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            const current = audioRef.current.currentTime
            const duration = audioRef.current.duration
            if (duration > 0) {
                setProgress((current / duration) * 100)
            }
        }
    }

    const handleAudioEnded = () => {
        handleNext({ stopPropagation: () => { } })
    }

    return (
        <>
            <audio
                ref={audioRef}
                src={track.src}
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleAudioEnded}
            />

            <div className="fixed bottom-6 right-6 z-50">
                <AnimatePresence>
                    {isOpen ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 20 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                            className="bg-white/80 dark:bg-[#1c1c1e]/80 backdrop-blur-3xl border border-gray-200 dark:border-white/10 rounded-[2rem] p-4 w-72 shadow-2xl overflow-hidden"
                        >
                            {/* Header */}
                            <div className="flex justify-between items-center mb-4 px-2">
                                <span className="text-[10px] font-bold tracking-widest text-gray-400 dark:text-gray-500 uppercase">Now Playing</span>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-1.5 rounded-full bg-gray-100 dark:bg-white/10 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                </button>
                            </div>

                            {/* Cover & Info */}
                            <div className="flex items-center space-x-4 mb-5 px-2">
                                <motion.div
                                    animate={{ rotate: isPlaying ? 360 : 0 }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                    className="w-14 h-14 rounded-full overflow-hidden shadow-md shadow-black/20"
                                >
                                    <img src={track.cover} alt={track.album} className="w-full h-full object-cover" />
                                </motion.div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-sm font-bold text-gray-900 dark:text-white truncate">{track.title}</h4>
                                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 truncate">{track.artist}</p>
                                </div>
                            </div>

                            {/* Progress */}
                            <div className="px-2 mb-4">
                                <div className="w-full h-1.5 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gray-900 dark:bg-white transition-all duration-300"
                                        style={{ width: `${progress}%` }}
                                    ></div>
                                </div>
                            </div>

                            {/* Controls */}
                            <div className="flex items-center justify-center space-x-6">
                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    onClick={handlePrev}
                                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 20L9 12l10-8v16zM5 19h-2V5h2v14z" /></svg>
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={togglePlay}
                                    className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900 shadow-lg"
                                >
                                    {isPlaying ? (
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
                                    ) : (
                                        <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                    )}
                                </motion.button>

                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    onClick={handleNext}
                                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M5 4l10 8-10 8V4zm14 15h2V5h-2v14z" /></svg>
                                </motion.button>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.button
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsOpen(true)}
                            className="w-16 h-16 rounded-full bg-white dark:bg-[#1c1c1e] shadow-2xl flex items-center justify-center border border-gray-200 dark:border-white/10 overflow-hidden group"
                        >
                            {isPlaying ? (
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                    className="w-full h-full relative"
                                >
                                    <img src={track.cover} alt="Playing" className="w-full h-full object-cover blur-[2px] opacity-60" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="flex space-x-1">
                                            <motion.span animate={{ height: [8, 16, 8] }} transition={{ duration: 0.8, repeat: Infinity }} className="w-1 bg-gray-900 dark:bg-white rounded-full"></motion.span>
                                            <motion.span animate={{ height: [16, 8, 16] }} transition={{ duration: 1, repeat: Infinity }} className="w-1 bg-gray-900 dark:bg-white rounded-full"></motion.span>
                                            <motion.span animate={{ height: [10, 20, 10] }} transition={{ duration: 1.2, repeat: Infinity }} className="w-1 bg-gray-900 dark:bg-white rounded-full"></motion.span>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                <svg className="w-6 h-6 text-gray-900 dark:text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" /></svg>
                            )}
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>
        </>
    )
}

export default MusicPlayer
