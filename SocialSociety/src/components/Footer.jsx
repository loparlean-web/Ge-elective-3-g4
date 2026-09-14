export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <h3 className="footer__title">Gender Roles in the Philippines</h3>
        <p className="footer__text">
          An educational, research-based website exploring how gender roles in the
          Philippines evolved from pre-colonial egalitarianism through colonial
          patriarchy to today's ongoing push for equality.
        </p>
      </div>
      <div className="footer__bottom">
        © {new Date().getFullYear()} Group ___ · MCO 1 · All sources cited on the References section.
      </div>
    </footer>
  )
}