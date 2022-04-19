import PageNotFound from './pages/404';
import Search from './pages/Search';
import { darkTheme, lightTheme, GlobalStyles, ThemeProvider, useTheme } from './themes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  const [theme] = useTheme();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <GlobalStyles />
      <Router>
        <Routes>
          <Route exact path="/" element={<Search />}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}
