import { motion } from 'framer-motion'

function Hero() {
    const scrollToContact = (e) => {
        e.preventDefault()
        const el = document.getElementById('contact')
        if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' })
    }

    // iOS-style spring variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0, filter: 'blur(10px)' },
        visible: {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            transition: { type: 'spring', stiffness: 300, damping: 24 }
        }
    }

    return (
        <section className="min-h-[90vh] flex flex-col justify-center pt-24 pb-12 overflow-hidden" id="home">
            <div className="apple-container grid md:grid-cols-2 gap-12 items-center">

                {/* Text Area */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="order-2 md:order-1 flex flex-col items-center text-center md:items-start md:text-left z-10"
                >
                    <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-1.5 rounded-full bg-white dark:bg-[#1c1c1e] border border-gray-200 dark:border-white/10 mb-6 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-black dark:bg-white mr-2 animate-pulse"></span>
                        <span className="text-xs font-semibold tracking-widest text-gray-600 dark:text-gray-300 uppercase">
                            Web Developer
                        </span>
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-[1.1]">
                        Hello, I'm <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-400 dark:from-white dark:to-gray-500">
                            Andy
                        </span><span className="text-gray-400 dark:text-gray-600">.</span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg leading-relaxed">
                        Seorang pelajar SMK jurusan Rekayasa Perangkat Lunak yang berambisius. Berfokus pada antarmuka modern, interaksi super mulus, dan desain estetis minimalis.
                    </motion.p>

                    <motion.a
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#contact"
                        onClick={scrollToContact}
                        className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white transition-shadow bg-gray-900 dark:bg-white dark:text-gray-900 rounded-full shadow-lg hover:shadow-xl dark:shadow-none dark:hover:bg-gray-200"
                    >
                        Hubungi Saya
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </motion.a>
                </motion.div>

                {/* Image Area */}
                <div className="order-1 md:order-2 relative flex justify-center">
                    {/* Decorative blur blob - Monochrome */}
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5, type: 'spring' }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gray-400/20 dark:bg-white/5 blur-[80px] rounded-full point-events-none"
                    ></motion.div>

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 30 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25, delay: 0.2 }}
                        whileHover={{ scale: 1.02 }}
                        className="relative w-[280px] h-[340px] md:w-[340px] md:h-[420px] rounded-[2rem] overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-[#1c1c1e]/50 backdrop-blur-sm p-2 z-10 duration-500"
                    >
                        <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
                            <img
                                src="/images/profile.jpg"
                                alt="Andi Musyofi"
                                className="w-full h-full object-cover object-top grayscale"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent mix-blend-overlay"></div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    )
}

export default Hero
