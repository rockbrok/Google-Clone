import Website from './website';
import PageNotFound from './components/404/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function App() {
  const { t } = useTranslation()

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Website />}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}
