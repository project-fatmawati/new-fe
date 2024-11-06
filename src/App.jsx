import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Katalog from './pages/Katalog'
import DetailProduk from './pages/DetailProduk'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Payment from './pages/Payment';
import Homepage from './pages/HomePage'
import Profile from './pages/Profile'
import LoginPage from './pages/LoginPage'
import ChallengeDetail from './pages/ChallengeDetail'
import RegisterPage from './pages/RegisterPage'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/Katalog' element = {<Katalog/>}/>
      <Route path='/DetailProduk' element = {<DetailProduk/>}/>
      <Route path='/Cart' element = {<Cart/>}/>
      <Route path='/Payment' element = {<Payment/>}/>
      <Route path='/Homepage' element = {<Homepage/>}/>
      <Route path='/Profile' element = {<Profile/>}/>
      <Route path='/LoginPage' element = {<LoginPage/>}/>
      <Route path='/RegisterPage' element = {<RegisterPage/>}/>
      <Route path='/ChallengeDetail' element = {<ChallengeDetail/>}/>
    </Routes>

    </>
  )
}

export default App