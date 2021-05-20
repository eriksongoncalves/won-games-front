import { AddShoppingCart } from '@styled-icons/material-outlined';

import Button, { ButtonProps } from 'components/Button';

type CartButtonProps = {
  hasText?: boolean;
} & Pick<ButtonProps, 'size'>;

const CartButton = ({ size = 'small', hasText = false }: CartButtonProps) => {
  const ButtonText = 'Add to cart';

  return (
    <Button icon={<AddShoppingCart />} size={size} aria-label={ButtonText}>
      {hasText && ButtonText}
    </Button>
  );
};

export default CartButton;
