import Home, { HomeTemplateProps } from 'templates/Home';

import gameMock from 'components/GameCardSlider/mock';
import { initializeApollo } from 'utils/apollo';
import { QueryHome, QueryHomeVariables } from 'graphql/generated/QueryHome';
import { QUERY_HOME } from 'graphql/queries/home';
import { bannerMapper, gamesMapper, highlightMapper } from 'utils/mappers';

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();
  const date = new Date().toISOString().slice(0, 10);

  const {
    data: { banners, newGames, upcommingGames, freeGames, sections }
  } = await apolloClient.query<QueryHome, QueryHomeVariables>({
    query: QUERY_HOME,
    variables: { date },
    fetchPolicy: 'no-cache'
  });

  return {
    revalidate: 60,
    props: {
      banners: bannerMapper(banners),
      newGames: gamesMapper(newGames),
      newGamesTitle: sections?.newGames?.title,
      mostPopularHighlight: highlightMapper(sections?.popularGames?.highlight),
      mostPopularGames: gamesMapper(sections!.popularGames!.games),
      mostPopularGamesTitle: sections?.popularGames?.title,
      upcommingGames: gamesMapper(upcommingGames),
      upcommingGamesTitle: sections?.upcommingGames?.title,
      upcommingHighlight: highlightMapper(sections?.upcommingGames?.highlight),
      upcommingMoreGames: gameMock,
      freeGames: gamesMapper(freeGames),
      freeGamesTitle: sections?.freeGames?.title,
      freeHighlight: highlightMapper(sections?.freeGames?.highlight)
    }
  };
}
