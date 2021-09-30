import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { toggle_darkTheme } from '../store/action/action';

const ContainerStyles = styled.div`
	display: flex;
	width: 100vw;
	height: 100vh;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: ${props =>
		props.darkMode === true ? 'black' : 'whitesmoke'};
	color: #f4f4f4;
	gap: 15px;
`;

const Header = styled.h1`
	color: ${props => (props.darkMode ? 'white' : 'black')};
`;

const Container = () => {
	const darkReducer = useSelector(state => state.darkReducer);
	const dispatch = useDispatch();

	return (
		<ContainerStyles darkMode={darkReducer}>
			<Header darkMode={darkReducer}>
				This is {darkReducer ? 'dark' : 'light'}
			</Header>

			<button onClick={() => dispatch(toggle_darkTheme())}>push me</button>
		</ContainerStyles>
	);
};

export default Container;
