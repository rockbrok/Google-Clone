import Logo from './components/Logo/index';
import Header from './components/Header/index';
import PageLanguage from './components/PageLanguage/index';
import Footer from './components/Footer/index';
import Form from './components/Form/index';
import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const { t } = useTranslation()

  return ( <>
    <Header />
      <main>
        <Logo />
        <Form />
        <PageLanguage />
      </main>
    <Footer />
  </> );
}

export default App