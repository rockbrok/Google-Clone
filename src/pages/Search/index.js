import Logo from '../../components/Logo/index';
import Header from '../../components/Header/index';
import PageLanguage from '../../components/PageLanguage/index';
import Footer from '../../components/Footer/index';
import Form from '../../components/Form/index';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export default function Search() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "Google"
  });

  return (
    <>
      <Header />
      <main>
        <Logo />
        <Form />
        <PageLanguage />
      </main>
      <Footer />
    </>
  )
}
