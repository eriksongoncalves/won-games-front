import Home, { HomeTemplateProps } from 'templates/Home';

import gameMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';
import { initializeApollo } from 'utils/apollo';
import { QueryHome } from 'graphql/generated/QueryHome';
import { QUERY_HOME } from 'graphql/queries/home';

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<QueryHome>({ query: QUERY_HOME });

  return {
    props: {
      revalidate: 60,
      banners: data.banners.map(banner => ({
        img: `http://localhost:1337${banner.image?.url}`,
        title: banner.title,
        subtitle: banner.subtitle,
        buttonLabel: banner.button?.label || null,
        buttonLink: banner.button?.link || null,
        ...(banner.ribbon && {
          ribbon: banner.ribbon.text,
          ribbonColor: banner.ribbon.color,
          ribbonSize: banner.ribbon.size
        })
      })),
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
