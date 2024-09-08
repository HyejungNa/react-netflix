import React from "react";
import { useParams } from "react-router-dom";
import "./MovieDetailPage.style.css";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import { useSearchMovieById } from "../../hooks/useSearchMovieById";
import { FaImdb } from "react-icons/fa6";
import { TbRating18Plus } from "react-icons/tb";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useSearchMovieById({ id });
  console.log(data);

  if (isLoading) {
    return (
      <div className="spinner-area">
        <Spinner
          animation="border"
          variant="danger"
          style={{ width: "5rem", height: "5rem" }}
        />
      </div>
    );
  }

  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <Container>
        <Row>
          <Col lg={4}>
            {data?.poster_path ? (
              <>
                <img
                  src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${data?.poster_path}`}
                  alt={data?.title}
                />
              </>
            ) : (
              <img
                src="https://yourmobilevet.co.uk/images/listings/no-image.jpg"
                alt="no-image"
                className="lg:px-20 md:px-10 w-full"
              />
            )}
          </Col>
          <Col lg={8} className="movie-detail-information">
            <h2>{data?.title}</h2>
            <p>{data?.overview}</p>
            <div>
              <strong>Genres:</strong>{" "}
              {data?.genres?.map((genre) => genre.name).join(", ")}
            </div>
            <div>
              <FaImdb className="imdb-icon" />
              {data?.vote_average.toFixed(1)}
            </div>
            <div>
              {data.adult ? (
                <TbRating18Plus />
              ) : (
                <div className="all-circle">ALL</div>
              )}
            </div>
            <div>
              <span>Budget: </span>${data?.budget.toLocaleString()}
            </div>
            <div>
              <span>Release Date:</span> {data?.release_date}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MovieDetailPage;
