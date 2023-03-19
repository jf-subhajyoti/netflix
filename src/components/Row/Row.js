import React, { useEffect, useState } from 'react';

import axios from '../../axios'

import './Row.css';

const Row = ({ title, endpoint, isLargeRow }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get(endpoint);
            console.log(res);
            setMovies(res?.data.results)
        }

        fetchData();
    }, [endpoint]);
    return (
        <div className='row'>
            <h2 className='title'>{title}</h2>
            <div className="movie__row">
                {
                    movies?.map(movie => <img className={`row__image ${isLargeRow && 'row__imageLarge'}`} key={movie.id} src={`https://image.tmdb.org/t/p/original${isLargeRow ? movie?.poster_path : movie?.backdrop_path}`} alt={movie.name} />)
                }
            </div>
        </div>
    )
}

export default Row
