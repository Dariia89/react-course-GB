import { SEND_MESSAGE, DELETE_MESSAGE } from './types';

const initialState = {
    messages: {
        chat1: [
            { user: 'Бот', text: 'Hello', id: Math.floor(Math.random() * 10000) },
        ],
    }
};

export const messagessReducer = (state = initialState, action) => {
  switch (action.type){
    case SEND_MESSAGE:
        return { 
            ...state, 
            messages: { 
                ...state.messages,
                [action.payload.chatId]: [
                    ...(state.messages[action.payload.chatId] ?? []),
                    { ...action.payload.newMessage, id: Math.floor(Math.random() * 10000) },
                ],
            },
        };
    case DELETE_MESSAGE:
        return { 
            ...state,
            messages: {
                ...state.messages,
                [action.payload.chatId]: state.messages[action.payload.chatId].filter(m => m.id !== action.payload.messageId),
            }
        };
    default:
        return state;
  }
};
