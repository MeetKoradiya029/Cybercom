/*
Write an SQL query to swap all 'f' and 'm' values (i.e.,
change all 'f' values to 'm' and vice versa) with a single
update statement and no intermediate temporary tables.Note
that you must write a single update statement, do not write
any select statement for this problem.

*/


CREATE TABLE Salery (
  id INT auto_increment,
  name VARCHAR(128) NOT NULL,
  sex ENUM('m','f'),
  salery int,
  primary key(id)
  
);
-- truncate table salery; 

insert into Salery(name,sex, salery) values("smit",'m',15000);
insert into Salery(name,sex, salery) values("arjun",'m',18000);
insert into Salery(name,sex, salery) values("priya",'f',35000);
insert into Salery(name,sex, salery) values("honey",'f',50000);
insert into Salery(name,sex, salery) values("kriti",'f',40000);

update Salery 
SET sex = CASE
    WHEN sex = 'f' THEN 'm'
    WHEN sex = 'm' THEN 'f'
    ELSE sex
END;


