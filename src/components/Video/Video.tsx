import Source from 'components/Video/Source';
import { checkChildType } from 'helpers/functions/checkChildType';
import ChildrenType from 'helpers/types/ChildrenType';
import React, { FC, useEffect } from 'react';

import * as Styled from './styles';

type IProps = {
	children: ChildrenType;
};

const Video: FC<IProps> = ({ children }) => {
	useEffect(() => {
		checkChildType(children, Video.name, Source.name);
	}, []);

	return (
		<Styled.Video autoPlay muted>
			{children}
		</Styled.Video>
	);
};

export default Video;
