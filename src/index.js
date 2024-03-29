import React from 'react';
import ReactDOM from 'react-dom/client';
import reset from 'styled-reset';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme } from 'styles/theme';
import AppRoute from './route';
import 'assets/font/stylesheet.css';

const GlobalStyle = createGlobalStyle`
	${reset}
	html {
		margin: 0;
		font-family: 'Mier B', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	body {
    margin: 0 auto;
    width: 100%;
    min-height: 100vh;
    font-size: 1rem;
    font-weight: 400;
	font-family: "Mier Book";
    letter-spacing: 0.5px;
    line-height: 1.5;
    text-align: left;
    /* background-color: #f9f9f9; */
	background-color: ${(props) => props.theme.colors.white};
	}
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<AppRoute />
		</ThemeProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
