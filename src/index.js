import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.scss';
import { Header } from './js/Header/Header';
import ChatsPage from './js/Pages/ChatsPage/ChatsPage';
import { ProfilePage } from './js/Pages/ProfilePage/ProfilePage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
          
      <Routes>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/chat/*" element={<ChatsPage />} />
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="/*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
