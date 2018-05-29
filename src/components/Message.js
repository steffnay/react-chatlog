import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import Timestamp from './Timestamp'

class Message extends Component {
  static propTypes = {
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
  }

  render() {
      const messageSender = this.props.sender;
      const messageBody = this.props.body;
      const time = <Timestamp time={this.props.timestamp}/>

    return (
      <section className={messageSender === "Steffany" ? "chat-entry local" : " chat-entry remote"}>
        <p className="entry-name">{messageSender}</p>
        <span></span>
        <article className="entry-bubble">
          <p className=" entry-body">{messageBody}</p>
          <p className="entry-time">{time}</p>
        </article>
      </section>
    );
  }
}

export default Message;
