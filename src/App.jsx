import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Multi from './pages/Multi';

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="multi/" element={<Multi />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
