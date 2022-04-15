import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import React from 'react';

import Source from './Source';
import Video from './Video';

Object.defineProperty(HTMLMediaElement.prototype, 'muted', {
	set: () => {},
});

describe('Video component', function () {
	it('should have one Source on correct screen size', async function () {
		const container = render(
			<Video>
				<Source src="test-video" mediaMaxWidth={9000} mediaMinWidth={0} />
			</Video>,
		);

		const source = container.baseElement.querySelectorAll('source');

		expect(source.length).toBe(1);
	});

	it('should have noone Source on incorrect screen size', async function () {
		const container = render(
			<Video>
				<Source src="test-video" mediaMaxWidth={9000} mediaMinWidth={9000} />
			</Video>,
		);

		const source = container.baseElement.querySelectorAll('source');

		expect(source.length).toBe(0);
	});

	it('should have one Source with Multiple correct Sources', async function () {
		const container = render(
			<Video>
				<Source src="test-video" mediaMaxWidth={9000} mediaMinWidth={1201} />
				<Source src="test-video" mediaMaxWidth={1200} mediaMinWidth={0} />
			</Video>,
		);

		const source = container.baseElement.querySelectorAll('source');

		expect(source.length).toBe(1);
	});
});
