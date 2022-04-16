import { Context } from 'App';
import React, { FC, useContext } from 'react';
import DarkIcon from 'resources/images/darkMode.svg?component';
import LightIcon from 'resources/images/lightMode.svg?component';

import * as Styled from './styles';

const Header: FC = () => {
	const { darkMode, toggle } = useContext(Context);

	return (
		<Styled.Header darkMode={darkMode}>
			<Styled.HeaderContainer>
				<Styled.Leftside>
					<Styled.Link>Home</Styled.Link>
					<Styled.Link>PX Switch</Styled.Link>
					<Styled.Link>Interview FAQ</Styled.Link>
				</Styled.Leftside>

				<Styled.Rightside>
					<Styled.Link>Home</Styled.Link>
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
