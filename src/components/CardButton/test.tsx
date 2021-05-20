import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import CartButton from '.';

describe('<CartButton />', () => {
  it('should render button to add and call the method if clicked', () => {
    renderWithTheme(<CartButton />);

    expect(screen.getByLabelText(/add to cart/i)).toBeInTheDocument();
  });

  it('should render a button with add to wishlist text', () => {
    renderWithTheme(<CartButton hasText />);

    expect(screen.getByText(/add to cart/i)).toBeInTheDocument();
  });
});
