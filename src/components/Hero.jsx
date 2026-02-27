function Hero() {
    const scrollToContact = (e) => {
        e.preventDefault()
        const el = document.getElementById('contact')
        if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' })
    }

    return (
        <section className="hero" id="home">
            <div className="hero-container">
                <div className="hero-text">
                    <p className="hero-label">Web Developer &amp; Creative</p>
                    <h1>
                        Hello, I'm<br />
                        <span className="hero-name">Andy<span className="dot">.</span></span>
                    </h1>
                    <p className="hero-desc">
                        Menggabungkan logika kode dengan estetika visual. Berfokus menciptakan
                        pengalaman web yang imersif melalui koding yang rapi dan desain yang berkarakter.
                    </p>
                    <a href="#contact" className="btn-primary" onClick={scrollToContact}>
                        Hubungi Saya
                    </a>
                </div>
                <div className="hero-image">
                    <div className="hero-image-wrapper">
                        <img src="/images/profile.jpg" alt="Andi Musyofi" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
