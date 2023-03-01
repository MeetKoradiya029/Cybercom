/*
case 02:
8.Write a SQL query to select the name of the employee with
the highest salary.
*/

select name from employees 
order by salary desc 
limit 1;
