const projects = [
    {
        title: 'XI RPL 2 — Class Website',
        desc: 'Website kelas XI RPL 2 yang dibangun menggunakan React dan Vite, dilengkapi fitur galeri, struktur kelas, dan panel admin. Di-deploy di Vercel dengan integrasi Firebase.',
        tech: ['React', 'Vite', 'Firebase', 'Vercel'],
        link: 'https://xirpl2.vercel.app/',
        image: '/images/project-xirpl2.svg',
    },
    {
        title: 'Personal Portfolio',
        desc: 'Website portfolio personal yang sedang kamu lihat sekarang. Dibangun dengan React + Vite dan di-deploy di GitHub Pages menggunakan custom domain.',
        tech: ['React', 'Vite', 'CSS', 'GitHub Pages'],
        link: 'https://andyz.my.id/',
        image: '/images/project-portfolio.svg',
    },
]

function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="section-container">
                <p className="section-label">Karya</p>
                <h2 className="section-title">Projects</h2>
                <div className="projects-grid">
                    {projects.map((p, i) => (
                        <a
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card"
                            key={i}
                        >
                            <div className="project-preview">
                                <img src={p.image} alt={p.title} />
                            </div>
                            <div className="project-info">
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                                <div className="project-tech">
                                    {p.tech.map(t => (
                                        <span key={t} className="tech-tag">{t}</span>
                                    ))}
                                </div>
                                <span className="project-link-text">Lihat Project →</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
