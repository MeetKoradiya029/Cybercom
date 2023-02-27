/*
	case 02:
    5.Write a SQL query to calculate the average salary of all
	employees.

*/

select avg(salary) as average_salery from employees
group by salary;