import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import IndexPage from './page/main'
import RegisterPage from './page/login/register'
import LoginPage from './page/login/login'
import ItemPage from './page/item/item'
import PaymentPage from './page/payment/payment'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/item" element={<ItemPage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
