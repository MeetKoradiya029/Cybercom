/*3
Case01:
6. Write a query that calculates the total number of customers
in the "customers" table.
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

select count(id) as total_customers from customers;

