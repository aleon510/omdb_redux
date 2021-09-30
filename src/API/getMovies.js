const apikey = process.env.REACT_APP_API_KEY;

export const getMovies = async search => {
	const url = await fetch(
		`http://www.omdbapi.com/?apikey=${apikey}&s=${search}`
	);

	const data = await url.json();
	return data;
};
