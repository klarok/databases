const Sequelize = require('sequelize');
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
      let qArgs = [req.body.username, req.body.roomname, req.body.message];
      models.messages.post(qArgs, (err) => {
        if (err) throw err;
        res.sendStatus(201);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    // req.body.username = valjean
    get: function (req, res) {
      models.users.get((err, usersData) => {
        if (err) throw err;
        res.json(usersData);
      });
    },
    post: function (req, res) {
      models.users.post(req.body.username, (err) => {
        if (err) throw err;
        res.sendStatus(201);
      });
    }
  }
};

