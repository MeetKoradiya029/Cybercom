/*
Write an SQL query to delete all the duplicate emails, keeping
only one unique email with the smallest id. Return the result
table in any order.
*/

create table Person(
	id int auto_increment,
    email varchar(256),
    primary key(id)

);

insert into person (email) values ("abc@gmail.com");
insert into person (email) values ("abc@gmail.com");
insert into person (email) values ("xyz@gmail.com");
insert into person (email) values ("hey@gmail.com");
insert into person (email) values ("mmk@gmail.com");


-- create temporary table temp
-- 	select min(id) as id,email from person
--     group by email;

delete from person
where id not in(
select min(id) group by email
)
-- 	select min(id) as id,email from person
--     group by email;

/*delete from person
where id not in(
select min(id) as minimum from person group by email); error:- You can't specify target table 'person' for update in FROM clause gives this error*/

-- delete from person where id not in (select id from temp);

-- drop temporary table temp;
