const Sequelize = require('sequelize');
var Promise = require('bluebird');
var db = require('../db');
var queryAsync = Promise.promisify(db.query.bind(db));

module.exports = {
  messages: {
    get: function (callback) {
      let q = `SELECT users.username, messages.roomname, messages.body FROM messages
      INNER JOIN users ON users.id = messages.user_id;`;
      db.query(q, (err, results) => {
        callback(err, results);
      });
    }, // a function which produces all the messages
    post: function (queryArgs, callback) {
      // let q = `INSERT INTO messages (user_id, room_id, body) 
      //           SELECT users.id, rooms.id, '${messageObj.message}' 
      //           FROM users, rooms 
      //           WHERE users.username = '${messageObj.username}' 
      //           AND rooms.roomname = '${messageObj.roomname}';`;
      let q = 'INSERT INTO messages (user_id, roomname, body) VALUES((SELECT users.id FROM users WHERE users.username = ?), ?, ?);';
      db.query(q, queryArgs, (err, data) => {
        console.log(data, 'post query to database');
        callback(err);
      });
      // =======================================================================
      // let q = `SELECT users.id FROM users WHERE users.username = '${messageObj.username}';`;
      // queryAsync(q)
      //   .then(id => {
      //     console.log(id, 'query async id');
      //     queryAsync
      //   })
      //   .catch(err => {
      //     reject(err);
      //   });
      // ========================================================================
      // let q = `INSERT INTO messages (body) VALUES ("${messageObj.message}")`;
      // db.query(q, (err, data) => {
      //   if (err) throw new Error('error posting message');
      //   console.log(data, 'post query to dcatabase');
      //   callback(null);
      // });
    } 
  }, // a function which can be used to insert a message into the database
  users: {
    // Ditto as above.
    get: function (callback) {
      // let q = `SELECT users.id, rooms.roomname, messages.body FROM messages
      //           WHERE users.username = ${username} AND messages.user_id = users.id`;
      let q = `SELECT * FROM users;`;
      db.query(q, (err, results) => {
        if (err) throw err;
        console.log(results, `get users`);
        callback(null, results);
      });
    },
    post: function (username, callback) {
      let q = `INSERT INTO users (username) VALUES ('${username}')`;
      db.query(q, err => {
        if (err) throw err;
        callback(null);
      });
    }
  }
};


