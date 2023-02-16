import { useState } from 'react';
// import PropTypes from 'prop-types';
import { Modal } from '../Modal/Modal';

export const ImageGalleryItem = ( {smallImg, largeImg} ) => {
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState('');

  const toggleModal = () => {
    setShowModal(state => !state);
  };
  const getLargeImage = () => {
    setLargeImage(largeImg);
    toggleModal();
  };

  return (
    <>
      <img
        className="ImageGalleryItem-image"
        src={smallImg}
        alt=""
        onClick={getLargeImage}
      />
      {showModal && (
        <Modal largeImage={largeImage} closeModal={toggleModal} />
      )}
    </>
  );
};

// ImageGalleryItem.propTypes = {
//   largeImage: PropTypes.string.isRequired,
//   smallImage: PropTypes.string.isRequired,
// };
