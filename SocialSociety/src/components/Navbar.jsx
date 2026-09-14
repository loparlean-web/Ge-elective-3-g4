import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiGlobe } from 'react-icons/fi'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'history', label: 'History' },
  { id: 'today', label: 'Today' },
  { id: 'laws', label: 'Laws' },
  { id: 'issues', label: 'Issues' },
  { id: 'sources', label: 'Sources' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)

      // Scroll-spy
      const scrollPos = window.scrollY + 120
      for (const link of links) {
        const el = document.getElementById(link.id)
        if (el) {
          const top = el.offsetTop
          const bottom = top + el.offsetHeight
          if (scrollPos >= top && scrollPos < bottom) {
            setActive(link.id)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = (id) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) {
      const y = el.offsetTop - 70
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  useEffect(() => {
  if (open) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
  return () => {
    document.body.style.overflow = ''
  }
}, [open])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar__container">
        <div className="navbar__brand" onClick={() => handleClick('home')}>
          <span className="navbar__brand-icon"><FiGlobe /></span>
          <span className="navbar__brand-text">
            Gender Roles PH
            <span>Philippines · MCO 1</span>
          </span>
        </div>

        <button
          className="navbar__toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

        <ul className={`navbar__links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <li key={l.id}>
              <button
                className={`navbar__link ${active === l.id ? 'active' : ''}`}
                onClick={() => handleClick(l.id)}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}