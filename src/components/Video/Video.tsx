import Source from 'components/Source';
import { checkChildType } from 'helpers/functions/checkChildType';
import ChildrenType from 'helpers/types/ChildrenType';
import React, { FC, useEffect } from 'react';

type IProps = {
	children: ChildrenType;
};

const Video: FC<IProps> = ({ children }) => {
	useEffect(() => {
		checkChildType(children, Video.name, Source.name);
	}, []);

	return <div>{children}</div>;
};

export default Video;
