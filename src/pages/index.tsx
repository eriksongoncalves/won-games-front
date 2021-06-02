import Home, { HomeTemplateProps } from 'templates/Home';

import bannersMock from 'components/BannerSlider/mock';
import gameMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

export function getServerSideProps() {
  return {
    props: {
      banners: bannersMock,
      newGames: gameMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gameMock,
      upcommingGames: gameMock,
      upcommingHighlight: highlightMock,
      upcommingMoreGames: gameMock,
      freeGames: gameMock,
      freeHighlight: highlightMock
    }
  };
}
