/*
Write a query to retrieve the title and body of the five most
recent blog posts, along with the number of comments each post
has.

*/

CREATE TABLE blog_posts (
 id INT PRIMARY KEY,
 title VARCHAR(255),
 body TEXT,
 author_id INT,
 created_at TIMESTAMP,
 updated_at TIMESTAMP
);
INSERT INTO blog_posts (id, title, body, author_id, created_at, updated_at)
VALUES (1, 'First Post', 'This is the body of the first post.', 1, '2022-01-01 00:00:00', '2022-01-01 00:00:00'),
(2, 'Second Post', 'This is the body of the second post.', 2, '2022-01-02 00:00:00', '2022-01-02 00:00:00'),
(3, 'Third Post', 'This is the body of the third post.', 1, '2022-01-03 00:00:00', '2022-01-03 00:00:00');
INSERT INTO blog_posts (id, title, body, author_id, created_at, updated_at)
VALUES 
(4, 'Fourth Post', 'This is the body of the fourth post.', 4, '2022-01-04 00:00:00', '2022-01-05 12:00:00'),
(5, 'Fifth Post', 'This is the body of the fifth post.', 2, '2022-01-08 11:00:00', '2022-01-09 06:00:00'),
(6, 'sixth Post', 'This is the body of the sixth post.', 6, '2022-02-03 00:00:00', '2022-02-03 07:08:00');


CREATE TABLE blog_comments (
 id INT PRIMARY KEY,
 post_id INT,
 body TEXT,
 author_id INT,
 created_at TIMESTAMP
);

INSERT INTO blog_comments (id, post_id, body, author_id, created_at)
VALUES (1, 1, 'This is a comment on the first post.', 3, '2022-01-01 01:00:00'),
(2, 1, 'This is another comment on the first post.', 2, '2022-01-01 02:00:00'),
(3, 2, 'This is a comment on the second post.', 1, '2022-01-02 01:00:00'),
(4, 2, 'This is another comment on the second post.', 3, '2022-01-02 02:00:00'),
 (5, 2, 'This is a third comment on the second post.', 2, '2022-01-02 03:00:00'),
 (6, 3, 'This is a comment on the third post.', 2, '2022-01-03 01:00:00');
 
 
 select p.title , p.body , count(c.id) as total_comments 
 from blog_posts p 
 left join blog_comments c 
 on p.id = c.post_id 
 group by p.id 
 order by p.created_at desc
 limit 5;
