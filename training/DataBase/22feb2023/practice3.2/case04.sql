/*
Consider a table called "orders" with the following columns:
"id", "customer_id", "order_date", "total_amount". Write a SQL
query to calculate the total amount of orders for each customer,
sorted in descending order by total amount.
*/

create table orders(
	id int primary key,
    customer_id int,
    order_date date,
    total_amount float
);

INSERT INTO orders (id, customer_id, order_date, total_amount)
VALUES (1, 123, '2023-02-25', 500.00),
(2, 123, '2023-02-27', 600.00),
(3, 122, '2023-02-20', 500.00),
(4, 124, '2023-04-25', 800.00),
(5, 120, '2023-03-25', 200.00),
(6, 124, '2023-02-21', 400.00),
(7, 111, '2023-02-25', 600.00);
 



SELECT customer_id, SUM(total_amount) AS total_order_amount
FROM orders
GROUP BY customer_id
ORDER BY total_order_amount DESC;
