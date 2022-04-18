import PageNotFound from './pages/404';
import Search from './pages/Search';
import { darkTheme, lightTheme, GlobalStyles, ThemeProvider } from './components/Theme';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App(theme, toggleTheme) {
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



