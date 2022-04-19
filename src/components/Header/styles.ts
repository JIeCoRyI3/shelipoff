import ThemeType from 'helpers/types/ThemeType';
import styled from 'styled-components';

export const Link = styled.a`
	font-family: 'Fredoka One', cursive;
	font-size: 20px;
	margin-right: 80px;
	text-transform: uppercase;
	transition: 0.4s;
	cursor: pointer;
`;

export const Volume = styled.div`
	color: white;
	font-size: 25px;
	transition: 0.4s;
	margin-right: 10px;
	margin-top: -2px;
	cursor: pointer;
`;

export const MenuToggler = styled.button`
	border: none;
	background-color: transparent;
	display: none;
	font-size: 32px;
	margin-top: -10px;
	font-weight: bold;
	transition: 0.4s;

	@media screen and (max-width: 970px) {
		display: block;
	}
`;

export const CloseButton = styled.button`
	border: none;
	background-color: transparent;
	align-self: flex-end;
	margin-bottom: -32px;
	margin-top: -12px;
	display: none;
	font-size: 32px;
`;

export const Header = styled.header<ThemeType>`
	position: fixed;
	width: 100vw;
	height: 40px;
	z-index: 5;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px 0;
	transition: 0.4s;
	background-color: ${(props) =>
		props.darkMode ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)'};

	& *:is(${Link}, ${MenuToggler}, ${Volume}) {
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

export const Leftside = styled.nav<ThemeType & { left: number }>`
	display: flex;
	align-items: center;
	transition: 0.4s;

	@media screen and (max-width: 970px) {
		position: fixed;
		top: 0;
		width: 100vw;
		height: 100vh;
		left: ${(props) => props.left + 'vw'};
		flex-direction: column;
		background-color: ${(props) => (props.darkMode ? 'black' : 'white')};
		z-index: 99;
		align-items: flex-start;
		padding: 40px;
		box-sizing: border-box;

		& ${Link} {
			font-size: 26px;
			margin-bottom: 20px;
		}

		& ${CloseButton} {
			display: block;
			color: ${(props) => (props.darkMode ? 'white' : 'black')};
		}
	}
`;

export const Rightside = styled.nav`
	display: flex;
	align-items: center;
	height: 100%;
`;

export const SVG = styled.div<ThemeType>`
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
