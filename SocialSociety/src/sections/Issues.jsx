import {
  FiAlertOctagon,
  FiBriefcase,
  FiUsers,
  FiHeart,
  FiUserCheck,
} from 'react-icons/fi'

const issues = [
  {
    icon: <FiAlertOctagon />,
    title: 'Violence Against Women',
    text: 'Remains widespread and under-reported despite strong legislation like RA 9262 and the Safe Spaces Act.',
  },
  {
    icon: <FiBriefcase />,
    title: 'Labor Force Gap',
    text: 'Over a 20-point difference in participation between men and women — even though women are, on average, more educated.',
  },
  {
    icon: <FiUsers />,
    title: 'Political Representation',
    text: 'Women hold ~28% of congressional seats, but much of it is shaped by family dynasties rather than open competition.',
  },
  {
    icon: <FiHeart />,
    title: 'LGBTQ+ / SOGIESC Rights',
    text: 'No national anti-discrimination law based on SOGIE exists, despite the bill being filed for 25 years running since 2000.',
  },
  {
    icon: <FiUserCheck />,
    title: 'Shifting Masculinity Norms',
    text: 'Filipino fatherhood and "breadwinner" norms are gradually shifting as more mothers work and more fathers take on caregiving.',
  },
]

export default function Issues() {
  return (
    <section id="issues" className="section section--alt">
      <div className="section__inner">
        <span className="section__eyebrow">Section 04</span>
        <h2 className="section__title">Issues &amp; Challenges</h2>
        <p className="section__subtitle">
          Progress is real, but these gaps show the work isn't finished — and gender
          roles affect men as much as women.
        </p>

        <div className="grid grid--3">
          {issues.map((i) => (
            <div className="issue" key={i.title}>
              <div className="issue__icon">{i.icon}</div>
              <h3 className="issue__title">{i.title}</h3>
              <p className="issue__text">{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}