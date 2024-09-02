import React from "react";
import Badge from "react-bootstrap/Badge";
import "./MovieCard.style.css";
import { FaImdb } from "react-icons/fa6";
import { TbRating18Plus } from "react-icons/tb";

const MovieCard = ({ movie }) => {
  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://media.themoviedb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}` +
          ")",
      }}
      className="movie-card"
    >
      <div className="overlay">
        <h1 className="movie-title">{movie.title}</h1>
        {movie.genre_ids.map((id) => (
          <Badge bg="danger" key={id}>
            {id}
          </Badge>
        ))}
        <div>
          <div className="movie-vote-average">
            <FaImdb className="imdb-icon" />
            {movie.vote_average}
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
