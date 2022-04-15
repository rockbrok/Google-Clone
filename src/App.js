import Website from './website';
import PageNotFound from './components/404/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Website />}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}
