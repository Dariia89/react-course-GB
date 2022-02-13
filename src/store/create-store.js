import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { chatsReducer } from './chats';
import thunk from 'redux-thunk';
import { messagessReducer } from './messages';
import { gistsReducer } from './gists';
import { logger, botMessage } from './middlewares';
import { profileReducer } from './profile';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { getPublicGistsApi, searchGistsByNameApi } from '../api/gists';

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["profile"],
};

const reducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  messages: messagessReducer,
  gists: gistsReducer,
});

export const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(logger, botMessage, thunk.withExtraArgument({
      getPublicGistsApi,
      searchGistsByNameApi
    })),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args
  )
);

export const persistor = persistStore(store);