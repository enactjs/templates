import {fireEvent, render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ToggleIcon from '../ToggleIcon';

const tap = (node) => {
	fireEvent.mouseDown(node);
	fireEvent.mouseUp(node);
};

describe('ToggleIcon Specs', () => {
	test('should call onToggle when tapped', () => {
		const handleToggle = jest.fn();
		render(<ToggleIcon onToggle={handleToggle}>star</ToggleIcon>);
		const toggleIcon = screen.getByText('star');

		tap(toggleIcon);

		const expected = 1;

		expect(handleToggle).toHaveBeenCalledTimes(expected);
	});

	test('should call onClick when clicked', () => {
		const handleClick = jest.fn();
		render(<ToggleIcon onClick={handleClick}>star</ToggleIcon>);
		const toggleIcon = screen.getByText('star');

		userEvent.click(toggleIcon);

		const expected = 1;

		expect(handleClick).toHaveBeenCalledTimes(expected);
	});

	test('should call onTap when tapped', () => {
		const handleTap = jest.fn();
		render(<ToggleIcon onTap={handleTap}>star</ToggleIcon>);
		const toggleIcon = screen.getByText('star');

		tap(toggleIcon);

		const expected = 1;

		expect(handleTap).toHaveBeenCalledTimes(expected);
	});

	test('should call both onToggle and onTap when tapped', () => {
		const handleBoth = jest.fn();
		render(<ToggleIcon onTap={handleBoth} onToggle={handleBoth}>star</ToggleIcon>);
		const toggleIcon = screen.getByText('star');

		tap(toggleIcon);

		const expected = 2;

		expect(handleBoth).toHaveBeenCalledTimes(expected);
	});

});
