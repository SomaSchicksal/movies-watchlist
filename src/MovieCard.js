import React, {useState} from 'react'
import {MovieControl} from "./MovieControl"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



export const MovieCard = ({movie, type}) => {

    

    

    
    return (
        <div className="movie-card">
            <div className="overlay"></div>

            {movie.poster_path ? (
                <>
                    <Link to={`/details/${movie.id}`}>
                        <img  style={{cursor: "pointer"}}  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title}Poster`} />
                    
                    </Link>
                    <h1 style={{ fontSize: "20px", textAlign: "center" }}>{movie.title}</h1>
                </>
            ) : (
                <div className="filler-poster"> </div>
            )}

            <MovieControl type={type} movie={movie}/>

            
        </div>
    )
}
