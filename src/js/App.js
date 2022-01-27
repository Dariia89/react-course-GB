import React, { useCallback, useEffect, useRef, useState } from 'react'
import MessageComp from './MessageComp/MessageComp'
import './App.scss'
import { FormControl, FormHelperText, Input, InputAdornment } from '@mui/material';
import { ChatSharp, Send } from '@mui/icons-material';
import { ChatList, Chats } from './Chats/Chats';

const botMessages = {
    welcome: {
        user: 'Бот',
        text: `Привет, Пользователь! Я чат бот :) Я знаю много интересных фактов. Введи любое число от 1 до 35, чтобы получить факт. Если захочешь завершить чат, напиши "Пока".`,
    },
    facts: [
            'Самая крупная жемчужина в мире достигает 6 килограммов в весе.',
            'Законодательство США допускало отправку детей по почте до 1913 года.',
            'В языке древних греков не существовало слова, которое обозначало религию.',
            'В современной истории есть промежуток времени, когда на счетах компании «Apple», было больше средств, чем у американского правительства.',
            'Среднее облако весит порядка 500 тонн, столько же весят 80 слонов.',
            'В Ирландии никогда не было кротов.',
            'Флот США содержит больше авианосцев, чем все флоты мира вместе взятые.',
            'Скорость распространения лавы после извержения, близка к скорости бега гончей.',
            'Изначально, отвертка была изобретена для выковыривания гвоздей, шуруп был изобретен на 100 лет позже.',
            'Библия – книга, которую чаще всего воруют в американских магазинах.',
            'Примерно 1/3 всей соли, производимой в США, расходуется на очистку дорог ото льда.',
            'Существует пробирка, диаметр которой, в 10000 раз меньше диаметра человеческого волоса.',
            'Саудовская Аравия не содержит рек.',
            'В Антарктиде существует единственная река – Оникс, она течет всего 60 дней в году.',
            'У медуз нет мозгов и кровеносных сосудов.',
            'Ежедневно 60 человек становятся миллионерами.',
            'До 17 века термометры заполняли коньяком.',
            'Кошки спят больше половины своей жизни.',
            'Лимон содержит больше сахара, чем клубника.',
            'Самый долгий полёт курицы продолжался 13 секунд.',
            'Ладожское озеро является самым большим в Европе.',
            'За год на Землю падает до 500 кг марсианского метеорита.',
            'Земля делает полный оборот вокруг своей оси за 23 часа 56 минут и 4 секунды.',
            'На Юпитере регулярно идут алмазные дожди.',
            'Во вселенной больше звёзд, чем песчинок на всех пляжах Земли.',
            'В мире всего 7% левшей',
            'Правое лёгкое человека вмещает больше воздуха, чем левое.',
            'Самая трудно излечимая фобия – боязнь страха.',
            'Алмазы могут гореть.',
            'Корова может подняться по лестнице, но не может спуститься.',
            'Утки способны нырять на глубину до 6 метров.',
            'Китайский язык является самым популярным в мире.',
            'У жирафа и человека одинаковое количество шейных позвонков.',
            'Самое высокое здание в Европе находится в Москве.',
            'Страусы развивают скорость до 70 км в час.'
    ],
    bye: {
        user: 'Бот',
        text: `Уже уходишь? До встречи!`
    }
};

function App() {
    
    const [text, setText] = useState('');
    const [isWelcome, setIsWelcome] = useState(false);
    const [messages, setMessages] = useState([]);

    const ref = useRef(null);
    const focusInput = useRef(null);

    const handleScrollBottom = useCallback(() => {
        if (ref.current) {
          ref.current.scrollTo(0, ref.current.scrollHeight);
        }
    }, []);

    const findAnswer = useCallback((text) => {
        if (text.toLowerCase() === 'пока') {
            return botMessages.bye;
        } else if (!isNaN(text)) {
            if (text >= 1 && text <= 35) {
                return {
                    user: 'Бот',
                    text: botMessages.facts[text]
                }
            } else if (text > 35) {
                return {
                    user: 'Бот',
                    text: 'Вы ввели слишком большое число'
                }
            } else {
                return {
                    user: 'Бот',
                    text: 'Вы ввели слишком маленькое число'
                }
            }
        } else {
            return {
                user: 'Бот',
                text: 'Введите цифру от 1 до 35. Чтобы закончить чат напишите "Пока"'
            }
        }
    }, [botMessages]);

    useEffect(() => {
        setMessages([]);
        focusInput.current?.focus();
        setIsWelcome(true);
        return () => setIsWelcome(false);
    }, []);

    useEffect(() => {
        const lastMessage = messages[messages.length - 1];
        let timerId = null;
    
        if (messages.length && lastMessage.user !== "Бот") {
          timerId = setTimeout(() => {
            setMessages([
              ...messages,
              findAnswer(lastMessage.text)
            ]);
          }, 1000);
        }

        return () => clearInterval(timerId);
    }, [messages, findAnswer]);

    useEffect(() => {
        handleScrollBottom();
      }, [messages, handleScrollBottom]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text) {
            return;
        }
        setMessages([
            ...messages, 
            {
                user: 'Пользователь',
                text: text
            },
        ]);
        setText('');
    }

    return (
        <div className="wrapper">
            <Chats />
            <div className="form">
                <FormControl sx={{ m: '24px auto 20px auto', width: '100ch' }} variant="standard">
                    <Input
                        id="text-input"
                        value={text}
                        inputRef={focusInput}
                        onChange={(e) => setText(e.target.value)}
                        endAdornment={<InputAdornment position="end">{text && <Send onClick={ (e) => handleSubmit(e) } />}</InputAdornment>}
                        aria-describedby="text"
                        inputProps={{
                            'aria-label': 'text',
                        }}
                    />
                    <FormHelperText id="text">Ваше сообщение</FormHelperText>
                    
                </FormControl>

                <div ref={ref} className="messages-container">
                    {isWelcome && <MessageComp message={botMessages.welcome} />}
                    { messages.map((m, i) => {
                        return (
                            <MessageComp key={ `message${i}` } message={ m } />
                        )
                    }) }
                </div>
            </div>
            
            {/* <form className="form-container" onSubmit={ (e) => handleSubmit(e) }>
                <input ref={focusInput} type="text" id="text" value={text} placeholder="Ваше сообщение" onChange={ (e) => setText(e.target.value) } />
                <button type="submit"><i className="fas fa-paper-plane"></i></button>
            </form> */}
        </div>
    )
}

export default App
