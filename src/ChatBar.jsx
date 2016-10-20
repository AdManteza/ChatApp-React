import React, {Component} from 'react';

const ChatBar = React.createClass({
  getInitialState: function() {
    return { value: "" }
  },

  handleChange(e) {
    // this.props.callbackChange(e);
    this.setState({value: e.target.value});
  },

  _handleKeyPress: function(e) {
    if (e.key === 'Enter') {
      this.props.callbackChange(this.state.value)
      this.setState({value: ""})
    }
  },

  render: function() {
    return (
      <footer>
        {console.log("Rendering <ChatBar/>")}
        <input id="username" type="text" placeholder="Your Name (Optional)" value={this.props.currentUser} />
        <input id="new-message" type="text" onChange={this.handleChange} value={this.state.value} onKeyPress={this._handleKeyPress}/>
      </footer>
    )
  }
})

export default ChatBar;