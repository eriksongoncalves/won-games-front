import Base from 'templates/Base';

import Heading from 'components/Heading';
import Showcase from 'components/Showcase';
import { Container } from 'components/Container';
import { HighlightProps } from 'components/Highlight';
import GameCard, { GameCardProps } from 'components/GameCard';
import { Grid } from 'components/Grid';
import { Divider } from 'components/Divider';
import Empty from 'components/Empty';

export type WishlistTemplateProps = {
  recommendedGames: GameCardProps[];
  recommendedHighlight: HighlightProps;
  games?: GameCardProps[];
};

const Wishlist = ({
  recommendedGames,
  recommendedHighlight,
  games = []
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      {games.length ? (
        <Grid>
          {games?.map((game, index) => (
            <GameCard key={`wishlist-${index}`} {...game} />
          ))}
        </Grid>
      ) : (
        <Empty
          title="Your wishlist is empty"
          description="Games added to your wishlist will appear here"
          hasLink
        />
      )}
      <Divider />
    </Container>

    <Showcase
      title="You may like these games"
      games={recommendedGames}
      highlight={recommendedHighlight}
    />
  </Base>
);

export default Wishlist;
