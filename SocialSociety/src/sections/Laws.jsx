const laws = [
  {
    law: 'RA 9710 — Magna Carta of Women (2009)',
    desc: "The Philippines' comprehensive women's-rights law; implements CEDAW locally. Requires gender mainstreaming, ≥5% GAD budgets, and 50-50 gender balance targets in senior government posts.",
  },
  {
    law: 'RA 9262 — Anti-VAWC Act (2004)',
    desc: 'Criminalizes physical, sexual, psychological, and economic abuse against women and their children by a spouse or partner.',
  },
  {
    law: 'RA 8353 (amended by RA 11648) — Anti-Rape Law',
    desc: 'Defines and penalizes rape; later amended to strengthen protections, including raising the age of sexual consent.',
  },
  {
    law: 'RA 7877 — Anti-Sexual Harassment Act (1995)',
    desc: 'Covers harassment in work, education, and training environments.',
  },
  {
    law: 'RA 11313 — Safe Spaces Act / "Bawal Bastos Law" (2019)',
    desc: 'Expands harassment protections to streets, public spaces, online spaces, and workplaces.',
  },
  {
    law: 'RA 9208 (amended by RA 11862) — Anti-Trafficking in Persons Act',
    desc: 'Targets trafficking, which disproportionately affects women and children.',
  },
  {
    law: 'SOGIE Equality Bill (still pending)',
    desc: 'Would ban discrimination based on sexual orientation, gender identity, and expression. Filed since 2000, refiled nearly every Congress — never passed both chambers. Some LGUs have passed local ordinances.',
  },
]

export default function Laws() {
  return (
    <section id="laws" className="section">
      <span className="section__eyebrow">Section 03</span>
      <h2 className="section__title">Laws &amp; Policies</h2>
      <p className="section__subtitle">
        The Philippines has a strong legal framework protecting gender equality — but
        implementation and cultural attitudes still lag behind.
      </p>

      <div className="table-wrap">
        <table className="table">
          <thead>
            <tr>
              <th>Law / Policy</th>
              <th>What It Does</th>
            </tr>
          </thead>
          <tbody>
            {laws.map((l) => (
              <tr key={l.law}>
                <td>{l.law}</td>
                <td>{l.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="callout">
        <strong>How well are these laws working?</strong> The PNP recorded{' '}
        <strong>11,585 VAW-related cases in 2023</strong> (8,055 under RA 9262 alone).
        The Philippine Commission on Women has flagged that reporting remains a major
        problem — many advocates estimate only a fraction of actual cases are ever
        reported, due to stigma and a "culture of silence."
      </div>
    </section>
  )
}