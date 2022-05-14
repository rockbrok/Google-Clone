import Logo from '../../components/Logo/index';
import Header from '../../components/Header/index';
import PageLanguage from '../../components/PageLanguage/index';
import Footer from '../../components/Footer/index';
import Form from '../../components/Form/index';
import { UserContext } from '../../usercontext';
import { useContext } from 'react';

export default function Search() {
  const { user } = useContext(UserContext);
  return (
    <main>
      <Header />
      <pre>{JSON.stringify(user, 2)}</pre>

      <Logo />
      <Form />
      <PageLanguage />
      <Footer  />
    </main>
  )
}
