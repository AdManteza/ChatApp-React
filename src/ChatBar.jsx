import React, {Component} from 'react';

const ChatBar = React.createClass({
  render: function() {
    return (
      <footer>
        {console.log("Rendering <ChatBar/>")}
        <input id="username" type="text" placeholder="Your Name (Optional)" value={this.props.currentUser}/>
        <input id="new-message" type="text" placeholder="Type a message and hit ENTER" />
      </footer>
    )
  }
})

export default ChatBar;