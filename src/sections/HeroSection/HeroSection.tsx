import { ColorMode } from 'App';
import Video from 'components/Video';
import Source from 'components/Video/Source';
import React, { FC, useContext, useEffect, useState } from 'react';
import keyboardSound from 'resources/sounds/keyboard-sound.mp3';
import bigVideoBlack from 'resources/videos/big-video-black.mp4';
import bigVideoWhite from 'resources/videos/big-video-white.mp4';
import smallVideoBlack from 'resources/videos/small-video-black.mp4';
import smallVideoWhite from 'resources/videos/small-video-white.mp4';
import TypeIt from 'typeit-react';

import * as Styled from './styles';

const HeroSection: FC = () => {
	const [isTextShown, setIsTextShown] = useState<boolean>(false);
	const [sound] = useState<HTMLAudioElement>(new Audio(keyboardSound));
	const [hoverCount, setHoverCount] = useState<number>(2);
	const { darkMode } = useContext(ColorMode);

	let timeoutId1: number, timeoutId2: number;

	function onSoundButtonClick(): void {
		timeoutId1 = setTimeout(() => {
			sound.pause();
			timeoutId2 = setTimeout(() => {
				sound.play();
			}, 2000);
		}, 5350);

		setIsTextShown(true);
		sound.loop = true;
		sound.play();
	}

	function onSoundButtonHover(event: React.MouseEvent<Element, MouseEvent>): void {
		if (hoverCount === 0) return;

		const element = event.target as HTMLButtonElement;

		if (element) {
			element.style.transition = '0';
			element.style.top = 10 + Math.random() * 80 + '%';
			element.style.left = 10 + Math.random() * 80 + '%';
			element.style.transition = '0.4s';
			setHoverCount((count) => count - 1);
		}
	}

	useEffect(() => {
		() => {
			clearTimeout(timeoutId1);
			clearTimeout(timeoutId2);
			sound.pause();
		};
	}, []);

	return (
		<>
			<Styled.Space />
			<Styled.HeroSection tabIndex={0}>
				<Styled.RelativeContainer darkMode={darkMode}>
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
				
					<Video>
						<Source
							src={bigVideoWhite}
							mediaMaxWidth={3000}
							mediaMinWidth={1201}
						/>
						<Source
							src={smallVideoWhite}
							mediaMaxWidth={1200}
							mediaMinWidth={300}
						/>
					</Video>

					{!isTextShown && (
						<Styled.Button
							darkMode={darkMode}
							onMouseEnter={onSoundButtonHover}
							onClick={onSoundButtonClick}
						>
							Click me
						</Styled.Button>
					)}
					<Styled.TextContainer darkMode={darkMode}>
						{isTextShown && (
							<TypeIt
								getBeforeInit={(instance) => {
									instance
										.type('Hi! Kixill')
										.pause(450)
										.move(-3)
										.pause(350)
										.delete(1)
										.pause(420)
										.type('r')
										.pause(450)
										.move(3)
										.pause(300)
										.type(' Here.')
										.pause(2100)
										.delete(20)
										.type('Ni to')
										.pause(100)
										.type(' feet you!')
										.pause(250)
										.move(-13)
										.type('ce')
										.move(5)
										.pause(350)
										.delete(1)
										.type('m')
										.move(15);
									return instance;
								}}
								options={{
									afterComplete: () => {
										sound.pause();
									},
									waitUntilVisible: true,
								}}
							/>
						)}
					</Styled.TextContainer>
				</Styled.RelativeContainer>
			</Styled.HeroSection>
		</>
	);
};

export default HeroSection;
