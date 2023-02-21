create table Category (
	id int auto_increment primary key,
    name varchar(256)
);
alter table category 
add quantity int ;

update category set quantity=60 where id = 4;
delete from category where id = 5;
create table Products
(
	id int auto_increment,
    name varchar(256),
    category_id int,
    primary key(id)
);


insert into Category (name) values("smartphone");
insert into Category (name) values("laptop");
insert into Category (name) values("earphones");
insert into Category (name) values("wearables");

select name from Category where name="smartphone";



insert into Products (name, category_id) select name,quantity from Category;