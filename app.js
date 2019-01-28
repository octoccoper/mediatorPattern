const User = function (name) {
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
  send: function (message, to) {
    this.message.send(message, this, to);
  },
  receive: function (message, from) {
    console.log(`${from.name} to ${this.name}: message`);
  }

}

const Chatroom = function () {
  let users = {};

  return {
    register: function () {
      users[users.name] = user;
      user.chatroom = this;
    },
    send: function (message, from, to) {
      if (to) {
        // Single user message
        to.receive(message, from);
      } else { 
        
      }
    }
  }
}