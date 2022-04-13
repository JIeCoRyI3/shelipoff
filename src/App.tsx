import Source from 'components/Source';
import Video from 'components/Video';
import React, { FC } from 'react';

import * as Styled from './styles';

const App: FC = () => {
	return (
		<Styled.App>
			Hello world
			<Video>
				<Source src="asdas" width="sadasd">
					Test
				</Source>
			</Video>
		</Styled.App>
	);
};

export default App;
