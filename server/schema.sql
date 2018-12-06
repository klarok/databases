CREATE DATABASE chat;

USE chat;


CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(20)
);

CREATE TABLE rooms (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  roomName VARCHAR(20)
);


CREATE TABLE messages (
  /* Describe your table here.*/
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  user_id INTEGER,
  room_id INTEGER,
  body TEXT,
  created TIMESTAMP,
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(room_id) REFERENCES rooms(id)
);

/* Create other tables and define schemas for them here! */


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


INSERT INTO users VALUES (default, 'Mrs. Peacock');
INSERT INTO rooms VALUES (default, 'in the Conservatory');
INSERT INTO messages VALUES (default, 1, 1, 'with the Candlestick', default);
INSERT INTO users VALUES (default, 'Colonel Mustard');
INSERT INTO rooms VALUES (default, 'in the Dining Room');
INSERT INTO messages VALUES (default, 2, 1, 'with the Noose', default);
