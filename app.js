const User = function (name) {
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
  send: function (message, to) {
    this.chatroom.send(message, this, to);
  },
  receive: function (message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

const Chatroom = function () {
  let users = {};

  return {
    register: function (user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function (message, from, to) {
      if (to) {
        // Single user message
        to.receive(message, from);
      } else {
        for (key in users) {
          if (users[key] !== from) {
            users[key].receive(message, from);
          }
        }
      }
    }
  }
}

const user1 = new User("User1");
const user2 = new User("User2");
const user3 = new User("User3");

const chatroom = new Chatroom();

chatroom.register(user1);
chatroom.register(user2);
chatroom.register(user3);

user1.send("Hi there!", user2);
user2.send("Hello m*kers!!!");
user3.send("Aloha", user2);