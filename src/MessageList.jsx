import React, {Component} from 'react';
import Message from './Message.jsx';

const MessageList = React.createClass({
  render: function() {
    const messages = this.props.messages.map(function(message, i){
      return <Message key={i} username={message.username} content={message.content}/>
    })

    return (
      <div id="message-list">
        {messages}
      </div>
    )
  }
})

export default MessageList;