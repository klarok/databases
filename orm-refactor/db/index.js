const Sequelize = require('sequelize');
const db = new Sequelize('chat', 'student', 'student', {
    host: 'localhost',
    dialect: 'mysql'
});

let Users = db.define('Users', {
    username: Sequelize.STRING
});

let Messages = db.define('Messages', {
    text: Sequelize.STRING,
    roomname: Sequelize.STRING
});

Messages.belongsTo(Users);

Users.hasMany(Messages);

Messages.sync();
Users.sync();

exports.Users = Users;
exports.Messages = Messages;