var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      let q = `SELECT users.username, rooms.roomname, messages.body FROM messages
                INNER JOIN users ON users.id = messages.user_id
                INNER JOIN rooms ON rooms.id = messages.room_id`;
      db.query(q, (err, results, fields) => {
        if (err) throw err;
        callback(null, results);
      });
    }, // a function which produces all the messages
    post: function (messageObj, callback) {
      // let q = null;
      // let q = `INSERT INTO messages VALUES (default, 1, 1, 'with the Fish', default);`;
      let q = `INSERT INTO messages (body) VALUES ('${messageObj.message}')`;
      
      db.query(q, (err, data) => {
        if (err) throw new Error('error posting message');
        console.log(data, 'post query to database');
        callback(null);
      });
    } 
    // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (username, callback) {
      let q = `SELECT users.id, rooms.roomname, messages.body FROM messages
                WHERE users.username = ${username} AND messages.user_id = users.id`;
      db.query(q, (err, results, fields) => {
        if (err) throw err;
        console.log(results, `get message for ${username}`);
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


