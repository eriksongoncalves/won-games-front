import { render, screen } from 'utils/test-utils';
import WishlistButton from '.';

describe('<WishlistButton />', () => {
  it('hould render a button to add to wishlist', () => {
    render(<WishlistButton />);

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument();
  });

  it('should render a button with add to wishlist text', () => {
    render(<WishlistButton hasText />);

    expect(screen.getByText(/add to wishlist/i)).toBeInTheDocument();
  });
});
