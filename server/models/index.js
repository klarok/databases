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
    post: function (callback) {
      let q = `INSERT INTO messages VALUES (default, 1, 1, 'with the Fish', default);`;
      db.query(q, (err, data) => {
        if (err) throw err;
        console.log(data, 'post query to database');
        callback(null);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};


