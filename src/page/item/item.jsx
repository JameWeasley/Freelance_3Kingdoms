import React from 'react'
import Navbar from '../shared/nav'
import Footer from '../shared/footer'
import Weapon from './addon/weapon'
import Monster from './addon/monster'
import Store from './addon/store'

 
export default function item() {
  return (
    <>
      <Navbar/>
      <Weapon/>
      <Monster/>
      <Store/>
      <Footer/>
    </>
  )
}
