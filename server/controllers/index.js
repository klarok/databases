var Promise = require('bluebird');
var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, messagesData) => {
        if (err) throw err;
        //console.log(messagesData);
        res.send(JSON.stringify(messagesData));
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log(req.body, 'post messages');
      models.messages.post((err) => {
        if (err) throw err;
        res.send('message posted');
      });
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

