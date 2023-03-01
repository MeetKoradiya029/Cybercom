/*
Consider a table called "books" with the following columns:
"id", "title", "author", "publication_year". Write a SQL query
to retrieve the title and author of the oldest book in the
table.
*/

create table books(
	id int auto_increment,
    title varchar(256),
    author varchar(256),
    publication_year year,
    primary key(id)
);
insert into books(title,author,publication_year) 
values("power of subconcious mind","joseph murphy","2002"),
("bhagwad gita","lord krishna","01"),
("mahabharata","maharshi vedvyas","02"),
("ramayana","valmiki","03"),
("A girl in room 105","Chetan Bhagat","2011");

select title, author from books
order by publication_year 
limit 1;