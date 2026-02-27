const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'PHP', level: 65 },
    { name: 'Tailwind', level: 75 },
    { name: 'Bootstrap 5', level: 80 },
    { name: 'React', level: 60 },
]

function Skills() {
    return (
        <section className="skills" id="skills">
            <div className="section-container">
                <p className="section-label">Keahlian</p>
                <h2 className="section-title">Skills</h2>
                <div className="skills-grid">
                    {skills.map((skill, i) => (
                        <div className="skill-card" key={skill.name} style={{ animationDelay: `${i * 0.1}s` }}>
                            <div className="skill-icon">{skill.name.charAt(0)}</div>
                            <h3 className="skill-name">{skill.name}</h3>
                            <div className="skill-bar">
                                <div className="skill-fill" style={{ width: `${skill.level}%` }}></div>
                            </div>
                            <span className="skill-percent">{skill.level}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
