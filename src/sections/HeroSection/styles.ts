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
