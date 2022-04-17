import ThemeType from 'helpers/types/ThemeType';
import styled from 'styled-components';

export const TextContainer = styled.div<ThemeType>`
	position: absolute;
	width: fit-content;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 100px;
	font-family: 'Roboto Mono', monospace;
	font-weight: 400;
	text-transform: uppercase;
	z-index: 3;

	& * {
		color: ${(props) =>
		props.darkMode ? 'white' : 'black'};
	}
`;

export const HeroSection = styled.section`
	position: fixed;
	z-index: 2;
	top: 0;
	left: 0;
`;

export const RelativeContainer = styled.div`
	position: relative;
	height: 100vh;
	width: 100vw;
`;

export const Space = styled.section`
	width: 100vw;
	height: 100vh;
`;

export const Button = styled.button<ThemeType>`
	font-size: 30px;
	color: ${(props) =>
		props.darkMode ? 'white' : 'black'};
	font-family: 'Roboto Mono', monospace;
	font-weight: bold;
	text-transform: uppercase;
	position: absolute;
	width: 180px;
	height: 180px;
	cursor: pointer;
	background-color: ${(props) =>
		props.darkMode ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)'};
	top: 50%;
	left: 50%;
	border-radius: 50%;
	transform: translate(-50%, -50%);
	z-index: 3;
	transition: 0.4s;
	animation: ripple 2600ms infinite;
	border: none;
	transform-origin: center;

	&:hover {
		background-color: ${(props) =>
			props.darkMode ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.6)'};
		transform: translate(-50%, -50%) scale(1.2);
	}

	box-shadow: ${props => !props.darkMode ? `
		0 0 0 0px transparent, 0 0 0 0px rgba(0, 0, 0, 0.1),
		0 0 0 0px transparent, 0 0 0 0px rgba(0, 0, 0, 0.2),
		0 0 0 0px transparent, 0 0 0 0px rgba(0, 0, 0, 0.4),
		0 0 0 0px transparent, 0 0 0 0px rgba(0, 0, 0, 0.6);
	` : `
		0 0 0 0px transparent, 0 0 0 0px rgba(255, 255, 255, 0.1),
		0 0 0 0px transparent, 0 0 0 0px rgba(255, 255, 255, 0.2),
		0 0 0 0px transparent, 0 0 0 0px rgba(255, 255, 255, 0.4),
		0 0 0 0px transparent, 0 0 0 0px rgba(255, 255, 255, 0.6);
	}
	`};	

	@keyframes ripple {
		100% {
			box-shadow: 0 0 0 15px transparent, 0 0 0 17px transparent,
				0 0 0 40px transparent, 0 0 0 42px transparent,
				0 0 0 90px transparent, 0 0 0 92px transparent,
				0 0 0 125px transparent, 0 0 0 127px transparent;
		}
	}
`;
