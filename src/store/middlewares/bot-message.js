import { findAnswer } from "../../utils/findAnswer";
import { sendMessage } from "../messages";
import { SEND_MESSAGE } from "../messages/types";

export const botMessage = (store) => (next) => (action) => {
   if (action.type === SEND_MESSAGE && action.payload.message.user === 'Пользователь') {
    let botAnswer = findAnswer(action.payload.message.text);
    setTimeout(() => {
        store.dispatch(sendMessage(botAnswer, action.payload.chatId))
    }, 500);
   }

   return next(action);
}