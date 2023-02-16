import React from 'react';
import ReactDOM from 'react-dom/client';
import { Feedback } from 'components/FeedbackApp/Feedback';
import { ContactBook } from 'components/ContactBook/ContactBook';
import { ImageSearch } from 'components/ImageSearch/ImageSearch';

import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Feedback />
    <ContactBook/>
    <ImageSearch/>
  </React.StrictMode>
);
