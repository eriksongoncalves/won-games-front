import * as S from './styles';
import {
  Container,
  Heading,
  Showcase,
  PaymentOptions,
  CartList
} from 'components';
import { GameCardProps } from 'components/GameCard';
import { HighlightProps } from 'components/Highlight';
import { PaymentOptionsProps } from 'components/PaymentOptions';
import { CartListProps } from 'components/CartList';
import Base from 'templates/Base';

export type CartProps = {
  recommendedTitle: string;
  recommendedGames: GameCardProps[];
  recommendedHighlight: HighlightProps;
} & CartListProps &
  Pick<PaymentOptionsProps, 'cards'>;

const Cart = ({
  recommendedTitle,
  recommendedGames,
  recommendedHighlight,
  cards
}: CartProps) => {
  const handlePayment = () => ({});

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My cart
        </Heading>
        <S.Content>
          <CartList />

          <PaymentOptions cards={cards} handlePayment={handlePayment} />
        </S.Content>
      </Container>

      <Showcase
        title={recommendedTitle}
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  );
};

export default Cart;
