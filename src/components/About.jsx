function About() {
    return (
        <section className="about" id="about">
            <div className="section-container">
                <p className="section-label">Tentang Saya</p>
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Saya <strong>Andi Musyofi</strong>, seorang pelajar SMK jurusan Rekayasa Perangkat Lunak
                            yang memiliki passion di bidang web development dan desain. Lahir tahun 2008
                            dan tumbuh di era digital, saya tertarik dengan bagaimana baris kode bisa
                            berubah menjadi visual yang hidup dan fungsional.
                        </p>
                        <p>
                            Saat ini saya sedang mengembangkan skill melalui program magang di{' '}
                            <a href="https://crocodic.com/id/" target="_blank" rel="noopener noreferrer" className="link-accent">
                                Crocodic
                            </a>
                            , sebuah software house di Jakarta yang berfokus pada pembuatan aplikasi mobile,
                            IoT, dan solusi AI. Di sana saya belajar banyak tentang workflow profesional
                            dan best practices dalam pengembangan software.
                        </p>
                    </div>
                    <div className="about-stats">
                        <div className="stat-item">
                            <span className="stat-number">2</span>
                            <span className="stat-label">Projects</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">6+</span>
                            <span className="stat-label">Skills</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">1</span>
                            <span className="stat-label">Internship</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
