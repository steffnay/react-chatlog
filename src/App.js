import React, { Component } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import Chat from './components/Chat';

class App extends Component {
  render() {
    console.log(chatMessages);


    const thisConversation = <Chat allMessages={chatMessages} />

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Turing Test</h1>
        </header>
        <main className="App-main">
        {thisConversation}
        </main>
      </div>
    );
  }
}

export default App;
