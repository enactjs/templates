import '@testing-library/jest-dom';
import {fireEvent, render, screen} from '@testing-library/react';

import CheckboxItem, {CheckboxItemBase} from '../CheckboxItem';

describe('CheckboxItem Specs', () => {

	test('should have correct text', () => {
		render(<CheckboxItemBase>Hello CheckboxItem</CheckboxItemBase>);

		const element = screen.getByText(/Hello CheckboxItem/i);

		expect(element).toBeInTheDocument();
	});

	test('should check with click', () => {
		render(<CheckboxItem>Hello CheckboxItem</CheckboxItem>);

		const checkboxItem = screen.getAllByRole('checkbox');
		const expected = 'true';

		fireEvent.click(checkboxItem[0]);

		expect(checkboxItem[0]).toHaveAttribute('aria-checked', expected);

	});

	test('should uncheck with 2 click', () => {
		render(<CheckboxItem>Hello CheckboxItem</CheckboxItem>);

		const checkboxItem = screen.getAllByRole('checkbox');
		const expected = 'false';

		fireEvent.click(checkboxItem[0]);
		fireEvent.click(checkboxItem[0]);

		expect(checkboxItem[0]).toHaveAttribute('aria-checked', expected);
	});
});
