/*
case 02:
7.Write a SQL query to select the name and age of the
youngest employee.
*/

select name, age from employees order by age limit 1;