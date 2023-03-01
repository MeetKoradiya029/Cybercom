CREATE TABLE Age (
  id INT,
  name VARCHAR(50) NOT NULL,
  age INT NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO age  VALUES (5000,'John', 30);
INSERT INTO age  VALUES (10000,'Mary', 25);
INSERT INTO age  VALUES (2000,'Peter', 40);
INSERT INTO age  VALUES (3000,'Sarah', 35);
INSERT INTO age  VALUES (7000,'David', 28);
INSERT INTO age  VALUES (8000,'David', 29);
INSERT INTO age  VALUES (4000,'David', 23);
INSERT INTO age  VALUES (6000,'David', 22);
INSERT INTO age  VALUES (9000,'David', 26);
INSERT INTO age  VALUES (1000,'David', 21);


select id,name , age , count(*)/2 as num
from age limit 1 offset num;
