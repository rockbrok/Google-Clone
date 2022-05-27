import i18n, { t } from 'i18next';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

import './style.css'

export default function SignPageFooter() {
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
    LanguageChange();
    window.location.reload(false);
  }

  return (
    <section className="signup-footer" >
      <div className="signup-footer-container">
      <LanguageSelect 
        register={register}
        handleSubmit={handleSubmit}
        value={value}
        handleChange={handleChange}
        LanguageChange={LanguageChange}
      />
      <Links />
      </div>
    </section>
  );
}

const LanguageSelect = ({ register, handleSubmit, handleChange, value }) => (
  <form onSubmit={handleSubmit} className="signup-footer-language" noValidate>
    <select
      {...register("language", {
        required: true
      })}
      name="language"
      size="1"
      value={value.language}
      onChange={handleChange}
    >
      <option value="01">{t('language_select.1')}</option>
      <option value="02">{t('language_select.2')}</option>
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
