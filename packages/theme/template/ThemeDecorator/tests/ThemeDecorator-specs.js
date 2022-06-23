import Spotlight from '@enact/spotlight';
import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import ThemeDecorator from '../';

describe('ThemeDecorator', () => {
	const AppRoot = (props) => <div data-app {...props} />;

	test('should add base classes to wrapped component', () => {
		const config = {ri: false, i18n: false, spotlight: false, float: false, overlay: false};
		const App = ThemeDecorator(config, AppRoot);
		render(<App data-testid="app" />);

		Spotlight.terminate();

		const appRoot = screen.getByTestId('app');

		expect(appRoot).toHaveClass('my-skin');
	});

	test('should add author classes to wrapped component', () => {
		const config = {ri: false, i18n: false, spotlight: false, float: false, overlay: false};
		const App = ThemeDecorator(config, AppRoot);

		render(<App className="author-class" data-testid="app" />);

		Spotlight.terminate();

		const appRoot = screen.getByTestId('app');

		expect(appRoot).toHaveClass('author-class');
	});

	test('should not add skin classname to wrapped component when float is enabled', () => {
		const config = {ri: false, i18n: false, spotlight: false, float: true, overlay: false};
		const App = ThemeDecorator(config, AppRoot);

		render(<App data-testid="app" />);

		Spotlight.terminate();

		const appRoot = screen.getByTestId('app');

		expect(appRoot).not.toHaveClass('neutral');
	});

	test('should not add .bg class to wrapped component when overlay is enabled', () => {
		const config = {ri: false, i18n: false, spotlight: false, float: false, overlay: true};
		const App = ThemeDecorator(config, AppRoot);

		render(<App data-testid="app" />);

		Spotlight.terminate();

		const appRoot = screen.getByTestId('app');

		expect(appRoot).not.toHaveClass('bg');
	});

});
