/*
Write an SQL query to report the movies with an odd-numbered
ID and a description that is not "boring". Return the result
table ordered by rating in descending order.
*/

create table Cinema (
	id int ,
    movie varchar(256) not null,
    description varchar(256),
    rating float not null check(rating>=0 and rating<=10),
    primary key(id)
);
INSERT INTO Cinema (id, movie, description, rating)
VALUES
    (1, 'War', 'great 3D', 9.2),
    (2, 'Science', 'fiction', 9.3),
    (3, 'irish', 'boaring', 9.0),
    (4, 'Ice song', 'Fantacy', 8.8),
    (5, 'House card', 'interesting', 8.9);


SELECT *
FROM Cinema
WHERE (id % 2) = 1 AND description <> 'boaring'
ORDER BY rating DESC;

