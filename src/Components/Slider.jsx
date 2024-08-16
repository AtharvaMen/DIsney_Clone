import { useEffect, useState, useRef } from "react";
import GlobalApi from "../Services/GlobalApi";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
const screenWidth = window.innerWidth;
const Slider = () => {
  const [MovieList, setMovieList] = useState([]);
  const elementRef = useRef();
  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalApi.getTrendingVideos().then((resp) => {
      setMovieList(resp.data.results);
    });
  };

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 160;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 160;
  };
  return (
    <div>
      <HiChevronLeft
        className="hidden md:block text-white text-[40px] absolute mx-8 mt-[200px] cursor-pointer"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[40px] absolute mx-8 mt-[200px] cursor-pointer right-0"
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth"
        ref={elementRef}
      >
        {MovieList.map((item) => (
          <img
            key={item.id}
            src={IMAGE_BASE_URL + item.backdrop_path}
            className="min-w-full md:h-[400px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in"
            alt={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
