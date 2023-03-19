import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import request from '../../request';

import './Banner.css';

const Banner = () => {

    const[movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get(request.fetchNetflixOrignals);
            setMovie(result?.data.results[
                Math.floor(Math.random() * result?.data.results.length -1)
            ]);
        }

        fetchData();
    }, []);

    function truncate(string, n) {
        return string?.length > n ? string.substring(0, n-1) + '...' : string;
    }
    return (
        <div className='banner' style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
        }}>
            <div className='banner__contents'>
                <h1 className='banner__title'>{movie?.name || movie?.title || movie?.original_name}</h1>
                <div className='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>
                <h3 className='banner__description'>{truncate(movie?.overview, 150)}</h3>
            </div>
            <div className='banner--fadeButton'/>

        </div>
    )
}

export default Banner
