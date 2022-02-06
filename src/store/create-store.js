import { createStore, combineReducers } from 'redux';
import { chatsReducer } from './chats';
import { messagessReducer } from './messages';
import { profileReducer } from './profile';

export const store = createStore(
  combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagessReducer,
  })
);