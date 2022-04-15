import styled from 'styled-components';

export const TextContainer = styled.div`
	position: absolute;
	width: fit-content;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 90px;
	font-family: 'BioRhyme', serif;
	font-family: 'Stint Ultra Expanded', cursive;
	font-weight: bold;
	text-transform: uppercase;
	color: white;
	z-index: 3;
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

export const Button = styled.button`
	font-size: 20px;
	color: white;
	font-family: 'BioRhyme', serif;
	font-family: 'Stint Ultra Expanded', cursive;
	font-weight: bold;
	text-transform: uppercase;
	position: absolute;
	width: 180px;
	height: 180px;
	cursor: pointer;
	background-color: rgba(0, 0, 0, 0.2);
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
		background-color: rgba(0, 0, 0, 0.6);
		transform: translate(-50%, -50%) scale(1.2);
	}

	@keyframes ripple {
		0% {
			box-shadow: 0 0 0 0px transparent, 0 0 0 0px rgba(255, 255, 255, 0.1),
				0 0 0 0px transparent, 0 0 0 0px rgba(255, 255, 255, 0.2),
				0 0 0 0px transparent, 0 0 0 0px rgba(255, 255, 255, 0.4),
				0 0 0 0px transparent, 0 0 0 0px rgba(255, 255, 255, 0.6);
		}
		100% {
			box-shadow: 0 0 0 15px transparent, 0 0 0 17px rgba(255, 255, 255, 0),
				0 0 0 40px transparent, 0 0 0 42px rgba(255, 255, 255, 0),
				0 0 0 90px transparent, 0 0 0 92px rgba(255, 255, 255, 0),
				0 0 0 125px transparent, 0 0 0 127px rgba(255, 255, 255, 0);
		}
	}
`;
