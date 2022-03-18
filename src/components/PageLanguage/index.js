import React from 'react'
import './style.css';

function PageLanguage() {
    return (
        <Language />
    )
}

const Language = () => (
    <div class="search-language-container">
        <div class="search-language">
            Google offered in:&nbsp;
            <a hrefe="#" alt="Espanol">
                    Español (Latinoamérica)
            </a>
        </div>
    </div>
);

export default PageLanguage