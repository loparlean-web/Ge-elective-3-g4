import {
  FiBriefcase,
  FiBook,
  FiTrendingUp,
  FiUsers,
  FiAward,
} from 'react-icons/fi'

const stats = [
  { value: '20th', label: 'Global Gender Gap ranking (2025) out of 148 countries' },
  { value: '78.1%', label: 'Parity score — highest in Southeast Asia' },
  { value: '13th', label: 'Globally in economic participation (2025)' },
  { value: '28%', label: "Women's share of Philippine Congress seats (2025)" },
]

export default function Today() {
  return (
    <section id="today" className="section section--alt">
      <div className="section__inner">
        <span className="section__eyebrow">Section 02</span>
        <h2 className="section__title">Gender Roles Today</h2>
        <p className="section__subtitle">
          The Philippines ranks as the top Southeast Asian country in the WEF's Global
          Gender Gap Report — but real gaps in work, politics, and education remain.
        </p>

        <div className="grid grid--4">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <div className="stat__value">{s.value}</div>
              <div className="stat__label">{s.label}</div>
            </div>
          ))}
        </div>

        <h3 className="subsection__title">Work &amp; the Economy</h3>
        <ul className="list">
          <li className="list__item">
            <FiBriefcase className="list__icon" />
            <span className="list__text">
              The Philippines scores <strong>13th globally on economic participation</strong>,
              with full parity among professional and technical workers.
            </span>
          </li>
          <li className="list__item">
            <FiBriefcase className="list__icon" />
            <span className="list__text">
              Yet only <strong>53–56% of women</strong> participate in the labor force
              versus <strong>75–77% of men</strong> — a gap of over 20 percentage points (PSA 2023–2024).
            </span>
          </li>
          <li className="list__item">
            <FiBriefcase className="list__icon" />
            <span className="list__text">
              Women who are formally employed earn slightly <strong>more</strong> on average —
              about ₱22,236/month vs ₱21,009/month (PSA/CPBRD, Aug 2024) — partly because they
              concentrate in more educated, higher-paid job categories.
            </span>
          </li>
        </ul>

        <h3 className="subsection__title">Education</h3>
        <ul className="list">
          <li className="list__item">
            <FiBook className="list__icon" />
            <span className="list__text">
              Filipino women <strong>outperform men in tertiary education enrollment</strong> —
              a pattern the WEF highlights across the region.
            </span>
          </li>
          <li className="list__item">
            <FiBook className="list__icon" />
            <span className="list__text">
              In 2025, the country's educational-attainment ranking fell sharply
              (1st → 87th) because, for the first time, <strong>boys' primary-school net
              enrollment surpassed girls'</strong> — a reminder that gaps can run in either direction.
            </span>
          </li>
        </ul>

        <h3 className="subsection__title">Politics &amp; Leadership</h3>
        <ul className="list">
          <li className="list__item">
            <FiUsers className="list__icon" />
            <span className="list__text">
              Women hold about <strong>28% of seats</strong> in Congress (2025) — roughly
              7 of 24 senators and about 86 of 316 House members.
            </span>
          </li>
          <li className="list__item">
            <FiUsers className="list__icon" />
            <span className="list__text">
              Much of this representation comes through <strong>political dynasties</strong> —
              wives, daughters, and sisters succeeding term-limited male relatives — which
              complicates the "female empowerment" picture.
            </span>
          </li>
          <li className="list__item">
            <FiAward className="list__icon" />
            <span className="list__text">
              Historic milestones: <strong>Geronima Pecson</strong> became the first female
              senator in 1947; <strong>Geraldine Roman</strong> became the first openly
              transgender woman elected to any national legislature in Asia in 2016.
            </span>
          </li>
        </ul>
      </div>
    </section>
  )
}