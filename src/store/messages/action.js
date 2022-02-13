import { SEND_MESSAGE, DELETE_MESSAGE } from './types';

export const sendMessage = (message, chatId) => {
    return { type: SEND_MESSAGE, payload: { message, chatId }, meta: { delay: 1000 }, }
};

export const deleteMessage = (messageId, chatId) => {
    return { type: DELETE_MESSAGE, payload: { messageId, chatId }  };
};
