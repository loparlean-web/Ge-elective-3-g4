import { FiFileText, FiGlobe, FiBarChart2, FiBook, FiExternalLink } from 'react-icons/fi'

const sources = [
  {
    name: 'Philippine Commission on Women (PCW)',
    desc: 'pcw.gov.ph — official government body overseeing the Magna Carta of Women.',
    href: 'https://pcw.gov.ph',
    icon: <FiFileText />,
  },
  {
    name: 'Republic Act No. 9710 — Magna Carta of Women',
    desc: 'Full text via the Philippine Commission on Women / Official Gazette.',
    href: 'https://pcw.gov.ph/magna-carta-of-women/',
    icon: <FiFileText />,
  },
  {
    name: 'World Economic Forum — Global Gender Gap Report 2025',
    desc: 'weforum.org/publications/global-gender-gap-report-2025',
    href: 'https://www.weforum.org/publications/global-gender-gap-report-2025/',
    icon: <FiGlobe />,
  },
  {
    name: 'Philippine Statistics Authority (PSA)',
    desc: 'Labor Force Survey & Occupational Wages Survey data — psa.gov.ph',
    href: 'https://psa.gov.ph',
    icon: <FiBarChart2 />,
  },
  {
    name: 'PSA — Violence Against Women Fact Sheet',
    desc: '2024/2025 VAW statistics and reporting data — psa.gov.ph',
    href: 'https://psa.gov.ph',
    icon: <FiBarChart2 />,
  },
  {
    name: 'Congressional Policy and Budget Research Department (CPBRD)',
    desc: "Reports on women's labor participation and wage data.",
    href: 'https://cpbrd.congress.gov.ph',
    icon: <FiBook />,
  },
  {
    name: 'Philippine Sociological Review (PSSC)',
    desc: '"Gender Roles, Fertility, and the Status of Married Filipino Men and Women."',
    href: 'https://pssc.org.ph',
    icon: <FiBook />,
  },
  {
    name: 'Commission on Human Rights (CHR)',
    desc: 'chr.gov.ph — updates on the SOGIE Equality Bill.',
    href: 'https://chr.gov.ph',
    icon: <FiFileText />,
  },
  {
    name: 'News coverage — Philstar, BusinessWorld, Rappler, Inquirer, GMA News',
    desc: 'Cited for current statistics and contextual reporting.',
    href: 'https://www.rappler.com',
    icon: <FiGlobe />,
  },
]

export default function Sources() {
  return (
    <section id="sources" className="section">
      <span className="section__eyebrow">Section 05</span>
      <h2 className="section__title">Sources &amp; References</h2>
      <p className="section__subtitle">
        All statistics and facts on this site are paraphrased and summarized from the
        following credible sources. Government sources (PSA, PCW, CHR, Official Gazette)
        carry the most academic weight.
      </p>

      <div className="grid grid--2">
        {sources.map((s) => (
          <a
            key={s.name}
            className="source"
            href={s.href}
            target="_blank"
            rel="noreferrer"
          >
            <div className="source__icon">{s.icon}</div>
            <div>
              <div className="source__name">
                {s.name} <FiExternalLink style={{ fontSize: '0.75rem', opacity: 0.6 }} />
              </div>
              <div className="source__desc">{s.desc}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}