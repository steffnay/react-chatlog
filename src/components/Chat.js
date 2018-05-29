import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import Message from './Message';

class Chat extends React.Component {
  render() {

    const chatData = this.props.allMessages.map((message) => {
      return (
        <Message
        key={message.timeStamp}
        sender={message.sender}
        body={message.body}
        timestamp={message.timeStamp}
        />
      );
    });
    return (
      <section className="chat-log">
        {chatData}
      </section>
    );
  }
}

export default Chat;
