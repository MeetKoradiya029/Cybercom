/*
case 02:
6.Write a SQL query to select the name and age of the oldest
employee.
*/

select name, age from employees 
order by age desc
limit 1;