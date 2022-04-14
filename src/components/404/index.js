import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './style.css';

export default function PageNotFound() {
  const { t } = useTranslation()
  useEffect(() => {
    document.title = t('not_found_title') },);

  return (
    <div className="notfound-wrapper">
    <div className="notfound-container">
      <div className="left-container">
        <picture className="notfound-logo">
        <Link to="/">
          <img src="googlelogo_color_150x54dp.png" alt="logo" />
        </Link> 
        </picture>
        <p className="notfound-p">
          <b>404. </b>
          <ins>{t("thats_an_error")}</ins>
        </p>
        <p className="notfound-p">
          <span>{t("requested_url")}{window.location.pathname}{t("not_found_on_server")}</span>
          <ins>{t("thats_all_we_know")}</ins>
        </p>
      </div>
      <div className="right-container">
        <picture className="robot">
          <img src="robot.png" alt="robot" />
        </picture>
      </div>
    </div>
    </div>
  )
}