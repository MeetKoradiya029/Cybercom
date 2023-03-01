/*
Write a query to retrieve the total sales for each month in the
year 2021, sorted in ascending order by month.
*/

CREATE TABLE sales (
 id INT PRIMARY KEY,
 date DATE,
 customer_id INT,
 product_id INT,
 quantity INT,
 total_price DECIMAL(10,2)
);

INSERT INTO sales (id, date, customer_id, product_id, quantity, total_price)
VALUES
(1, '2021-01-01', 1, 1, 2, 50.00),
(2, '2021-01-02', 2, 1, 3, 75.00),
(3, '2021-02-05', 1, 2, 1, 25.00),
(4, '2021-02-10', 3, 2, 2, 50.00),
(5, '2021-03-15', 1, 3, 4, 100.00),
(6, '2021-03-20', 2, 3, 3, 75.00),
(7, '2020-12-31', 1, 1, 1, 25.00),
(8, '2022-12-31', 1, 1, 1, 25.00),
(9, '2020-12-31', 1, 1, 1, 25.00),
(10, '2023-01-20', 2, 1, 6, 45.00);

select DATE_FORMAT(date, "%y-%m") as month , sum(total_price) as sales from sales 
where year(date) = 2021 
group by month
order by month desc;
