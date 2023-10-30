import HomePage from './pages/HomePage/HomePage_완성'
import './reset.css'
import './app.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from './components/ProductDetail/ProductDetail';
import HomePagee from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePagee />} />
        <Route path="/productDetail" element={<ProductDetail />} />
      
        
      </Routes>
      
    </BrowserRouter>
  );
}
export default App;

