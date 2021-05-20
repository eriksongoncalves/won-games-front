import { Favorite } from '@styled-icons/material-outlined';

import Button, { ButtonProps } from 'components/Button';

type WishlistButtonProps = {
  hasText?: boolean;
} & Pick<ButtonProps, 'size'>;

const WishlistButton = ({ hasText, size = 'small' }: WishlistButtonProps) => {
  const ButtonText = 'Add to Wishlist';

  return (
    <Button
      icon={<Favorite aria-label={ButtonText} />}
      size={size}
      style={{ filter: 'none' }}
    >
      {hasText && ButtonText}
    </Button>
  );
};

export default WishlistButton;
