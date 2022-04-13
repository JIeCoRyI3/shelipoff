import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

describe('App Component', function () {
	it('should have hello world message', async function () {
		render(<App />);
		expect(await screen.findByText('Hello world')).toBeDefined();
	});
});
