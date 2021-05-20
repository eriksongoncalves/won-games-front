import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import WishlistButton from '.';

describe('<WishlistButton />', () => {
  it('hould render a button to add to wishlist', () => {
    renderWithTheme(<WishlistButton />);

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument();
  });

  it('should render a button with add to wishlist text', () => {
    renderWithTheme(<WishlistButton hasText />);

    expect(screen.getByText(/add to wishlist/i)).toBeInTheDocument();
  });
});
