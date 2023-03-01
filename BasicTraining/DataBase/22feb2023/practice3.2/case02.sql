/*
Write a query to retrieve the name and number of posts for each
user who joined the platform in the year 2022, along with the
total number of likes received for each user's posts.
*/


CREATE TABLE users (
 id INT PRIMARY KEY,
 name VARCHAR(255),
 created_at TIMESTAMP
);

CREATE TABLE posts (
 id INT PRIMARY KEY,
 user_id INT,
 body TEXT,
 created_at TIMESTAMP
);

CREATE TABLE likes (
 id INT PRIMARY KEY,
 user_id INT,
 post_id INT,
 created_at TIMESTAMP
);


-- Insert users
INSERT INTO users (id, name, created_at)
VALUES
(1, 'Alice', '2022-01-01 00:00:00'),
(2, 'Bob', '2022-01-15 00:00:00'),
(3, 'Charlie', '2022-02-01 00:00:00');

-- Insert posts
INSERT INTO posts (id, user_id, body, created_at)
VALUES
(1, 1, 'Hello, world!', '2022-01-01 12:00:00'),
(2, 1, 'My first post!', '2022-01-02 10:00:00'),
(3, 2, 'Check out this cool article.', '2022-01-20 15:00:00'),
(4, 2, 'I love this photo!', '2022-01-30 08:00:00'),
(5, 3, 'Just a quick update.', '2022-02-05 16:00:00');

-- Insert likes
INSERT INTO likes (id, user_id, post_id, created_at)
VALUES
(1, 1, 1, '2022-01-01 12:30:00'),
(2, 1, 2, '2022-01-02 10:30:00'),
(3, 2, 1, '2022-01-03 11:00:00'),
(4, 2, 4, '2022-02-01 07:00:00'),
(5, 3, 5, '2022-02-10 08:00:00');



select users.name ,count(posts.id) as posts , count(likes.id) as likes 
from users 
join posts on posts.user_id =users.id
left join likes on likes.post_id = posts.id
where year(users.created_at) = 2022
group by users.id;
