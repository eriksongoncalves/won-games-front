import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import Game, { GameTemplateProps } from 'templates/Game';
import { initializeApollo } from 'utils/apollo';
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames';
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from 'graphql/queries/games';
import {
  QueryGamesBySlug,
  QueryGamesBySlugVariables
} from 'graphql/generated/QueryGamesBySlug';
import { QueryRecommended } from 'graphql/generated/QueryRecommended';
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended';
import { gamesMapper, highlightMapper } from 'utils/mappers';
import { getImageUrl } from 'utils/getImageUrl';
import {
  QueryUpcomming,
  QueryUpcommingVariables
} from 'graphql/generated/QueryUpcomming';
import { QUERY_UPCOMMING } from 'graphql/queries/upcomming';

const apolloClient = initializeApollo();

export default function Index(props: GameTemplateProps) {
  const router = useRouter();

  if (router.isFallback) return null;

  return <Game {...props} />;
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: {
      limit: 9
    }
  });

  const paths = data.games.map(({ slug }) => ({
    params: { slug }
  }));

  return {
    paths,
    fallback: true
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Get game data
  const { data } = await apolloClient.query<
    QueryGamesBySlug,
    QueryGamesBySlugVariables
  >({
    query: QUERY_GAME_BY_SLUG,
    variables: {
      slug: `${params?.slug}`
    },
    fetchPolicy: 'no-cache'
  });

  if (!data.games.length) {
    return { notFound: true };
  }

  const game = data.games[0];

  // get recommended games
  const { data: recommended } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  });

  // get upcoming games and highlight
  const TODAY = new Date().toISOString().slice(0, 10);
  const { data: upcomming } = await apolloClient.query<
    QueryUpcomming,
    QueryUpcommingVariables
  >({ query: QUERY_UPCOMMING, variables: { date: TODAY } });

  return {
    revalidate: 60,
    props: {
      slug: params?.slug,
      cover: `${getImageUrl(game.cover?.src)}`,
      gameInfo: {
        id: game.id,
        title: game.name,
        price: game.price,
        description: game.short_description
      },
      gallery: game.gallery.map(image => ({
        src: `${getImageUrl(image.src)}`,
        label: image.label
      })),
      description: game.description,
      details: {
        developer: game.developers[0].name,
        releaseDate: game.release_date,
        platforms: game.platforms.map(platform => platform.name),
        publisher: game.publisher?.name,
        rating: game.rating,
        genres: game.categories.map(category => category.name)
      },
      upcommingTitle: upcomming.showcase?.upcommingGames?.title,
      upcommingGames: gamesMapper(upcomming.upcommingGames),
      upcommingHighlight: highlightMapper(
        upcomming.showcase?.upcommingGames?.highlight
      ),
      recommendedTitle: recommended.recommended?.section?.title,
      recommendedGames: gamesMapper(recommended.recommended?.section?.games)
    }
  };
};
