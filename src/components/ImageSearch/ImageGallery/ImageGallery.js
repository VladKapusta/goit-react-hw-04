import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';
import { Loader } from '../Loader/Loader';

export const ImageGallery = ({ searchName, page, incrPage }) => {
  const [imagesArr, setImagesArr] = useState([]);
  const [totalHits, setTotalHits] = useState(null);
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const [loading, setloading] = useState(false);

  useEffect(() => {
    if (searchName !== '') {
      if (page === 1) {
        setStatus('panding');
      } else {
        setloading(true);
      }

      axios
        .get('https://pixabay.com/api/', {
          params: {
            q: searchName,
            page: page,
            key: '32442591-eae077292ae639629dac32843',
            image_type: 'photo',
            orientation: 'horizontal',
            per_page: 12,
          },
        })
        .then(({ data }) => {
          if (data.hits.length === 0) {
            return Promise.reject(
              new Error(`За вашим запитом ${searchName} нічого не знайдено`)
            );
          }
          if (page === 1) {
            setImagesArr(data.hits);
            setStatus('resolved');
            setTotalHits(data.totalHits);
          } else {
            setTotalHits(state => state - 12);
            setImagesArr(state => state.concat(data.hits));
            setloading(false);
          }
        })
        .catch(error => {
          setStatus('rejected');
          setError(error.message);
        });
    }
  }, [searchName, page]);

  if (status === 'panding') {
    return <Loader />;
  }
  if (status === 'resolved') {
    return (
      <div>
        <ul className="ImageGallery">
          {imagesArr.map(({ id, webformatURL, largeImageURL }) => {
            return (
              <li className="ImageGalleryItem" key={id}>
                <ImageGalleryItem
                  smallImg={webformatURL}
                  largeImg={largeImageURL}
                />
              </li>
            );
          })}
        </ul>
        {totalHits > 12 && !error && (
          <Button incr={() => incrPage()} loading={loading} />
        )}
      </div>
    );
  }
  if (status === 'rejected') {
    return <p>{error}</p>;
  }
};

ImageGallery.propTypes = {
  searchName: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
