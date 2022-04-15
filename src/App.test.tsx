import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import React from 'react';
import App from './App';
import 'jest-styled-components'

jest.mock('typeit-react', () => ({ __esModule: true, default: () => 'mocked TypeIt' }));

Object.defineProperty(HTMLMediaElement.prototype, 'muted', {
	set: () => {},
});

describe('App Component', function () {
	it('should match snapshot', async function () {
		const container = render(<App />);
		expect(container).toMatchSnapshot();
	});
});
