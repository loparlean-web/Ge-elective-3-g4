import { useEffect, useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      className={`scroll-top ${visible ? 'visible' : ''}`}
      onClick={scrollTop}
      aria-label="Scroll to top"
    >
      <FiArrowUp />
    </button>
  )
}