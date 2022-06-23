import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import RadioItem from '../RadioItem';

describe('RadioItem Specs', () => {

	test('should support a custom icon', () => {
		render(<RadioItem icon="check" selected>Hello RadioItem</RadioItem>);
		const radioItemElement = screen.getByRole('checkbox');

		const expected = 'Hello RadioItem';
		const actual = radioItemElement.children.item(1).textContent;

		expect(actual).toBe(expected);
	});

	test('should render `children`', () => {
		render(<RadioItem>Hello RadioItem</RadioItem>);

		const actual = screen.getByText('Hello RadioItem');

		expect(actual).toBeInTheDocument();
	});


	test('should render correct icon when not selected', () => {
		render(<RadioItem>Hello RadioItem</RadioItem>);

		const expected = 'false';
		const radioItem = screen.getByRole('checkbox');

		expect(radioItem).toHaveAttribute('aria-checked', expected);
	});

	test('should render correct icon when selected', () => {
		render(<RadioItem selected>Hello RadioItem</RadioItem>);

		const expected = 'true';
		const radioItem = screen.getByRole('checkbox');

		expect(radioItem).toHaveAttribute('aria-checked', expected);
	});
});
