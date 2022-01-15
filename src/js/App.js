import React, { useState } from 'react'
import MessageComp from './MessageComp/MessageComp'
import './App.scss'

function App() {
    
    const [text, setText] = useState('');
    const [messages, setMessages] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setMessages([...messages, text]);
        setText('');
    }

    return (
        <div className="wrapper">
            <div className="messages-container">
                { messages.map((m, i) => {
                    return (
                        <MessageComp key={ `message${i}` } text={ m } />
                    )
                })}
            </div>
            
            <form className="form-container" onSubmit={ (e) => handleSubmit(e) }>
                <input type="text" id="text" value={text} placeholder="Ваше сообщение" onChange={ (e) => setText(e.target.value) } />
                <button type="submit"><i className="fas fa-paper-plane"></i></button>
            </form>
        </div>
    )
}

export default App
