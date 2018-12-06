var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      let results = models.messages.get();
      res.send('got results');
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log(req.body, 'messages');
      res.send('messages post');
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    // req.body.username = valjean
    get: function (req, res) {
      res.send('user get');
    },
    post: function (req, res) {
      // console.log(req);
      res.send('user post');
    }
  }
};

