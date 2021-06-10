import * as S from './styles';
import Base from 'templates/Base';
import { Container, BannerSlider, Showcase } from 'components';
import { BannerProps } from 'components/Banner';
import { GameCardProps } from 'components/GameCard';
import { HighlightProps } from 'components/Highlight';

export type HomeTemplateProps = {
  banners: BannerProps[];
  newGames: GameCardProps[];
  newGamesTitle: string;
  mostPopularHighlight: HighlightProps;
  mostPopularGamesTitle: string;
  mostPopularGames: GameCardProps[];
  upcommingGamesTitle: string;
  upcommingGames: GameCardProps[];
  upcommingHighlight: HighlightProps;
  freeGames: GameCardProps[];
  freeGamesTitle: string;
  freeHighlight: HighlightProps;
};

const Home = ({
  banners,
  newGames,
  newGamesTitle,
  mostPopularHighlight,
  mostPopularGamesTitle,
  mostPopularGames,
  upcommingGames,
  upcommingGamesTitle,
  upcommingHighlight,
  freeGames,
  freeGamesTitle,
  freeHighlight
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title={newGamesTitle} games={newGames} color="black" />
    </S.SectionNews>

    <Showcase
      title={mostPopularGamesTitle}
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />

    <Showcase
      title={upcommingGamesTitle}
      games={upcommingGames}
      highlight={upcommingHighlight}
    />

    <Showcase
      title={freeGamesTitle}
      highlight={freeHighlight}
      games={freeGames}
    />
  </Base>
);

export default Home;
