import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

// const fetchSearchMovie = ({ keyword }) => {
//   return keyword
//     ? api.get(`/search/movie?query=${keyword}`)
//     : api.get(`/movie/popular`);
// };

const fetchSearchMovie = async ({ keyword, page }) => {
  if (keyword) {
    // Fetch movies based on the keyword
    return api.get(`/search/movie?query=${keyword}&page=${page}`);
  } else {
    // Fetch popular movies when no keyword is provided
    return api.get(`/movie/popular?page${page}`);
  }
};

export const useSearchMovieQuery = ({ keyword, page }) => {
  return useQuery({
    queryKey: [`movie-search`, { keyword, page }],
    queryFn: () => fetchSearchMovie({ keyword, page }),
    select: (result) => result.data,
  });
};
