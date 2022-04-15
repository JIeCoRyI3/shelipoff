import React, { FC } from 'react';

interface IProps {
	src: string;
	width: string;
}

const Source: FC<IProps> = ({ src, width }) => {
	return <div>{src + ' ' + width}</div>;
};

export default Source;
