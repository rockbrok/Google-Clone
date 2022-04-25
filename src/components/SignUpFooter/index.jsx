import './style.css'

export default function SignUpFooter() {
  return (
    <section className="signup-footer" >
      <div className="signup-footer-container">
      <LanguageSelector />
      <Links />
      </div>
    </section>
  );
}

const LanguageSelector = () => (
  <button className="signup-footer-language">
    English (United States)
  </button>
);
  
const Links = () => (
  <ul className="signup-footer-links">
    <li>Help</li>
    <li>Privacy</li>
    <li>Terms</li>
  </ul>
);
