import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';

var data = {
  currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
  messages: [
    {
      username: "Bob",
      content: "Has anyone seen my marbles?",
    },
    {
      username: "Anonymous",
      content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
    }
  ]
};

const App = React.createClass({
  getInitialState: function() {
    return{
      messages: data.messages,
      currentUser: data.currentUser
    };
  },

  componentDidMount: function() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      this.state.messages.push({id: 3, username: "Michelle", content: "Hello there!"});
      // Update the state of the app component. This will call render()
      this.setState({messages: this.state.messages})
    }, 3000);
  },

  handleChange: function(message) {
    this.state.messages.push({username: "Bob", content: message});
    this.setState({messages: this.state.messages})
  },

  render: function() {
    return (
      <div className="wrapper">
        <nav>
          <h1>Chatty</h1>
        </nav>
        <MessageList messages={this.state.messages}/>
        <ChatBar currentUser={this.state.currentUser.name} callbackChange={this.handleChange} />
      </div>
    )
  }
})

export default App;



