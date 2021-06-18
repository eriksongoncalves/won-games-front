import * as S from './styles';
import Base from 'templates/Base';
import { Container, BannerSlider, Showcase } from 'components';
import { BannerProps } from 'components/Banner';
import { GameCardProps } from 'components/GameCard';
import { HighlightProps } from 'components/Highlight';

export type HomeTemplateProps = {
  banners: BannerProps[];
  newGamesTitle: string;
  newGames: GameCardProps[];
  mostPopularGamesTitle: string;
  mostPopularHighlight: HighlightProps;
  mostPopularGames: GameCardProps[];
  upcommingGamesTitle: string;
  upcommingGames: GameCardProps[];
  upcommingHighlight: HighlightProps;
  freeGamesTitle: string;
  freeGames: GameCardProps[];
  freeHighlight: HighlightProps;
};

const Home = ({
  banners,
  newGamesTitle,
  newGames,
  mostPopularGamesTitle,
  mostPopularHighlight,
  mostPopularGames,
  upcommingGamesTitle,
  upcommingGames,
  upcommingHighlight,
  freeGamesTitle,
  freeGames,
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
