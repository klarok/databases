CREATE DATABASE chat;

USE chat;


CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(20)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  user_id INTEGER,
  roomname VARCHAR(20),
  body TEXT
);

/* Create other tables and define schemas for them here! */


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


INSERT INTO users VALUES (default, 'Mrs. Peacock');
INSERT INTO messages VALUES (default, 1, 'in the Conservatory', 'with the Candlestick');
INSERT INTO users VALUES (default, 'Colonel Mustard');
-- INSERT INTO rooms VALUES (default, 'in the Dining Room');
INSERT INTO messages VALUES (default, 2, 'in the Conservatory', 'with the Noose');
