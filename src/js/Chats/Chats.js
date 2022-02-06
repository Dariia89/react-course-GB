import { Button, List } from "@mui/material";
import { useCallback } from "react";
import { Chat } from "../Chat/Chat";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { chatsSelector, createChat, deleteChat } from "../../store/chats";

export const Chats = () => {
  const { chatId } = useParams();
  const chats = useSelector(chatsSelector);
  const dispatch = useDispatch();

  const createChatByName = useCallback(
    () => {
    const name = prompt('Введите название чата');
    const isValidName = !chats.includes(name);
    if (name && isValidName) {
      dispatch(createChat(name));
    } else {
      alert('Невалидное название');
    }
  }, [chats, dispatch]);

  const deleteChatByName = useCallback(
    (chat) => {
      dispatch(deleteChat(chat));
    },
    [dispatch]
  );

  return (
    <List component="nav">
      {chats.map((chat, i) => (
        <Link key={chat} to={`/chat/${chat}`}>
          <Chat
            key={`chat${i}`}
            title={chat}
            selected={chatId === chat}
            deleteChatByName={deleteChatByName}
          />
        </Link>
      ))}
      <Button onClick={createChatByName}>
        +   
      </Button>
    </List>
  );
};