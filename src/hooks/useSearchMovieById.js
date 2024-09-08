import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchMovieDetails = async ({ id }) => {
  const response = await api.get(`/movie/${id}`);
  return response.data;
};

export const useSearchMovieById = ({ id }) => {
  return useQuery({
    queryKey: ["movie-details", id],
    queryFn: () => fetchMovieDetails({ id }),
    select: (result) => result,
  });
};
