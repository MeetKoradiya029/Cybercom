/*
case 02:
01.Write a SQL query to select all employees from the
"employees" table.

*/

create table employees(
		id int auto_increment,
        name varchar(256),
        age int,
        salary int,
        primary key(id)
);

insert into employees(name,age,salary) values
("john", 35, 60000),
("marty",27,50000),
("peter",42,75000),
("olivia",29,55000),
("michel",38,80000);



