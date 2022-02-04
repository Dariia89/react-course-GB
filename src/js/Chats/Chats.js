import { Button, List } from "@mui/material";
import { useState } from "react";
import { Chat } from "../Chat/Chat";
import { Link, useParams } from "react-router-dom";

export const Chats = () => {
  const [chats, setChats] = useState(['chat1', 'chat2', 'chat3', 'chat4']);

  const { chatId } = useParams();

  return (
    <List component="nav">
      {chats.map((chat, i) => (
        <Link key={chat} to={`/chat/${chat}`}>
          <Chat
            key={`chat${i}`}
            title={chat}
            selected={chatId === chat}
          />
        </Link>
      ))}
      <Button onClick={() => setChats([...chats, `chat${chats.length + 1}`])}>
        +   
      </Button>
    </List>
  );
};