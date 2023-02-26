import React, {useContext, useState} from 'react'
import {GlobalContext} from "./context/GlobalState"

import { MovieCard } from './MovieCard';

export const Watchlist = () => {
    const {watchlist}=useContext(GlobalContext);

    const [selectedMovie, setSelectedMovie] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageClick = (movie) => {
        setSelectedMovie(movie);
        setIsModalOpen(true);
    };

    return (
        <div className="movie-page">
            <div className="container">
                <div className="header">
                    <h1 className="heading"> My watchlist </h1>

                    <span className="count-pill"> {watchlist.length} { watchlist.length===1 ? "Movie": "Movies"}</span>
                </div>

                {watchlist.length > 0 ? (
                    <div className="movie-grid">
                        {watchlist.map((movie) => (
                            <MovieCard movie={movie} type="watchlist" key={movie.id} onImageClick={() => handleImageClick(movie)} />
                        ))}
                    </div>
                ) : (
                    <h2 className="no-movies">No movies in your list, add some</h2>
                )}

                
                
            </div>
        </div>
    )
}
