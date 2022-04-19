import Logo from '../../components/Logo/index';
import Header from '../../components/Header/index';
import PageLanguage from '../../components/PageLanguage/index';
import Footer from '../../components/Footer/index';
import Form from '../../components/Form/index';
import { useEffect } from 'react';

export default function Search() {
  useEffect(() => {
    document.title = "Google"
  }, []);

  return (
    <main>
      <Header />
      <Logo />
      <Form />
      <PageLanguage />
      <Footer  />
    </main>
  )
}
