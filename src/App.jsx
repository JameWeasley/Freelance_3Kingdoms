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
import AdminPage from './page/admin/admin'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Navbar from './page/shared/nav'
import 'sweetalert2/src/sweetalert2.scss'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/item" element={<ItemPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
