import { motion } from 'framer-motion'

function Footer() {
    return (
        <footer className="py-8 border-t border-gray-200/50 dark:border-white/5 bg-gray-50 dark:bg-apple-dark">
            <div className="apple-container flex flex-col md:flex-row items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-4 md:mb-0"
                >
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        © {new Date().getFullYear()} Andy MY. All rights reserved.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex space-x-6 text-sm text-gray-500 dark:text-gray-400"
                >
                    <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy</a>
                    <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms</a>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer
