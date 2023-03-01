/*
Question 2: Write an SQL query to report the device that is
first logged in for each player. Return the result table in any
order.
*/

select id , min(device_id) as device_id from activity
group by id ;