import OutsideClickHandler from 'react-outside-click-handler';
import i18n, { t } from 'i18next';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

import './style.css'

export default function SignPageFooter() {
  const [show, setShow] = useState(false)

  const {register, handleSubmit } = useForm({
    defaultValues: {
      language: ''
    },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    delayError: 1000,
  });

  const [value, setValue] = useState({
    language: '',
  })

  const changeLanguage = (language) => (
    i18n.changeLanguage(language)
  );
  
  function LanguageChange() {
    i18n.language === "en" ? 
      changeLanguage("es") : changeLanguage("en")
  }

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
    setTimeout(function () {
      LanguageChange();
      }, 0);
    window.location.reload(false);
  }

  return (
    <>
      <section className="footer-grow" />
      <section className="signup-footer" >
        <div className="signup-footer-container">
          <LanguageButton
            show={show}
            setShow={setShow}
            register={register}
            handleSubmit={handleSubmit}
            value={value}
            handleChange={handleChange}
          />
          <Links />
        </div>
      </section>
    </>
  );
}

const LanguageButton = ({ show, setShow, register, handleSubmit, handleChange, value }) => (
  <OutsideClickHandler onOutsideClick={() => { setShow(false) }}>
    <button className="language-select-button" onClick={() => setShow(!show)}>
      {t('language_select.1')}
    </button>
    { show ? 
    <LanguageSelect 
        register={register}
        handleSubmit={handleSubmit}
        value={value}
        handleChange={handleChange}
      />
    : null }
  </OutsideClickHandler>
);

const LanguageSelect = ({ register, handleSubmit, handleChange, value }) => (
  <form onSubmit={handleSubmit} className="signup-footer-language" noValidate>
    <select
      {...register("language", {
        required: true
      })}
      name="language"
      size="2"
      value={value.language}
      onChange={handleChange}
      className="select-wrapper"
      
    >
      <option value="" className="language-text" defaultValue disabled>{t('language_select.1')}</option>
      <option value="01" className="language-text">{t('language_select.2')}</option>
    </select>
  </form>
);
  
const Links = () => (
  <ul className="signup-footer-links">
    <li>{t('help')}</li>
    <li>{t('privacy')}</li>
    <li>{t('terms')}</li>
  </ul>
);
