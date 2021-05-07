import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Main from '.';

describe('<Main />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Main />);

    expect(
      screen.getByRole('heading', { name: /Hello World/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a Main', () => {
    const { container } = renderWithTheme(<Main />);

    expect(container.firstChild).toHaveStyle({ backgroundColor: '#06092b' });
  });
});
