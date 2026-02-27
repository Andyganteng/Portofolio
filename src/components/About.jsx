import { motion } from 'framer-motion'

function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 300, damping: 24 }
        }
    }

    return (
        <section className="py-24 md:py-32" id="about">
            <div className="apple-container">

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <p className="text-xs font-bold tracking-widest text-gray-500 dark:text-gray-400 uppercase mb-2">Siapa Saya?</p>
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                        About Me
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-12 gap-10"
                >

                    {/* Bio Text */}
                    <motion.div variants={itemVariants} className="md:col-span-7 lg:col-span-8 flex flex-col justify-center space-y-6">
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                            Hai, saya <strong className="font-bold text-gray-900 dark:text-white">Andi Musyofi</strong>, seorang developer muda yang terobsesi dengan performa dan pixel-perfect UI. Saya percaya bahwa setiap elemen dari sebuah website harus memiliki tujuan dan terasa hidup, seperti ekosistem iOS yang seamless.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            Dilahirkan di era digital dan saat ini mengembangkan skill profesional melalui magang di <a href="https://crocodic.com/id/" target="_blank" rel="noreferrer" className="text-gray-900 border-b border-gray-900 dark:border-white dark:text-white hover:opacity-70 transition-opacity font-semibold pb-0.5">Crocodic</a>—sebuah software house luar biasa di Jakarta. Di sana saya mempelajari langsung standar industri skala besar yang rapih dan efisien.
                        </p>
                    </motion.div>

                    {/* Stats Bento Box */}
                    <motion.div variants={itemVariants} className="md:col-span-5 lg:col-span-4 flex flex-col gap-4">

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-gray-100 dark:bg-[#1c1c1e] rounded-[2rem] p-8 flex flex-col items-center justify-center text-center cursor-default shadow-inner dark:shadow-none"
                        >
                            <span className="text-5xl font-black text-gray-900 dark:text-white mb-2">2</span>
                            <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">Projects</span>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-4">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gray-100 dark:bg-[#1c1c1e] rounded-[2rem] p-6 flex flex-col items-center justify-center text-center cursor-default"
                            >
                                <span className="text-3xl font-black text-gray-900 dark:text-white mb-1">6+</span>
                                <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Skills</span>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gray-100 dark:bg-[#1c1c1e] rounded-[2rem] p-6 flex flex-col items-center justify-center text-center cursor-default"
                            >
                                <span className="text-3xl font-black text-gray-900 dark:text-white mb-1">1</span>
                                <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Internship</span>
                            </motion.div>
                        </div>

                    </motion.div>

                </motion.div>
            </div>
        </section>
    )
}

export default About
