import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './components/404/index';
import Website from './website';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation()

  return ( <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Website />}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  </> );
}

export default App