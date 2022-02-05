import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomThemeProvider from './context';
import './index.scss';
import { Header } from './js/Header/Header';
import ChatsPage from './js/Pages/ChatsPage/ChatsPage';
import { ProfilePage } from './js/Pages/ProfilePage/ProfilePage';

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
    <CustomThemeProvider>
      <BrowserRouter>
        <Header />
            
        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/chat/*" element={<ChatsPage />} />
          <Route path="/" element={<h1>Home page</h1>} />
          <Route path="/*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
     </CustomThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
