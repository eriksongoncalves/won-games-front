import { render, screen } from 'utils/test-utils';

import CartButton from '.';

describe('<CartButton />', () => {
  it('should render button to add and call the method if clicked', () => {
    render(<CartButton />);

    expect(screen.getByLabelText(/add to cart/i)).toBeInTheDocument();
  });

  it('should render a button with add to wishlist text', () => {
    render(<CartButton hasText />);

    expect(screen.getByText(/add to cart/i)).toBeInTheDocument();
  });
});
