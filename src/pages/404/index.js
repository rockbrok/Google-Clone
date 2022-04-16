import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { t } from 'i18next';

import './style.css';

export default function PageNotFound() {

  useEffect(() => {
    document.title = t('not_found_title')
  });

  return (
    <section className="notfound">
      <div className="notfound-container">
        <div className="left-container">
          <Logo />
          <Error />
          <Url />
        </div>
        <Robot />
      </div>
    </section>
  )
}

const Error = () => (
  <p className="notfound-top-paragraph">
    <b>404. </b>
    <ins>{t("thats_an_error")}</ins>
  </p>
);

const Url = () => (
  <p>
    <span>
      {t("requested_url")}
      {window.location.pathname}
      {t("not_found_on_server")}
    </span>
    <ins>{t("thats_all_we_know")}</ins>
  </p>
);

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