import './style.css';
import PropTypes from 'prop-types';

export default function Header({ black }) {
  return (
    <header className={black ? 'black' : ''}>
      <div className="logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="netflix"
          />
        </a>
      </div>
      <div className="user">
        <a href="/">
          <img
            src="http://clonenetflix.lucasdev.fun/img/icon1.png"
            alt="usuario"
          />
        </a>
      </div>
    </header>
  );
}

Header.propTypes = {
  black: PropTypes.any,
};
