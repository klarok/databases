var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      let q = `SELECT users.username, rooms.roomname, messages.body FROM messages
                INNER JOIN users ON users.id = messages.user_id
                INNER JOIN rooms ON rooms.id = messages.room_id`;
      let results = db.query(q, (err, results, fields) => {
        if (err) throw err;
        console.log(results, 'models');
        return results;
      });
      return results;
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

