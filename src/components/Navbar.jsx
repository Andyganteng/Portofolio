import { useState, useEffect } from 'react'

function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const handleClick = (e, id) => {
        e.preventDefault()
        setMenuOpen(false)
        const el = document.getElementById(id)
        if (el) {
            const top = el.offsetTop - 70
            window.scrollTo({ top, behavior: 'smooth' })
        }
    }

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <a href="#" className="nav-logo">Andy<span>.</span></a>
                <button
                    className={`nav-toggle ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
                    {['about', 'skills', 'projects', 'contact'].map(item => (
                        <li key={item}>
                            <a
                                href={`#${item}`}
                                className="nav-link"
                                onClick={e => handleClick(e, item)}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
