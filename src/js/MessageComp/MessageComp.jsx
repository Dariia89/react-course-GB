import React from 'react';
import './MessageComp.scss';
import '../App.scss';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteMessage } from '../../store/messages';

function MessageComp({ message, msgClass, chatId }) {
    const { user, text } = message;
    const dispatch = useDispatch();

    const getDate = () => {
        let today = new Date(),
            d = String(today.getDate()),
            m = String(today.getMonth() + 1),
            y = today.getFullYear();
        m = checkDateLength(m);
        d = checkDateLength(d);
        return ` ${d}.${m}.${y}`;
    }

    const checkDateLength = (item) => {
        if (item.length === 1) {
            return '0' + item;
        } else {
            return item;
        }
    }

    const isBot = () => {
        return user === 'Бот';
    }

    return (
        <>
            <div className={`message ${msgClass}`}>
                <span className="delete" onClick={() => dispatch(deleteMessage(message?.id, chatId))}>X</span>
                <span className={isBot() ? 'bot-name' : 'user-name'}>{ user }</span><br />
                { text }
                <span className="date">{ getDate() }</span>
            </div>
        </>   
    )
}

export default MessageComp;

MessageComp.propTypes = {
    message: PropTypes.object,
    msgClass: PropTypes.string
}