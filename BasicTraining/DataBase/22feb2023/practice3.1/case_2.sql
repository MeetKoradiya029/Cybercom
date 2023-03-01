/*
Write a query to retrieve the name and price of all items in the
inventory where the quantity is greater than 0 and the category
is 'electronics', sorted in descending order by price.
*/


CREATE TABLE inventory (
 id INT,
 name VARCHAR(256),
 quantity INT,
 price DECIMAL(10,2),
 category VARCHAR(128),
 PRIMARY KEY(id)
);
insert into inventory values (1,"Arial",50,80.00,"Detergent");
insert into inventory values (2,"Dove",20,102.00,"Persona Care");
insert into inventory values (3,"Toothbrush",60,30.00,"Dental Care");
insert into inventory values (4,"TV",50,20000,"electronics");
insert into inventory values (5,"AC",100,40000,"electic");
insert into inventory values (6,"Asus vivobook oled ",120,50000,"Electronic");

select name, price from inventory where (quantity>0 and category="electronics") order by price desc;
