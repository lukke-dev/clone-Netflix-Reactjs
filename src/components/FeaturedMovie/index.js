import './style.css';
import PropTypes from 'prop-types';

export default function FeaturedMovie({ item }) {
  let firstDate = new Date(item.first_air_date);
  let genres = [];

  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  let description = item.overview;
  if (description.length > 200) {
    description = description.substring(0, 200) + '...';
  }
  return (
    <section
      className="featured"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="vertical">
        <div className="horizontal">
          <div className="name">{item.name}</div>
          <div className="info">
            <div className="points">{item.vote_average} pontos</div>
            <div className="year">{firstDate.getFullYear()}</div>
            <div className="seasons">
              {item.number_of_seasons} temporada
              {item.number_of_seasons !== 1 ? 's' : ''}
            </div>
          </div>
          <div className="description">{description}</div>
          <div className="buttons">
            <a className="watch" href={`/watch/${item.id}`}>
              ► Assistir
            </a>
            <a className="mylist" href={`/list/add${item.id}`}>
              + Minha Lista
            </a>
          </div>
          <div className="genres">
            <strong>Gêneros:</strong> {genres.join(', ')}
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturedMovie.propTypes = {
  item: PropTypes.any,
};
