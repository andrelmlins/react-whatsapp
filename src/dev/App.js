import React, { useState } from 'react';
import ReactWhatsapp from '../lib';

const App = () => {
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="content">
      <h1 className="title">React Whatsapp</h1>
      <section className="library">
        <input
          id="number"
          placeholder="Number"
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
        <input
          id="message"
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <ReactWhatsapp number={number} message={message}>
          Open Whatsapp
        </ReactWhatsapp>
      </section>
    </div>
  );
};

export default App;
