import { sendMessage } from ".";
import { findAnswer } from "../../utils/findAnswer";

export const sendMessageWithBot = (message, chatId) => (dispatch, getState, api) => {
    dispatch(sendMessage(message, chatId));

    if (message.user === 'Пользователь') {
        let botAnswer = findAnswer(message.text);
        setTimeout(() => {
            dispatch(sendMessage(botAnswer, chatId))
        }, 500);
    }
};