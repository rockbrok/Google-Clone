import PageNotFound from './pages/404';
import Search from './pages/Search';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Search />}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}
