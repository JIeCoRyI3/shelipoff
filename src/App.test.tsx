import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import React from 'react';

import App from './App';

Object.defineProperty(HTMLMediaElement.prototype, 'muted', {
	set: () => {},
});

describe('App Component', function () {
	it('should match snapshot', async function () {
		const container = render(<App />);
		expect(container).toMatchSnapshot();
	});
});
