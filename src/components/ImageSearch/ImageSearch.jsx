import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';

export const ImageSearch = () => {
  const [imagesName, setImagesName] = useState('');

  return (
    <div className="App">
      <Searchbar onSubmit={imagesName => setImagesName(imagesName)} />
      <ImageGallery searchName={imagesName} />
      <ToastContainer />
    </div>
  );
};
