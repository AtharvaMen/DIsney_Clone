import { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

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
    <div>
      <HiChevronLeft className="hidden md:block text-white text-[40px] absolute mx-8 mt-[200px] cursor-pointer" />
      <HiChevronRight className="hidden md:block text-white text-[40px] absolute mx-8 mt-[200px] cursor-pointer right-0" />
      <div className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none">
        {MovieList.map((item) => (
          <img
            key={item.id}
            src={IMAGE_BASE_URL + item.backdrop_path}
            className="min-w-full md:h-[400px] object-cover object-left-top mr-5 rounded-md"
            alt={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
