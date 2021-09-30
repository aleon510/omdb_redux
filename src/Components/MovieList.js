import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../API/getMovies';
import { fetchSearchSuccess, fetchSearchPending } from '../store/action/action';

const MovieList = () => {
	const { movies } = useSelector(state => state.search);
	const { pending: loading } = useSelector(state => state.search);
	const dispatch = useDispatch();

	useEffect(() => {
		(async () => {
			dispatch(fetchSearchPending());
			const { Search: searchResult } = await getMovies('undefined');
			dispatch(fetchSearchSuccess(searchResult));
		})();
	}, []);

	return (
		<div>
			{loading ? (
				<h1>LOADING</h1>
			) : (
				<>
					<form>
						<input placeholder='search movies' />
						<button>search</button>
					</form>
					<div>
						{movies.map(movie => (
							<div key={movie.imdbID}>
								<img src={movie.Poster} alt='movie' />
								<h1>{movie.Title}</h1>
								<p>{movie.Year}</p>
							</div>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default MovieList;
