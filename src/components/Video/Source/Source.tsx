import React, { FC } from 'react';

import * as Styled from './styles';

interface IProps {
	src: string;
	mediaMaxWidth: number;
	mediaMinWidth: number;
}

const Source: FC<IProps> = ({ src, mediaMaxWidth, mediaMinWidth }) => {
	const isFitToScreen =
		window.innerWidth > mediaMinWidth && window.innerWidth < mediaMaxWidth;

	return isFitToScreen ? <Styled.Source src={src} /> : <></>;
};

export default Source;
