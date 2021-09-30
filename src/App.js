import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Container from './Components/Container';
import MovieList from './Components/MovieList';
import GlobalStyle from './globalStyles';

function App() {
	const loading = useSelector(state => state.search.pending);

	return (
		<>
			<GlobalStyle />
			<MovieList />
			<Container />
		</>
	);
}

export default App;
