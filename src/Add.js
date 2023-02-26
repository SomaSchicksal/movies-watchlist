import React, {useState,useEffect} from 'react';
import {ResultCard} from "./ResultCard";

export const Add = () => {

    const [query,setQuery]= useState("");
    const [results, setResults]=useState([]);
    const [randomImage, setRandomImage]=useState("")

    const api_key="c43ca9291724d793abe73b5eb26327f0"

    

    const onChange= e => {
        e.preventDefault();

        const api_key="c43ca9291724d793abe73b5eb26327f0"

        setQuery(e.target.value);

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&page=1&include_adult=false&query=${e.target.value}`).then(res => res.json())
        .then(data =>{
            console.log(data);
            if(!data.errors) {
                setResults(data.results);
            } else {
                setResults([]);
            }
        })
    }

    useEffect(()=>{
        const fetchData=()=>{
            fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US`).then(res=>res.json()).then(
                data=>{
                    console.log(data);
                    const randomUrlImage="https://image.tmdb.org/t/p/original"+data.results[
                        Math.floor(Math.random() * data.results.length-1)
                    ].poster_path
                    
                    
                    console.log(randomUrlImage);
                    setRandomImage(randomUrlImage)
                }
            )
        }

        fetchData()
        
    },[])
    return (
        <div className="add-page" style={{
            
            backgroundImage: `url(${randomImage})`,
            backgroundPosition: "center center",
            backgroundRepeat:"no-repeat"}}>
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input type="text" placeholder="Search for a movie" value={query} onChange={onChange}></input>
                    </div>

                    {results.length > 0 && (
                        <ul className="results">
                            {results.map(movie => (
                                <li key={movie.id}>
                                    <ResultCard movie={movie}/>
                                </li>
                            ))}
                        </ul>

                    )}
                    
                </div>
            </div>
            
        </div>
    );
};
