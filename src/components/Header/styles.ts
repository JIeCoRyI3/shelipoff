import styled from 'styled-components';

export const Link = styled.a`
	font-family: 'Fredoka One', cursive;
	font-size: 20px;
	margin-right: 80px;
	text-transform: uppercase;
	transition: 0.4s;
	cursor: pointer;
`;

export const Header = styled.header<{ darkMode: boolean }>`
	position: fixed;
	width: 100vw;
	height: 40px;
	z-index: 5;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	padding: 20px 0;
	transition: 0.4s;
	background-color: ${(props) =>
		props.darkMode ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)'};

	& ${Link} {
		color: ${(props) => (props.darkMode ? 'white' : 'black')};
	}
`;

export const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 80%;
	height: 100%;
`;

export const Leftside = styled.nav`
	display: flex;
`;

export const Rightside = styled.nav`
	display: flex;
	align-items: center;
	height: 100%;
`;

export const SVG = styled.div<{ darkMode: boolean }>`
	display: flex;
	width: 50px;
	height: 100%;
	overflow: hidden;

	& > * {
		cursor: pointer;
		transition: 0.4s;
	}

	& > *:nth-child(1) {
		transform: scale(${(props) => (!props.darkMode ? 0.6 : 0.2)}) translateY(-77%);
	}

	& > *:nth-child(2) {
		margin-left: -100%;
		transform: scale(${(props) => (props.darkMode ? 0.6 : 0.2)}) translateY(-77%);
	}
`;
