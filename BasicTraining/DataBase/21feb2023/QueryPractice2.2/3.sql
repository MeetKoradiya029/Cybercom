/*
Write an SQL query to report the name, population, and area of
the big countries.
*/

create table world(
	name varchar(256),
	continent varchar(256) not null,
	area int,
    population int,
    gdp bigint,
    primary key(name)
);

insert into world values("Afghanistan","Asia",  652230 , 25500100,20343000000);
insert into world values("Albania","Europe",  28748 , 2831741,12960000000);
insert into world values("Algeria", "Africa", 2381741,  37100000 , 188681000000);
insert into world values("Andorra", "Europe" , 468, 78115 , 3712000000 );
insert into world values(" Angola", " Africa",  1246700,  20609294 , 100990000000 );

select name, population , area from world where (area >= 3000000 OR population >=25000000);