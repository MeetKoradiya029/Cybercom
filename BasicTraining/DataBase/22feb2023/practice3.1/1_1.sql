/*
case-01:
1. Write a query that selects all customers whose email
address ends with "@gmail.com".
*/


create table customers(
	id int auto_increment,
    name varchar(256),
    email varchar(256) unique,
    created_at timestamp,
    primary key(id)
);

insert into customers (name,email,created_at) values ("John Smith", "johnsmith@gmail.com", "2022-01-01 10:00:00");
insert into customers (name,email,created_at) values ("Jane Doe" ,"janedoe@yahoo.com ","2022-01-02 11:00:00");
insert into customers (name,email,created_at) values ("Bob Johnson", "bobjohnson@hotmail.com", "2022-01-03 12:00:00");
insert into customers (name,email,created_at) values ("Sarah Lee","sarahlee@gmail.com ","2022-01-04 13:00:00");
insert into customers (name,email,created_at) values ("David Kim ","davidkim@yahoo.com ","2022-01-05 14:00:00");

select * from customers where email like '%@gmail.com';