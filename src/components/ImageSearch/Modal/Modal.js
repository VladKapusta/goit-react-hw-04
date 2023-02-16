import { useEffect } from 'react';

export const Modal = ({ largeImage, closeModal }) => {
  useEffect(() => {
    const clickEscape = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', clickEscape);
    return () => {
      window.removeEventListener('keydown', clickEscape);
    };
  }, [closeModal]);

  const clickBackdrop = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  return (
    <div className="Overlay" onClick={clickBackdrop}>
      <div className="Modal">
        <img src={largeImage} alt="" />
      </div>
    </div>
  );
};

