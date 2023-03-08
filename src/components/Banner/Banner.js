import React from 'react';

import './Banner.css';

const Banner = () => {
    function truncate(string, n) {
        return string?.length > n ? string.substring(0, n-1) + '...' : string;
    }
    return (
        <div className='banner' style={{
            backgroundImage: `url('https://clipground.com/images/netflix-original-logo-2.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
        }}>
            <div className='banner__contents'>
                <h1 className='banner__title'>Movie Title</h1>
                <div className='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>
                <h3 className='banner__description'>{truncate(`Movie description!!!`, 150)}</h3>
            </div>
            <div className='banner--fadeButton'/>

        </div>
    )
}

export default Banner
