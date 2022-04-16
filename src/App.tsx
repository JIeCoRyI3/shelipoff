import Home from 'pages/Home';
import React, { createContext, FC, useState } from 'react';

import * as Styled from './styles';

export const Context = createContext({ darkMode: true, toggle: () => {} });

const App: FC = () => {
	const [darkMode, setDarkMode] = useState<boolean>(true);

	return (
		<Context.Provider
			value={{
				darkMode,
				toggle: () => setDarkMode((d) => !d),
			}}
		>
			<Styled.App>
				<Home />
			</Styled.App>
		</Context.Provider>
	);
};

export default App;
