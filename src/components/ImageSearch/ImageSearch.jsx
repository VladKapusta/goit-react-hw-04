import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';

export const ImageSearch = () => {
  const [imagesName, setImagesName] = useState('');
  const [page, setPage] = useState(1);

  const incrPage = () => {
    setPage(state => state + 1);
  };

  return (
    <div className="ImageSearch">
      <Searchbar onSubmit={setImagesName} setPage={setPage}/>
      <ImageGallery searchName={imagesName} incrPage={incrPage} page={page}/>
      <ToastContainer />
    </div>
  );
};
