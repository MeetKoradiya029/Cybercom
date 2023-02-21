/*
Write an SQL query to report all the classes that have at least
five students. Return the result table in any order.
*/

create table Courses(
	student varchar(256),
    class varchar(256),
    primary key(student,class)
);

insert into courses values("A","Math");
insert into courses values("B","English");
insert into courses values("C","Math");
insert into courses values("D","Biology");
insert into courses values("E","Math");
insert into courses values("F","Computer");
insert into courses values("G","Math");
insert into courses values("H","Math");
insert into courses values("I","Math");

select class from courses 
group by class 
having count(student)>=5;