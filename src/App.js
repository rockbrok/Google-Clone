import PageNotFound from './pages/404';
import SignInEmail from './pages/SignIn/Email';
import SignInPassword from './pages/SignIn/Password';
import PasswordRecovery from './pages/PasswordRecovery';
import SignUp from './pages/SignUp';
import SignUpDetails from './pages/SignUpDetails';
import Account from './pages/MyAccount/Home';
import Search from './pages/Search';
import { darkTheme, lightTheme, GlobalStyles, ThemeProvider, useTheme } from './themes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function App() {
  const [theme] = useTheme();

  return (
    <>
    <Helmet>
      <title>Google</title>
    </Helmet>
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <GlobalStyles />
      <Router>
        <Routes>
          <Route exact path="/" element={<Search />}/>
          <Route path="/signin/identifier/" element={<SignInEmail />} />
          <Route path="/signin/challenge/" element={<SignInPassword />} />
          <Route path="/signin/challenge/recovery/" element={<PasswordRecovery />} />
          <Route path="/signup/" element={<SignUp />} />
          <Route path="/signup/webpersonaldetails/" element={<SignUpDetails />} />
          <Route path="/myaccount/" element={<Account />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
    </>
  )
}
