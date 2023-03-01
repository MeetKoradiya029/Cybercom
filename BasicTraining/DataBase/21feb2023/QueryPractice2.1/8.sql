/*
Write an SQL query to report the first name, last name, city,
and state of each person in the Person table. If the address
of a personId is not present in the Address table, report null
instead. Return the result table in any order.
*/

create table persons(
	id int auto_increment,
    first_name varchar(256) not null,
    last_name varchar(256) not null,
    primary key(id)
);
truncate table persons;
insert into persons(first_name,last_name) values("allen","wang");
insert into persons(first_name,last_name) values("bob","alice");

create table address(
	id int auto_increment,
    person_id int,
    city varchar(256),
    state varchar(256),
    primary key(id),
    foreign key(person_id) references persons(id)
);




insert into address(person_id, city, state) values(3,"leetcode","california");


