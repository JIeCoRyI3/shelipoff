import Home from 'pages/Home';
import React, { createContext, FC, useState } from 'react';

import * as Styled from './styles';

export const ColorMode = createContext({ darkMode: true, toggle: () => {} });

const App: FC = () => {
	const [darkMode, setDarkMode] = useState<boolean>(true);

	return (
		<ColorMode.Provider
			value={{
				darkMode,
				toggle: () => setDarkMode((d) => !d),
			}}
		>
			<Styled.App darkMode={darkMode}>
				<Home />
			</Styled.App>
		</ColorMode.Provider>
	);
};

export default App;
