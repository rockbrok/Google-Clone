import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './style.css';

export default function PageNotFound() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('not_found_title')
  },);

  return (
    <section className="notfound">
      <div className="notfound-container">
        <div className="left-container">
          <Logo />
          <p className="notfound-top-paragraph">
            <b>404. </b>
            <ins>{t("thats_an_error")}</ins>
          </p>
          <p>
            <span>
              {t("requested_url")}
              {window.location.pathname}
              {t("not_found_on_server")}
            </span>
            <ins>{t("thats_all_we_know")}</ins>
          </p>
        </div>
        <Robot />
      </div>
    </section>
  )
}

const Logo = () => (
  <Link to="/">
    <picture src="" alt="logo" className="notfound-logo" />
  </Link> 
);

const Robot = () => (
  <div className="right-container">
      <picture src="" alt="robot" className="robot"/>
  </div>
);
