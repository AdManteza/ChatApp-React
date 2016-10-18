import React, {Component} from 'react';
import Message from './Message.jsx';

const MessageList = React.createClass({
  render: function() {
    return (
      <div id="message-list">
        {console.log("Rendering <MessageList/>")}
        <Message />
      </div>
    )
  }
})

export default MessageList;