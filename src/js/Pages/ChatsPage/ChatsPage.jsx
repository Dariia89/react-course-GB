import '../../App.scss'
import Messages from '../../Messages/Messages';
import { Chats } from '../../Chats/Chats';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function ChatsPage() {
    const navigate = useNavigate();

    useEffect(() => {
      const listener = ({ code }) => {
        if (code === "Escape") {
          navigate("/chat");
        }
      };
  
      document.addEventListener("keydown", listener);
  
      return () => document.removeEventListener("keydown", listener);
    }, [navigate]);
  
    return (
      <>
        <Routes>
          <Route
            path="/"
            element={
                <div className="wrapper">
                    <Chats />
                    <p style={{margin: '40px auto'}}>Выберите чат...</p>
                </div>
            }
          />
          <Route
            path=":chatId"
            element={
                <div className="wrapper">
                    <Chats />
                    <Messages />
                </div>
            }
          />
        </Routes>
      </>
    );
}

export default ChatsPage
