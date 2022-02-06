import { CREATE_CHAT, DELETE_CHAT } from './types';

export const createChat = (chat) => {
    return { type: CREATE_CHAT, payload: chat }
};

export const deleteChat = (chat) => {
    return { type: DELETE_CHAT, payload: chat };
};
