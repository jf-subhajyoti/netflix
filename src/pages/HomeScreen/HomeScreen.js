import React from 'react'
import Banner from '../../components/Banner/Banner';
import Navbar from '../../components/Navbar/Navbar';
import Row from '../../components/Row/Row';
import request from '../../request';

import './HomeScreen.css';

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
        <Navbar />
        <Banner />
        <Row endpoint={request.fetchNetflixOrignals} isLargeRow title='Netflix Orignals' />
        <Row endpoint={request.fetchTrending} title='Now Trending' />
        <Row endpoint={request.fetchTopRated} title='Top Rated' />
        <Row endpoint={request.fetchActionMovies} title='Action Movies' />
        <Row endpoint={request.fetchComedyMovies} title='Comedy Movies' />
        <Row endpoint={request.fetchHorrorMovies} title='Horror Movies' />
    </div>
  )
}

export default HomeScreen
