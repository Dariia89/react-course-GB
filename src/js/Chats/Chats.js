import { Button, List } from "@mui/material";
import { useState } from "react";
import { Chat } from "../Chat/Chat";

export const Chats = () => {
  const [chats, setChats] = useState(['chat №1', 'chat №2', 'chat №3', 'chat №4']);
  const [selected, setSelected] = useState(0);

  return (
    <List component="nav">
      {chats.map((chat, i) => (
        <Chat
          key={`chat${i}`}
          title={chat}
          selected={selected === i}
          handleClick={(e) => setSelected(chats.findIndex(el => el === e.target.value))}
        />
      ))}
      <Button onClick={(e) => setChats([...chats, `chat №${chats.length + 1}`])}>
        +   
      </Button>
    </List>
  );
};