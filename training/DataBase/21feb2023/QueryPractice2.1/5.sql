/*
Write an SQL query to report all customers who never order
anything. Return the result table in any order.
*/

CREATE TABLE customers (
    id INT AUTO_INCREMENT,
    name VARCHAR(256),
    PRIMARY KEY (id)
);
CREATE TABLE orders (
    id INT AUTO_INCREMENT,
    customer_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (customer_id)
        REFERENCES customers (id)
        ON DELETE CASCADE
);

insert into customers (name) values("joe");
insert into customers (name) values("henry");
insert into customers (name) values("sam");
insert into customers (name) values("max");


insert into orders (customer_id) values(3);
insert into orders (customer_id) values(1);

SELECT 
    c.name
FROM
    customers c
        LEFT JOIN
    orders o ON c.id = o.customer_id
WHERE
    o.id IS NULL;