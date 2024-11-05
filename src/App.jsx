import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Katalog from './pages/Katalog'
import DetailProduk from './pages/DetailProduk'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Payment from './pages/Payment';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/Katalog' element = {<Katalog/>}/>
      <Route path='/DetailProduk' element = {<DetailProduk/>}/>
      <Route path='/Cart' element = {<Cart/>}/>
      <Route path='/Payment' element = {<Payment/>}/>

    </Routes>

    </>
  )
}

export default App