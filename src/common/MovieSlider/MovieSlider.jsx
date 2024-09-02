import React from "react";
import "./MovieSlider.style.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import MovieCard from "../../../../common/MovieCard/MovieCard";
import MovieCard from "../MovieCard/MovieCard";

const MovieSlider = ({ title, movies, responsive }) => {
  return (
    <div>
      <h3>{title}</h3>
      <Carousel
        infinite={true}
        centerMode={true}
        itemClass="movie-slider p-1"
        containerClass="carousel-container"
        responsive={responsive}
      >
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={index} className="movie-card" />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlider;
