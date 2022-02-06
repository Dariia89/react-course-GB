import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { chatsReducer } from './chats';
import thunk from 'redux-thunk';
import { messagessReducer } from './messages';
import { logger, botMessage } from './middlewares';
import { profileReducer } from './profile';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["profile"],
};

const reducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  messages: messagessReducer,
});

export const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(logger, botMessage, thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args
  )
);

export const persistor = persistStore(store);