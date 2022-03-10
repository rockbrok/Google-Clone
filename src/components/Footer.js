import React from 'react'
import './Footer.css';

function Footer() {
  return (
    <footer>
        <div class="footer-country">
            <p>Argentina</p>
        </div>
        <div class="footer-content">
            <ul>
                <li>
                    <a href="https://about.google/" alt="About">
                        About
                    </a>
                </li>
                <li>
                    <a href="https://ads.google.com/" alt="Advertising">
                        Advertising
                    </a>
                </li>
                <li>
                    <a href="https://smallbusiness.withgoogle.com/" alt="Business">
                        Business
                    </a>
                </li>
                <li>
                    <a href="https://www.google.com/search/howsearchworks/" alt="How Search Works">
                        How Search Works
                    </a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="https://policies.google.com/privacy/" alt="Privacy">
                        Privacy
                    </a>
                </li>
                <li>
                    <a href="https://policies.google.com/terms/" alt="Terms">
                        Terms
                    </a>
                </li>
                <li>
                    <a href="#" alt="Settings">
                        Settings
                    </a>
                </li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer