import { useState, useEffect, useRef } from 'react'
import { FiUser } from 'react-icons/fi'

const members = [
  {
    name: 'Lopar, Lean',
    role: 'Group Leader ',
    bio: 'It is, what it is',
    photo: '/members/lean.jpg',
  },
  {
    name: 'Olasiman, Jasmine',
    role: 'Historical Research',
    bio: 'Never na post',
    photo: '/members/jasmine.jpg',
  },
  {
    name: 'Lumanta, Melvin',
    role: 'Data Analyst',
    bio: 'Never penursue',
    photo: '/members/melvin.jpg',
  },
  {
    name: 'Magbutay, Jeorge Ivan',
    role: 'Legal Research',
    bio: 'Live for rene',
    photo: '/members/jeorge.jpg',
  },
  {
    name: 'Ortiz, Denzel Wenstion',
    role: 'Issues Advocacy',
    bio: 'Adik man sayong paningin, may tama karin',
    photo: '/members/denzel.jpg',
  },
  {
    name: 'Manuel, Cris Vincent',
    role: 'Multimedia Design',
    bio: 'Mythic Player',
    photo: '/members/cris.jpg',
  },
  {
    name: 'Lobos, Jeremy',
    role: 'Developer',
    bio: 'I code in light Mode.',
    photo: '/members/jeremy.jpg',
  },
]

function initials(name) {
  return name
    .split(',')[0]
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export default function Members() {
  const [activeIdx, setActiveIdx] = useState(null)
  const containerRef = useRef(null)

useEffect(() => {
  const handleClickOutside = (e) => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      setActiveIdx(null)
    }
  }

  // Close popup on scroll so it doesn't float awkwardly
  const handleScroll = () => {
    if (activeIdx !== null) setActiveIdx(null)
  }

  document.addEventListener('mousedown', handleClickOutside)
  document.addEventListener('touchstart', handleClickOutside)
  window.addEventListener('scroll', handleScroll, { passive: true })

  return () => {
    document.removeEventListener('mousedown', handleClickOutside)
    document.removeEventListener('touchstart', handleClickOutside)
    window.removeEventListener('scroll', handleScroll)
  }
}, [activeIdx])

  const toggle = (idx) => {
    setActiveIdx((prev) => (prev === idx ? null : idx))
  }

  return (
    <section id="members" className="members" ref={containerRef}>
      <div className="members__inner">
        <h2 className="members__title">Presented by Group 4</h2>
        <div className="members__list">
          {members.map((m, idx) => {
            const isActive = activeIdx === idx
            return (
              <div
                key={m.name}
                className={`member ${isActive ? 'member--active' : ''}`}
                onMouseEnter={() => setActiveIdx(idx)}
                onMouseLeave={() => setActiveIdx(null)}
                onClick={(e) => {
                  e.stopPropagation()
                  toggle(idx)
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    toggle(idx)
                  }
                }}
              >
                <span className="member__dot" />
                <span className="member__name">{m.name}</span>

                {/* Popup */}
                <div className="member__popup" aria-hidden={!isActive}>
                  <div className="member__photo-wrap">
                    <img
                      src={m.photo}
                      alt={m.name}
                      className="member__photo"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                        e.currentTarget.nextSibling.style.display = 'grid'
                      }}
                    />
                    <span className="member__photo-fallback">
                      <FiUser />
                      <span>{initials(m.name)}</span>
                    </span>
                  </div>
                  <div className="member__popup-body">
                    <div className="member__popup-name">{m.name}</div>
                    <div className="member__popup-role">{m.role}</div>
                    <p className="member__popup-bio">{m.bio}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}