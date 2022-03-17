import React from 'react'
import './Style.css';

function Footer() {
  return (
    <footer>
        <FooterCountry />
        <div class="footer-content">
            <ul>
                <About />
                <Advertising />
                <Business />
                <HowSearchWorks />
            </ul>
            <ul>
                <Privacy />
                <Terms />
                <Settings />
            </ul>
        </div>
    </footer>
  )
}

const FooterCountry = () => (
    <div class="footer-country">
        <p>Argentina</p>
    </div>
);

const About = () => (
    <li>
        <a href="https://about.google/" alt="About">
            About
        </a>
    </li>
);

const Advertising = () => (
    <li>
        <a href="https://ads.google.com/" alt="Advertising">
            Advertising
        </a>
    </li>
);

const Business = () => (
    <li>
        <a href="https://smallbusiness.withgoogle.com/" alt="Business">
            Business
        </a>
    </li>
);

const HowSearchWorks = () => (
    <li>
        <a href="https://www.google.com/search/howsearchworks/" alt="How Search Works">
            How Search Works
        </a>
    </li>
);

const Privacy = () => (
    <li>
        <a href="https://policies.google.com/privacy/" alt="Privacy">
            Privacy
        </a>
    </li>
);

const Terms = () => (
    <li>
        <a href="https://policies.google.com/terms/" alt="Terms">
            Terms
        </a>
    </li>
);

const Settings = () => (
    <li>
        <a href="#" alt="Settings">
            Settings
        </a>
    </li>
);

export default Footer