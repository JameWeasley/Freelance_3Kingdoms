import React from 'react'
import Head from './addon/headInfo'
import Body from './addon/bodyDetail'
import Footer from '../shared/footer'
// import Navbar from '../shared/nav'

export default function index() {
  return (
    <>
        {/* <Navbar/> */}
        <Head/>
        <Body/>
        <Footer/>
    </>
  )
}
