/*
case-01:
2. Write a query that selects the customer with the earliest
created_at date.
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

select * from customers order by created_at asc limit 1;