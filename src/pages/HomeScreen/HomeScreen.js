import React from 'react'
import Banner from '../../components/Banner/Banner';
import Navbar from '../../components/Navbar/Navbar';

import './HomeScreen.css';

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
        <Navbar />
        <Banner />
    </div>
  )
}

export default HomeScreen
