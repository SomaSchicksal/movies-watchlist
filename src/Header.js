import React from 'react'
import {Link} from "react-router-dom"
import movie from "./images/movie-icon2.jpg"

export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="Inner-content">
                    <div className="brand">
                        <Link to="/"> Movies Watchlist </Link>
                    </div>

                    <ul className="nav-links">
                        <li><Link to="/"> Watch list </Link></li>

                        <li><Link to="/watched"> Watched </Link></li>

                        <li><Link to="/add" className="btn"> Add </Link></li>
                    </ul>
                </div>
            </div>
            
        </header>
    )
}
