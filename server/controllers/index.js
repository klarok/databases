var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    // req.body.username = valjean
    get: function (req, res) {},
    post: function (req, res) {console.log(req);}
  }
};

