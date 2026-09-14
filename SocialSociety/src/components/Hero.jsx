import { FiArrowDown } from 'react-icons/fi'

export default function Hero() {
  const scrollToMembers = () => {
    const el = document.getElementById('members')
    if (el) {
      window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="hero"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <div className="hero__overlay" />
      <div className="hero__inner">
        <span className="hero__badge">MCO 1 · Website</span>
        <h1 className="hero__title">
          Gender Roles in the <span>Philippines</span>
        </h1>
        <p className="hero__text">
          From pre-colonial egalitarianism to modern advocacy — exploring how gender
          roles have shaped Filipino society, and where we stand today.
        </p>
        <button className="hero__cta" onClick={scrollToMembers}>
          Meet the Group <FiArrowDown />
        </button>
      </div>
    </section>
  )
}