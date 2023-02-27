/*
Consider a table called "employees" with the following columns:
"id", "name", "department", "salary". Write a SQL query to
retrieve the names and salaries of all employees in the "sales"
department who earn more than $50,000 per year.

*/

  CREATE TABLE employees (
  id INT PRIMARY KEY,
  name VARCHAR(256),
  department VARCHAR(256),
  salary DECIMAL(10, 2)
);

INSERT INTO employees (id, name, department, salary)
VALUES (1, 'John Smith', 'sales', 60000.00),
	   (2, 'JOhn Wick', 'sales', 60000.00),
	   (3, 'Tony Stark', 'SoftwareDev', 70000.00),
        (4, 'Steve rogers', 'sales', 60000.00);


SELECT name, salary
FROM employees
WHERE department = 'sales' AND salary > 50000;
