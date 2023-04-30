import React from 'react';
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/footer/Footer'

const LayoutPage = ({children}) => {
  return (
    <>
    <NavBar />
    {children}
    <Footer />
    </>
  )
}

export default LayoutPage