import genresList from '../Constant/genresList';
import MovieList from './MovieList';

const GenreMovieList = () => {
  return (
    <div>
      {genresList.genere.map((item, index) => index <= 4 && (
        <div key={item.id} className='p-8 px-8 md:px-16'>
          <h2 className='text-[20px] text-white font-bold'>{item.name}</h2>
          <MovieList genreId={item.id}/>
        </div>
      ))}
    </div>
  );
};

export default GenreMovieList;
