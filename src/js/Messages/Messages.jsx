import React, { useCallback, useEffect, useRef, useState } from 'react'
import { FormControl, FormHelperText, Input } from '@mui/material';
import { useParams } from 'react-router-dom';
import MessageComp from '../MessageComp/MessageComp';
import { useDispatch, useSelector } from 'react-redux';
import { messagesSelectorByChatId } from '../../store/messages/selectors';
import { sendMessageWithBot } from '../../store/messages';

function Messages() {
    const { chatId } = useParams();
    const ref = useRef(null);
    const focusInput = useRef(null);
    const dispatch = useDispatch();

    const [text, setText] = useState('');
    const messages = useSelector(messagesSelectorByChatId(chatId));

    const handleScrollBottom = useCallback(() => {
        if (ref.current) {
          ref.current.scrollTo(0, ref.current.scrollHeight);
        }
    }, []);

    useEffect(() => {
        focusInput.current?.focus();
    }, [dispatch, chatId]);

    useEffect(() => {
        handleScrollBottom();
    }, [messages, handleScrollBottom]);

    const handleSubmit = useCallback(
        (text) => {
        if (!text) {
            return;
        }
        dispatch(sendMessageWithBot({
            user: 'Пользователь',
            text
        }, chatId));
        setText('');
        }, [chatId, dispatch]
    );

    const handlePressInput = ({ code }) => {
        if (code === "Enter") {
            handleSubmit(text);
        }
      };
    
  return (
    <div className="form">
        <FormControl sx={{ m: '24px auto 20px auto', width: '100ch' }} variant="standard">
            <Input
                id="text-input"
                value={text}
                inputRef={focusInput}
                onChange={(e) => setText(e.target.value)}
                aria-describedby="text"
                onKeyPress={handlePressInput}
                inputProps={{
                    'aria-label': 'text',
                }}
            />
            <FormHelperText id="text">Ваше сообщение</FormHelperText>
                    
        </FormControl>

        <div ref={ref} className="messages-container">
                { messages.map((m, i) => {
                    return (
                        <MessageComp chatId={chatId} msgClass={m.user === 'Пользователь' ? 'user' : 'bot'} key={ `message${i}` } message={ m } />
                    )
            }) }
        </div>
    </div>
  );
}

export default Messages;
