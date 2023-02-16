import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';

export const Searchbar = ({ onSubmit, setPage }) => {
  const [imagesName, setImagesName] = useState('');

  const handelSearchForm = e => {
    e.preventDefault();
    if (imagesName.trim() === '') {
      toast.error('Потрібно ввести Назву для пошуку', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    }
    setPage(1)
    onSubmit(imagesName);
    setImagesName('');
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handelSearchForm}>
        <button type="Submit" className="SearchForm-button">
          <span className="SearchForm-button-label"></span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={imagesName}
          onChange={({ target }) => setImagesName(target.value)}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
