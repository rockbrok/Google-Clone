import PageNotFound from './pages/404';
import SignIn from './pages/SignIn';
import UsernameRecovery from './pages/UsernameRecovery';
import SignUp from './pages/SignUp';
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
          <Route path="/signin/" element={<SignIn />} />
          <Route path="/signin/usernamerecovery/" element={<UsernameRecovery />} />
          <Route path="/signup/" element={<SignUp />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
    </>
  )
}
