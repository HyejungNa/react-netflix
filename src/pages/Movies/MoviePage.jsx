import React, { useState, useEffect } from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import { Alert, Container, Row, Col } from "react-bootstrap";
import MovieCard from "../../common/MovieCard/MovieCard";
import ReactPaginate from "react-paginate";
import "./MoviePage.style.css";
import Loader from "../Homepage/components/Loader/Loader";

const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const keyword = query.get("q");

  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
  });
  console.log("ddd", data);

  // Reset page to 1 whenever keyword changes
  useEffect(() => {
    setPage(1);
  }, [keyword]);

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  if (isLoading) {
    return (
      <div className="spinner-area">
        <Loader />
      </div>
    );
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  const moviesAvailable = data?.results.length > 0;

  return (
    <div>
      <Container>
        <Row>
          {/* <Col lg={4} xs={12}>
            Filter
          </Col> */}
          <Col lg={12} xs={12}>
            {moviesAvailable ? (
              <Row>
                {data?.results.map((movie, index) => (
                  <Col
                    key={index}
                    lg={4}
                    xs={12}
                    className="movie-card-container"
                  >
                    <MovieCard movie={movie} className="movie-card" />
                  </Col>
                ))}
              </Row>
            ) : (
              <Alert variant="warning">{`No results found for '${keyword}'`}</Alert>
            )}
            <ReactPaginate
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageCount={data?.total_pages}
              previousLabel="<"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              renderOnZeroPageCount={null}
              forcePage={page - 1}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MoviePage;
