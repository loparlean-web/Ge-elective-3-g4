import { FiUsers, FiBookOpen, FiAward, FiAlertTriangle, FiTrendingUp } from 'react-icons/fi'
import VideoEmbed from '../components/VideoEmbed'
const eras = [
  {
    era: 'Before 1521',
    title: 'Pre-Colonial Philippines',
    icon: <FiUsers />,
    text: 'Society was largely egalitarian. Men and women had equal rights, both could inherit and lead, and the babaylan (usually women) held spiritual authority. Gender expression was more fluid than later colonial norms allowed.',
  },
  {
    era: '1521–1898',
    title: 'Spanish Colonial Period',
    icon: <FiBookOpen />,
    text: "Spanish rule introduced a patriarchal, Catholic social structure. Women were pushed toward the domestic sphere, education focused on wife-and-mother roles, and the 'maria clara' ideal of modesty and purity became the cultural template.",
  },
  {
    era: '1898–1946',
    title: 'American Colonial Period',
    icon: <FiAward />,
    text: "Public schooling expanded to girls on a wide scale, opening doors to literacy, clerical work, and teaching. Filipino women gained the right to vote in 1937 following a national plebiscite.",
  },
  {
    era: '1941–1945',
    title: 'Japanese Occupation',
    icon: <FiAlertTriangle />,
    text: 'Remembered for severe wartime abuses against Filipino women, most notoriously the forced sexual slavery of "comfort women" — a sobering fact that must be treated with appropriate seriousness.',
  },
  {
    era: 'Post-War → Today',
    title: 'Contemporary Shift',
    icon: <FiTrendingUp />,
    text: "From the mid-20th century onward, Filipino women's movements grew alongside broader labor and civil-rights movements, feeding into today's feminist and gender-equality advocacy.",
  },
]

export default function History() {
  return (
    <section id="history" className="section">
      <span className="section__eyebrow">Section 01</span>
      <h2 className="section__title">Historical Gender Roles</h2>
      <p className="section__subtitle">
        How the Philippines moved from a largely egalitarian pre-colonial society
        through centuries of colonial patriarchy — and toward modern equality.
      </p>

      <div className="timeline">
        {eras.map((e) => (
          <div className="timeline__item" key={e.title}>
            <div className="timeline__era">{e.era}</div>
            <h3 className="timeline__title">{e.title}</h3>
            <p className="timeline__text">{e.text}</p>
          </div>
        ))}
        <h3 className="subsection__title">Watch: The Babaylan Tradition</h3>
        <VideoEmbed
        title="Babaylan: Full Documentary on Philippine Shamanism"
        src="https://www.youtube.com/embed/lLv7ldIB4vc"
        source="Tagum City Historical and Cultural Center (2021)"
        description="A documentary featuring interviews with real-life babaylans, exploring the spiritual and social authority women held in pre-colonial Philippine society."
        />
      </div>
    </section>
  )
}