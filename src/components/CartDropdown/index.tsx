import { CartIcon, CartList, Dropdown } from 'components';

import * as S from './styles';

const CartDropdown = () => {
  return (
    <S.Wrapper>
      <Dropdown title={<CartIcon />}>
        <CartList hasButton />
      </Dropdown>
    </S.Wrapper>
  );
};

export default CartDropdown;
