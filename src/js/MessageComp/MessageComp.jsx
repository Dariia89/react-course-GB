import React from 'react'
import './MessageComp.scss'

function MessageComp({ text }) {
    
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

    return (
        <div className="message">
            { text } 
            <span className="date">{ getDate() }</span>
        </div>
    )
}

export default MessageComp
