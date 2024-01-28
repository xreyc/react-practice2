import { MemoryRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginScreen from "./pages/login/LoginScreen"
import DashboardScreen from './pages/dashboard/DashboardScreen';
import ProductScreen from './pages/product/ProductScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen/>}/>
        <Route path="/dashboard" element={<DashboardScreen/>}/>
        <Route path="/products" element={<ProductScreen/>}/>
      </Routes>
    </Router>
  )
}

export default App
