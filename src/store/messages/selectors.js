export const messagesSelectorByChatId = (chatId) => (state) => {
    return state.messages.messages[chatId] || [];
}