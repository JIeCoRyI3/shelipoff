import Video from 'components/Video';
import Source from 'components/Video/Source';
import React, { FC } from 'react';
import bigVideoBlack from 'resources/videos/big-video-black.mp4';
import smallVideoBlack from 'resources/videos/small-video-black.mp4';
import TypeIt from 'typeit-react';

import * as Styled from './styles';

const HeroSection: FC = () => {
	return (
		<>
			<Styled.Space />
			<Styled.HeroSection>
				<Styled.RelativeContainer>
					<Video>
						<Source
							src={bigVideoBlack}
							mediaMaxWidth={3000}
							mediaMinWidth={1201}
						/>
						<Source
							src={smallVideoBlack}
							mediaMaxWidth={1200}
							mediaMinWidth={300}
						/>
					</Video>

					<Styled.TextContainer>
						<TypeIt
							options={{
								afterComplete: () => {
									console.log('Complete');
								},
							}}
						>
							Hi! Kirill Here.
						</TypeIt>
					</Styled.TextContainer>
				</Styled.RelativeContainer>
			</Styled.HeroSection>
		</>
	);
};

export default HeroSection;
