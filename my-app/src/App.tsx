import React, { useState, useMemo, useEffect } from 'react';
import { getMessagesFromData } from './api/api';
import './App.scss';

const App = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userName, setUserName] = useState<string>('');
  const [userText, setUserText] = useState<string>('');
  const [newMess, setNewMess] = useState<boolean>(true)

  const clearFields = () => {
    setUserName('');
    setUserText('');
  }

  const submitForm = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!userName.trim().length || !userText.trim().length) {
      alert('Не все поля заполнены')
      clearFields()
      return;
    }

    await fetch('http://localhost:5000/api/messages', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: userName, text: userText }),
    })

    clearFields()
    setNewMess(!newMess)
  }

  const getMessages = () => {
    getMessagesFromData()
      .then(data => setMessages(data))
  }

  useEffect(() => {
    getMessages();
  }, [newMess])

  const reverseMessages = useMemo(() => {
    return [...messages].reverse();
  }, [messages])

  return (
    <div className="wrapper">
      <header className="header">
        <h1 className="header__title">
          Send your message
        </h1>
        <form
          onSubmit={submitForm}
          className="header-form"
        >
          <label className="header-form__label">
            {'Name: '}
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="header-form__name"
            />
          </label>
          <label className="header-form__label">
            {'Message: '}
            <input
              type="text"
              value={userText}
              onChange={(e) => setUserText(e.target.value)}
              className="header-form__text"
            />
          </label>
          <input
            type="submit"
            value="send"
            className="header-form__submit"
          />
        </form>
      </header>
      <main className="main">
        {
          !!messages.length
          && reverseMessages.map((item: Message) => (
            <article key={item.text} className="message">
              <h2>{item.name}</h2>
              <p>{item.text}</p>
            </article>
          ))
        }
      </main>
    </div>
  );
}

export default App;
