import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const api_key="c43ca9291724d793abe73b5eb26327f0"
  
  


  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`
        );
        const data = await response.json();
        console.log(data)
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="details-bg" style={{
      backgroundImage:`url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      
      
    }}>
      
      <div className="container">
      <div className="details">
        
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={`${movie.title} Poster`}
        />
        <div className="details-info">
          
          <h1>{movie.title}</h1>
          <div className="genres">
            {movie.genres.map((genre) => {
              return <h2 key={genre.id}>{genre.name}</h2>
            })}
          </div>
          <p>{movie.overview}</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Details;
