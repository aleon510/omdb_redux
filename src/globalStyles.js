import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
}
button {
  height: 50px;
	width: 130px;
	border-radius: 10px;
	font-weight: 300;
	background-color: white;
}
`;
export default GlobalStyle;
