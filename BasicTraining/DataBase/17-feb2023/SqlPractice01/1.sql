/*
Create a database structure for product and categories. One
product can be in more than one category and one category can
have multiple products.
*/


/*Creating three tables products,categories and product categories*/

CREATE TABLE products (
product_id INT PRIMARY KEY,
product_name VARCHAR(255)
);

CREATE TABLE categories (
category_id INT PRIMARY KEY,
category_name VARCHAR(255)
);

CREATE TABLE product_categories (
product_id INT,
category_id INT,
PRIMARY KEY (product_id, category_id),
FOREIGN KEY (product_id) REFERENCES products(product_id),
FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

/*Insert some sample data*/

INSERT INTO products (product_id, product_name)
VALUES (1, 'Product 1'), (2, 'Product 2'), (3, 'Product 3');

INSERT INTO categories (category_id, category_name)
VALUES (1, 'Category 1'), (2, 'Category 2'), (3, 'Category 3');

INSERT INTO product_categories (product_id, category_id)
VALUES (1, 1), (1, 2), (2, 2), (2, 3), (3, 1), (3, 3);


/*Retriving products that have customer_id=2*/

SELECT p.product_name
FROM products p
INNER JOIN product_categories pc ON p.product_id = pc.product_id
WHERE pc.category_id = 2;
    