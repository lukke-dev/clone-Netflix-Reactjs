const API_KEY = '9d0ae42e3697ce6cc918a158459752a7';

const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

const getHomeList = async () => {
  return [
    {
      slug: 'originals',
      title: 'Originais do Netflix',
      items: await basicFetch(
        `/discover/tv?api_key=${API_KEY}&language=pt-BR&with_networks=213`,
      ),
    },
    {
      slug: 'trending',
      title: 'Recomendados para Você',
      items: await basicFetch(
        `/trending/all/week?language=pt-BR&api_key=${API_KEY}`,
      ),
    },
    {
      slug: 'toprated',
      title: 'Em Alta',
      items: await basicFetch(
        `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`,
      ),
    },
    {
      slug: 'action',
      title: 'Ação',
      items: await basicFetch(
        `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`,
      ),
    },
    {
      slug: 'comedy',
      title: 'Comédia',
      items: await basicFetch(
        `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`,
      ),
    },
    {
      slug: 'horror',
      title: 'Terror',
      items: await basicFetch(
        `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`,
      ),
    },
    {
      slug: 'romance',
      title: 'Romance',
      items: await basicFetch(
        `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`,
      ),
    },
    {
      slug: 'documentary',
      title: 'Documentários',
      items: await basicFetch(
        `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`,
      ),
    },
  ];
};

export const getMovieInfo = async (movieId, type) => {
  let info = {};

  if (movieId) {
    type === 'tv'
      ? (info = await basicFetch(
          `/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`,
        ))
      : (info = await basicFetch(
          `/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`,
        ));
  }
  return info;
};

export default getHomeList;
