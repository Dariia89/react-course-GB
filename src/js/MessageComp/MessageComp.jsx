import React from 'react'
import './MessageComp.scss'

function MessageComp({ message }) {

    const { user, text } = message;

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
            <div className="message">
                <span className={isBot() ? 'bot' : 'user-name'}>{ user }</span><br />
                { text } 
                <span className="date">{ getDate() }</span>
            </div>
        </>   
    )
}

export default MessageComp
