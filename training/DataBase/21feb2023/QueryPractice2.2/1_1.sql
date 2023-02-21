/*
Question 1: Write an SQL query to report the first login date
for each player. Return the result table in any order.

*/

create table activity(
	id int not null,
    device_id int not null,
    event_date date,
    games_played int,
    primary key(id,event_date)
    
);
insert into activity(id,device_id,event_date,games_played) values(1,2,"2016-03-01",5);
insert into activity(id,device_id,event_date,games_played) values(1,2,"2016-05-02",6);
insert into activity(id,device_id,event_date,games_played) values(2,3,"2017-06-25",1);
insert into activity(id,device_id,event_date,games_played) values(3,1,"2016-03-02",0);
insert into activity(id,device_id,event_date,games_played) values(3,4,"2018-07-03",5);

select id , min(event_date) as first_login from activity
group by id ;