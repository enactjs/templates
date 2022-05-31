import '@testing-library/jest-dom';
import {fireEvent, render, screen} from '@testing-library/react';

import Checkbox, {CheckboxBase} from '../Checkbox';

describe('CheckboxItem Specs', () => {

	test('should not include the selected class when not selected', () => {
		render(<CheckboxBase />);
		const checkboxElement = screen.getByRole('checkbox');

		expect(checkboxElement).not.toHaveClass('selected');
	});

	test('should include the selected class when selected', () => {
		render(<CheckboxBase selected/>);
		const checkboxElement = screen.getByRole('checkbox');

		expect(checkboxElement).toHaveClass('selected');
	});


	test('should check the checkbox with one click', () => {
		render(<Checkbox data-testid="checkbox" />);

		const checkboxItem = screen.getByTestId('checkbox');
		const expected = 'selected';

		fireEvent.click(checkboxItem);

		expect(checkboxItem).toHaveClass(expected);
	});

	test('should uncheck the checkbox with two clicks', () => {
		render(<Checkbox data-testid="checkbox" />);

		const actual = screen.getByTestId('checkbox');
		const expected = 'selected';

		fireEvent.click(actual);
		fireEvent.click(actual);

		expect(actual).not.toHaveClass(expected);
	});
});
