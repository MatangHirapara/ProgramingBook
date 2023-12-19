import DataTables from './pages/DataTable';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RelatedBook from './pages/RelatedBook';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/:id" element={<RelatedBook />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
