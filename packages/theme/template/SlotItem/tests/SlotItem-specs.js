import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import SlotItem from '../SlotItem';

describe('SlotItem', () => {
	test('Should render a SlotItem component', () => {
		render(<SlotItem data-testid="slotItem" />);

		const element = screen.getByTestId('slotItem');
		expect(element).toBeInTheDocument();
	});

	test('Should render a SlotItem component and his child', () => {
		const msg = 'Hello SlotItem!';
		render(<SlotItem>Hello SlotItem!</SlotItem>);

		const expected = 'DIV';
		const actual = screen.getByText(msg).nodeName;

		expect(actual).toBe(expected);
	});
});

