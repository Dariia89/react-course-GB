import { CREATE_CHAT, DELETE_CHAT } from './types';

const initialState = {
    chats: ['chat1', 'chat2', 'chat3', 'chat4'],
};

export const chatsReducer = (state = initialState, action) => {
  switch (action.type){
    case CREATE_CHAT:
        return { ...state, chats: [...state.chats, action.payload], };
    case DELETE_CHAT:
        return { ...state, chats: state.chats.filter(chat => chat !== action.payload), };
    default:
        return state;
  }
};
