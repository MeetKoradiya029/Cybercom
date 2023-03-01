/*
Write an SQL query to create index on the email column.
*/

create table userData (
	id int auto_increment,
    email varchar(256),
    primary key(id)
);

insert into userData(email) values ("abc@gmail.com");
insert into userData(email) values ("met@gmail.com");
insert into userData(email) values ("meet@gmail.com");
insert into userData(email) values ("sk@gmail.com");
insert into userData(email) values ("mk@gmail.com");
insert into userData(email) values ("xyz@gmail.com");
insert into userData(email) values ("ntr@gmail.com");
insert into userData(email) values ("mr.x@gmail.com");
insert into userData(email) values ("ms.unkown@gmail.com");
insert into userData(email) values ("kk@gmail.com");
insert into userData(email) values ("abd@gmail.com");
insert into userData(email) values ("virat@gmail.com");
insert into userData(email) values ("gill@gmail.com");
insert into userData(email) values ("kiara@gmail.com");
insert into userData(email) values ("ajay@gmail.com");
insert into userData(email) values ("abhay@gmail.com");
insert into userData(email) values ("abhi@gmail.com");
insert into userData(email) values ("smit@gmail.com");
insert into userData(email) values ("vijay@gmail.com");
insert into userData(email) values ("arav@gmail.com");
insert into userData(email) values ("silen@gmail.com");
insert into userData(email) values ("dj@gmail.com");


create index email_idx on userdata(email);


