import React, { FC } from 'react';
import HeroSection from 'sections/HeroSection/HeroSection';

import * as Styled from './styles';

const App: FC = () => {
	return (
		<Styled.App>
			<HeroSection />
		</Styled.App>
	);
};

export default App;
