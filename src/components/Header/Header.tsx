import { faVolumeHigh, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ColorMode } from 'App';
import React, { FC, useContext, useState } from 'react';
import DarkIcon from 'resources/images/darkMode.svg?component';
import LightIcon from 'resources/images/lightMode.svg?component';

import * as Styled from './styles';

const Header: FC = () => {
	const [volume, setVolume] = useState<boolean>(true);
	const { darkMode, toggle } = useContext(ColorMode);
	const [toggleMobileMenu, setToggleMobileMenu] = useState<boolean>(false);

	function toggleMenu() {
		setToggleMobileMenu((o) => !o);
	}

	return (
		<Styled.Header darkMode={darkMode}>
			<Styled.HeaderContainer>
				<Styled.MenuToggler onClick={toggleMenu}>☰</Styled.MenuToggler>

				<Styled.Leftside darkMode={darkMode} left={toggleMobileMenu ? 0 : -100}>
					<Styled.CloseButton onClick={toggleMenu}>🗙</Styled.CloseButton>
					<Styled.Link>Home</Styled.Link>
					<Styled.Link>PX Switch</Styled.Link>
					<Styled.Link>Interview FAQ</Styled.Link>
				</Styled.Leftside>

				<Styled.Rightside>
					<Styled.Volume onClick={() => setVolume((o) => !o)}>
						<FontAwesomeIcon icon={volume ? faVolumeHigh : faVolumeMute} />
					</Styled.Volume>
					<Styled.SVG darkMode={darkMode}>
						<DarkIcon onClick={() => toggle()} />
						<LightIcon onClick={() => toggle()} />
					</Styled.SVG>
				</Styled.Rightside>
			</Styled.HeaderContainer>
		</Styled.Header>
	);
};

export default Header;
