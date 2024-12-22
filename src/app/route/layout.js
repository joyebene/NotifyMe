import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        {children}
        <Footer />
        <Nav />
    </div>
  )
}

export default layout;