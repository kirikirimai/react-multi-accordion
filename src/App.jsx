import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LoadPage from './pages/LoadPage';
import Multi from './pages/Multi';

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="multi/" element={<Multi />} />
      <Route path="load/" element={<LoadPage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
