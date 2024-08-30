import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';


const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      return; // Prevent submitting empty query
    }
    onSubmit(query);
    setQuery(''); // Clear the input after submitting
  };

  return (
    <header className={css.searchbar}>
                <form className={css.searchbarform} onSubmit={handleSubmit}>
                    <button type="submit" className={css.searchbarbutton}>
                        <span className={css.searchbarbuttonlabel}>Search</span>
                    </button>

                    <input
                        className={css.searchbarinput}
                        type="text"
                        value={query}
                         onChange={handleChange}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;