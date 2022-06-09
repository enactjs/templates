import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import Heading from '../../Heading/Heading';
import {Panel} from '../Panel';
import {Panels} from '../Panels';

describe('Panels Specs', () => {

	test('Should render the Panels component', () => {
		render(<Panels data-testid="panel" index={0} />);

		const element = screen.getByTestId('panel');

		expect(element).toBeInTheDocument();
	});

	test('Should render Panels with Panel', () => {
		render(
			<Panels>
				<Panel data-testid="panel" />
			</Panels>
		);

		const panelElement = screen.getByTestId('panel');

		expect(panelElement).toHaveClass('panel');
		expect(panelElement).toBeInTheDocument();
	});

	test('Should render Panels with a header', () => {
		const header = <Heading />;
		render(
			<Panels data-testid="panel" index={0}>
				<Panel header={header} />
			</Panels>
		);

		const expectedClass = 'panels';
		const element = screen.getByTestId('panel');

		expect(element).toHaveClass(expectedClass);
	});
});
