import { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";

const Slider = () => {
  const [MovieList, setMovieList] = useState([]);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos().then((resp) => {
      setMovieList(resp.data.results);
    });
  };

  return (
    <div className="flex overflow-x-auto">
      {MovieList.map((item) => (
        <img
          key={item.id}
          src={IMAGE_BASE_URL + item.backdrop_path}
          className="min-w-full h-[310px] object-cover"
          alt={item.title}
        />
      ))}
    </div>
  );
};

export default Slider;
