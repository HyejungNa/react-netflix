import React from "react";
import { useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import "./MovieCard.style.css";
import { FaImdb } from "react-icons/fa6";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "@fortawesome/fontawesome-svg-core/styles.css";
// import { faImdb } from "@fortawesome/free-brands-svg-icons";
import { TbRating18Plus } from "react-icons/tb";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";

const MovieCard = ({ movie }) => {
  const { data: genreData } = useMovieGenreQuery();
  // console.log("GenreData", genreData);

  const navigate = useNavigate();

  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id === id);
      return genreObj.name;
    });

    return genreNameList;
  };

  const handleCardClick = () => {
    navigate(`/movies/${movie.id}`);
  };

  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}` +
          ")",
      }}
      className="movie-card"
      onClick={handleCardClick}
    >
      <div className="overlay">
        <h1 className="movie-title">{movie.title}</h1>
        {showGenre(movie.genre_ids).map((id) => (
          <Badge bg="danger" key={id}>
            {id}
          </Badge>
        ))}
        <div>
          <div className="movie-vote-average">
            <FaImdb className="imdb-icon" />
            {/* <FontAwesomeIcon icon={faImdb} size="2x" className="imdb" /> */}
            {movie.vote_average.toFixed(1)}
          </div>
          {/* <div>{movie.popularity}</div> */}
          <div>
            {movie.adult ? (
              <TbRating18Plus />
            ) : (
              <div className="all-circle">ALL</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
